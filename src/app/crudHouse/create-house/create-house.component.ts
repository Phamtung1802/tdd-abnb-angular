import {Component, OnInit} from '@angular/core';

import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AppUser} from '../../object-interfaces/AppUser';
import {AppProperty} from '../../object-interfaces/AppProperty';
import {IloginrequestService} from '../../service/iloginrequest.service';
import {AppPropertyService} from '../../service/app-property.service';
import {Iloginrequest} from '../../object-interfaces/Iloginrequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.scss']
})

export class CreateHouseComponent implements OnInit {
  currentUser: AppUser = {
  };
  loginRequest: Iloginrequest = null;
  process$: number;
  houseForm: FormGroup;
  coverArtFileSelected: File = null;
  checkedCoverArtFile: boolean;
  message: string;
  private house: AppProperty;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private service: AppPropertyService,
    private router: Router,
    private iloginRequestService: IloginrequestService,
  ){ }

  ngOnInit(): void {
    let token: Object = JSON.parse(sessionStorage.getItem('rbnbuser'));
    if(token!=null){
      this.iloginRequestService.firstLogin().subscribe(
        //Valid
        data=>{
          this.currentUser=data;
          console.log(this.currentUser);
        },
        //err
        error=>{
          if(error.error.exception=="com.TDD.ABnB.exceptions.InvalidTokenException"){
            sessionStorage.removeItem('rbnbuser');
          }
        }
      )}
    console.log("edit comp"+this.currentUser);

    this.houseForm = this.fb.group({
      name: ['', [Validators.required]],
      status: [''],
      type: [''],
      description: [''],
      bedroomNum: [''],
      bathroomNum: [''],
      address: [''],
      longitude: [''],
      latitude: [''],
      pricePerDay: [''],
    });
  }

  checkCoverArtFile(event): void {
    if (event.target.files && event.target.files[0]) {
      this.checkedCoverArtFile = true;
      console.log(event.target.files[0].size);
      const imgName = event.target.files[0].name.split('.').slice(1, 2);
      console.log(imgName);
      if (imgName == 'png' || imgName == 'jpg' || imgName == 'gif' || imgName == 'jpeg') {
        this.coverArtFileSelected = event.target.files[0];
        this.getCoverArtUrl();
        this.checkedCoverArtFile = false;
      } else {
        this.checkedCoverArtFile = true;
      }
    }
  }


  submit() {
    this.house = {
      ...this.house,
      ...this.houseForm.value
    };
    this.service.createHouse(this.house).subscribe(next => this.router.navigateByUrl('/personal'));
  }

  getCoverArtUrl() {
    const asName = this.coverArtFileSelected.name.split('.').slice(0, 1);
    const filePath = `CoverArt/${asName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.coverArtFileSelected);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          if (url) {
            this.house.appImages = url;
          }
          console.log(this.house.appImages);
          this.message = 'upload completed';
        });
      })
    ).subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }
  get name() {
    return this.houseForm.get('name');
  }
  checkform(): boolean {
    if (this.houseForm.invalid ||  this.checkedCoverArtFile) {
      return true;
    }
  }

  getEvent(event): void{
    console.log('input');
    console.log(event);
  }

}

import { Component, Inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppProperty } from '../object-interfaces/AppProperty';
import { AppUser } from '../object-interfaces/AppUser';
import { AppUserService } from '../service/app-user.service';
import { Iloginrequest } from 'src/app/object-interfaces/Iloginrequest';
import { IloginrequestService } from '../service/iloginrequest.service';
import { AppImage } from '../object-interfaces/AppImage';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FileService } from '../service/fire-service.service';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit,OnDestroy {
  house: AppProperty={  appImages: []};
  currentUser: AppUser={};
  userForm: FormGroup;
  message: string;
  success: boolean = false;
  imageArray: AppImage[]=[];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  imgLink= 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg';
  downloadURL:Observable<any>;
  coverArtFileSelected: File;
  checkedCoverArtFile: boolean;

  constructor(private appUserService: AppUserService, private router: Router, private fb: FormBuilder, private injector: Injector,
    @Inject(AngularFireStorage) private storage: AngularFireStorage, @Inject(FileService) private fileService: FileService) {

    this.appUserService.getData().subscribe(data=>{
      this.currentUser= data;
    });
  }

  ngOnDestroy(): void {
    this.message=null;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      type: ['', [Validators.required]],
      address: ['', [Validators.required]],
      bedroomNum: ['', [Validators.required]],
      bathroomNum: [''],
      description:['', [Validators.required]],
      pricePerDay:['', [Validators.required]],
      appImages: ['']
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

  getCoverArtUrl(){
    const asName = this.coverArtFileSelected.name.split('.').slice(0, 1);
    const filePath = `CoverArt/${asName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, this.coverArtFileSelected);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          if (url) {
            this.house.appImages.push({url: url});
            this.house.appImages.forEach(element => {
              console.log(element.url);
            });
            this.imgLink= url;
          }
          console.log(this.house.appImages);
        });
      })
    ).subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }


  createHouse(){
    let image: AppImage = {
      url: this.userForm.value.appImages
    }
    this.imageArray.push({url:this.imgLink});

    let property: AppProperty={
      name: this.userForm.value.name,
      status: this.userForm.value.status,
      type: this.userForm.value.type,
      bedroomNum: this.userForm.value.bedroomNum,
      bathroomNum: this.userForm.value.bathroomNum,
      description: this.userForm.value.description,
      pricePerDay: this.userForm.value.pricePerDay,
      appImages: this.imageArray,
      address: this.userForm.value.address,
      appUser:{
        id: this.currentUser.id
      }
    };
    this.appUserService.createHouse(property).subscribe(
    //thanh cong
    data => {
      this.message="Success!!!";
      this.appUserService.changeData(data);
      // this.router.navigateByUrl('/login',{state: {success:true}});
    },
    //that bai
      (error) => {
        this.success=true;
        this.message= error.error.message;
      }
    );
    this.imageArray=[];
  }

  get name() {
    return this.userForm.get('name');
  }
  get status() {
    return this.userForm.get('status');
  }
  get type() {
    return this.userForm.get('type');
  }
  get bedroomNum(){
    return this.userForm.get('bedroomNum');
  }
  get bathroomNum(){
    return this.userForm.get('bathroomNum');
  }

  get description(){
    return this.userForm.get('description');
  }

  get pricePerDay(){
    return this.userForm.get('pricePerDay');
  }
  get address(){
    return this.userForm.get('address');
  }
  get appImages(){
    return this.userForm.get('appImages');
  }



}

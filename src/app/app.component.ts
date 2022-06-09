import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginform:any;

  ngOnInit(){
  this.loginform= new  FormGroup({
    firstname : new FormControl(null,Validators.required),
    lastname : new FormControl(null,Validators.required),
    email : new FormControl(null,[Validators.required,Validators.email]),
    Phonenumber : new FormControl(null,[Validators.required, Validators.maxLength(10)]),

  })

  }
  get firstname(){ return this.loginform.get('firstname');}
  get lastname(){ return this.loginform.get('lastname');}
  get email(){ return this.loginform.get('email');}
  get Phonenumber(){ return this.loginform.get('Phonenumber');}

  submit(data:any){
    console.log(this.loginform.value);
    let datas = JSON.parse(localStorage.getItem('logindata') ?? `[]`);
    let currentUser = datas.find((user:any)=>user.email === data.email);
    if (currentUser?.email){
      alert('user exits');
    }else{
      datas.push(data);
      localStorage.setItem("logindata",JSON.stringify(datas));

    }
    
  }
}

import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../service/notification.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  assetPath = environment.assetPath
  signForm: FormGroup

  constructor(private router: Router, private notiServ:NotificationService) {
    this.signForm = new FormGroup({
      fullname: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmpassword: new FormControl('',Validators.required)
    })

  }

  onSubmit(){
    this.notiServ.tinySuccess("dsa")
    console.log("form valuesss",this.signForm.value)
  }

  navigation(path: any) {
    this.router.navigate(['/' + path])
  }
}

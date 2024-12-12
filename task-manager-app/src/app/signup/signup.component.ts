import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  assetPath = environment.assetPath
  signForm: FormGroup

  constructor(private router: Router) {
    this.signForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl('')
    })

  }

  onSubmit(){
    console.log("form valuesss",this.signForm.value)
  }

  navigation(path: any) {
    this.router.navigate(['/' + path])
  }
}

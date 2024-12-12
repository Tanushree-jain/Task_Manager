import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  assetPath = environment.assetPath

  constructor(private router: Router){}

  navigation(path:any){
    this.router.navigate(['/'+path])
  }
}

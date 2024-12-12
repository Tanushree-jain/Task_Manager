import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

assetPath = environment.assetPath

constructor(private router : Router){}

navigation(path:any){
  this.router.navigate(['/'+path])
}
}

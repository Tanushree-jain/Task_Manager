import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  tinySuccess(message: string | undefined) {
    Swal.fire({
      position: "top-end",
      // icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      background:"#85db00",
      color:"#fff",
      width:500,
    });
  }

  tinyError(message: string | undefined) {
    Swal.fire({
      position: "top-end",
      // icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      background:"#c00000",
      color:"#fff",
      width:500,
    });
  }
}

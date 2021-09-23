import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;



  constructor() { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
    'emailId': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, Validators.required),
    'phoneNo' : new FormControl(null, Validators.required),
    'male': new FormControl(null),
    'female': new FormControl(null)

    })
  }
  onSubmit():void {
    let registerData = []
    console.log(this.RegisterForm.value)
    registerData.push(this.RegisterForm.value)
    console.log(registerData)
    if(registerData[0].name!= null){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration done',
        showConfirmButton: false,
        timer: 1500
      })

    }

    this.RegisterForm.reset()


  }
}

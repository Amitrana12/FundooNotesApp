import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit (): void{
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.pattern("^[A-Z]{1}[a-z]{2,}"),Validators.required,Validators.minLength(3)]],
      email:['',[Validators.pattern("^[a-zA-Z0-9+_-]+(?:\\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9]+(?:\\.[a-zA-Z]{2,}){1,2}$"),Validators.required]],
      password:['',[Validators.pattern("^(?=.*[0-9])" + "(?=.*[a-z])(?=.*[A-Z])" + "(?=.*[@#$%^&+=])" + "(?=\\S+$).{8,}$"),Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required]

   });

  }

}

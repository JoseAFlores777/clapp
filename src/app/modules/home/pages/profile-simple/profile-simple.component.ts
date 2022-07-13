import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-simple',
  templateUrl: './profile-simple.component.html',
  styleUrls: ['./profile-simple.component.scss']
})
export class ProfileSimpleComponent implements OnInit {

  prueba: boolean = false;
  
  myForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  seeValues() { 
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

}

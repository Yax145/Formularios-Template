import { Component } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  register: IRegisterForm = { 
    name: "",
    email: "",
    password: "",
    repeatPass: ""
  }
  constructor() {}
  submit(){
  
  }
}



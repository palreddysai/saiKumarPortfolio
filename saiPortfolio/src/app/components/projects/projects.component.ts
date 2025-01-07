import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
userForm: FormGroup;
constructor(private fb:FormBuilder){
  this.userForm = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required]]   

  });
}
onSubmit(){
  console.log(this.userForm.value);
}
}

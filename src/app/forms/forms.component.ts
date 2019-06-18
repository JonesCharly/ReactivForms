import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  movieForm: FormGroup;


  types= ['serie','episode','film']

  constructor( private fb: FormBuilder ) {}




  ngOnInit() {

    this.movieForm = this.fb.group ({
        idMovie: ['', Validators.required],
        nameMovie: ['', Validators.required],
        yearMovie: ['', Validators.required],
        typeControl: ['serie', Validators.required],
    })
  }

  onSubmit(){

    console.log(this.movieForm.value)
  }
}

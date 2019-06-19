import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { rangeDateValidator } from './validRequired';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  movieForm: FormGroup;
  
  


  types= ['serie','episode','film']

  constructor(
    private fb: FormBuilder) {}

  // idMovie: FormControl;
  // nameMovie: FormControl;
  // yearMovie: FormControl;
  ficheControl: FormControl;



  ngOnInit() {

    this.movieForm = this.fb.group ({
      idForm: this.fb.group({
        idMovie: [''],
        nameMovie: ['']
      },
      {
        validator: this.isRequiredValidator('idMovie','nameMovie')
      }
      ),


      yearMovie: [ , [Validators.required, rangeDateValidator]],
      typeControl: ['serie', Validators.required],
      ficheControl: ['courte', Validators.required]

    })

  }


  onSubmit(){
    console.log(this.movieForm);
    
    this.movieForm.patchValue({
      ficheControl: 'courte' // Can set specific or all properties
    })
    if (this.movieForm.valid) {
    const result = {...this.movieForm.value }
    console.log(result)
  } 

}

  isRequiredValidator(idMovie, nameMovie): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const value1 = control.get(idMovie).value;
      // Get second control value
      const value2 = control.get(nameMovie).value;
  
      if (value1=== '' && value2 === '') {
        return { 
          isRequired: true
        }
      } else {
        return ;
      }
    };
  }
  

}

// ||
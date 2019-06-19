import { AbstractControl } from '@angular/forms';

export function rangeDateValidator(control: AbstractControl) {

    const minYear= 1900
    const maxYear= 2020
  
    if (control.value>minYear && control.value<maxYear) {
      return null;
    } else {
      return { invalidDate: 'La date doit etre comprise entre ' + minYear + ' et ' + maxYear } ;
    }
  };
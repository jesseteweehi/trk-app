import { AbstractControl } from '@angular/forms';


const list: Array<string> = ['9','10','11','12','13'];

function inArray(n,a) {
  	return a.includes(n);
  }

export class CustomValidators {

	static levelNumber(control: AbstractControl): {[key: string]: boolean} {

	if (!control.value) {
		return null;
	}

	return inArray(control.value,list) ?
			null : {'levelNumber' : true};
	}
}
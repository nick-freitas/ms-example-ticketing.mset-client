import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignUpService } from './sign-up.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private signUpService: SignUpService) {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    console.log('sub');
    const { email, password } = this.signupForm.value;
    this.signUpService
      .signUp(email, password)
      .subscribe((res) => console.warn(res));
  }
}

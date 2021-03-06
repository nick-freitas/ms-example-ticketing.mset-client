import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from './sign-up.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    private signUpService: SignUpService,
    private _snackBar: MatSnackBar
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this._snackBar.dismiss();

    const { email, password } = this.signUpForm.value;
    if (!email) {
      return this._snackBar.open('Email is required', 'Close');
    }

    if (!password) {
      return this._snackBar.open('Password is required', 'Close');
    }

    this.signUpForm.disable();

    return this.signUpService.signUp(email, password).subscribe({
      next: () => {
        this.signUpForm.enable();
      },
      error: (err) => {
        console.error(err);
        this.signUpForm.enable();

        switch (err?.error?.message) {
          case 'Invalid Email':
            return this._snackBar.open(
              'Could not find an account with that email. Sign up instead.',
              'Close'
            );
          default:
            return this._snackBar.open(
              'Something went wrong, try again later',
              'Close'
            );
        }
      },
    });
  }
}

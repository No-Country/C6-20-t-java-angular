import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertsService } from 'src/app/core/services/alerts.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent implements OnInit {
  user!: FormGroup;

  data: any;

  passRepeat: string = '';

  setPassRepeat(event: any) {
    this.passRepeat = event.target.value;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public matDialog: MatDialog,
    private fb: FormBuilder,
    private userService: UserService,
    private alertsService:AlertsService
  ) {}

  ngOnInit(): void {
    this.user = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      puntos: 0,
    });
  }

  register() {
    if (this.passRepeat === this.user.get('password')?.value) {
      this.userService.postUser(this.user.value).subscribe({
        next: () => {
          this.alertsService.confirmAlert('Usuario Creado', 'Intenta hacer login con tus credenciales')
        },
      });
    } else {
      this.alertsService.errorAlert('Error en el registro', 'Tus contraseñas no coinciden')
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcaService } from '../../services/marca.service';
import { AutoService } from '../../services/auto.service';
import { IMarca } from 'src/app/interfaces/marca';

@Component({
  selector: 'app-create-auto',
  templateUrl: './create-auto.component.html',
  styleUrls: ['./create-auto.component.css'],
})
export class CreateAutoComponent implements OnInit {
  marca: IMarca[] = [];
  formulario: FormGroup = new FormGroup({});

  constructor(
    private marcaService: MarcaService,
    private autoService: AutoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.marcaService.list('marca/lista').subscribe((data: IMarca[]) => {
      this.marca = data;
    });
    this.formulario = this.fb.group({
      nombreAuto: [, [Validators.required]],
      precioAuto: [, [Validators.required]],
      stockAuto: [, [Validators.required]],
      marca: [, [Validators.required]],
    });
  }

  add() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched;
      return;
    }
    this.autoService
      .create(this.formulario.value, 'auto/registra')
      .subscribe((data: any) => {
        this.snackBar.open('SE REGISTRO AUTO', 'AVISO', { duration: 2000 });
      });
  }
}

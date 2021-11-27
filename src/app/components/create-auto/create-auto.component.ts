import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { IMarca } from 'src/app/interfaces/marca';

@Component({
  selector: 'app-create-auto',
  templateUrl: './create-auto.component.html',
  styleUrls: ['./create-auto.component.css'],
})
export class CreateAutoComponent implements OnInit {
  marca: IMarca[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.list('marca/lista').subscribe((data: IMarca[]) => {
      this.marca = data;
    });
  }
}

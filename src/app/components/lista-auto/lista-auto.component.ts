import { Component, OnInit } from '@angular/core';
import { IAuto } from 'src/app/interfaces/auto';
import { AutoService } from '../../services/auto.service';

 

@Component({
  selector: 'app-lista-auto',
  templateUrl: './lista-auto.component.html',
  styleUrls: ['./lista-auto.component.css'],
})
export class ListaAutoComponent implements OnInit {
  auto: IAuto[] = [];

  displayedColumns: string[] = ['idAuto', 'marca', 'nombreAuto', 'precioAuto', 'stockAuto'];

  constructor(private autoService: AutoService) {}

  ngOnInit(): void {
    this.autoService.list('auto/lista').subscribe((data: IAuto[]) => {
      console.info(data)
      this.auto = data;
    });
  }
}

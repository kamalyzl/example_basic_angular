import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutoComponent } from './components/lista-auto/lista-auto.component';
import { CreateAutoComponent } from './components/create-auto/create-auto.component';
import { AutoComponent } from './components/auto/auto.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaAutoComponent,
  },
  {
    path: 'create',
    component: CreateAutoComponent,
  },
  {
    path: 'auto',
    component: AutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

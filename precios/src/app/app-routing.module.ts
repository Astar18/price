import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPrecioComponent } from './components/consulta-precio/consulta-precio.component';

const routes: Routes = [
  {path: 'consultaPrecio', component: ConsultaPrecioComponent},
  {path: '', redirectTo: '/consultaPrecio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

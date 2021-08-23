import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BancoComponent } from './components/banco/banco.component';
import { ClientesComponent } from './components/clientes/clientes.component';


const routes: Routes = [
  {path:'', component:ClientesComponent},
  {path:"banco", component:BancoComponent},
  {path:"cliente", component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

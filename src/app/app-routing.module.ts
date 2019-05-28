import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LengthComponent } from "./length/length.component";
import { WeightComponent } from "./weight/weight.component";

const routes: Routes = [
  {path: 'length' , component : LengthComponent},
  {path: 'weight' , component : WeightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

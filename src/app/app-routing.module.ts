import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleOneComponent } from './pages/sample-one/sample-one.component';

const routes: Routes = [
  { path: 'sample-one', component: SampleOneComponent },
  { path: '**', redirectTo: 'sample-one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

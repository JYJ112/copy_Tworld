import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SallyComponent } from './sally/sally.component';
import { TworldComponent } from './tworld/tworld.component';
import { ChocoaComponent } from './chocoa/chocoa.component';

const routes: Routes = [
    { path: 'sally', component: SallyComponent },
    { path: 'tworld', component: TworldComponent },
    { path: 'chocoa', component: ChocoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

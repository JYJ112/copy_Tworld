import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SallyComponent } from './sally/sally.component';
import { TworldComponent } from './tworld/tworld.component';
import { ChocoaComponent } from './chocoa/chocoa.component';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
    { path: 'sally', component: SallyComponent },
    { path: 'tworld', component: TworldComponent },
    { path: 'chocoa', component: ChocoaComponent },
    { path: 'flex', component: FlexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

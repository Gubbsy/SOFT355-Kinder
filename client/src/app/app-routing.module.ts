import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { VoteCatModule } from './views/vote-cat/vote-cat.module';

const routes: Routes = [
  { path: '', redirectTo: 'kinder',  pathMatch: 'full'},
  { path: 'kinder', loadChildren: () => VoteCatModule },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

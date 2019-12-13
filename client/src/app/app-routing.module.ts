import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopCatComponent } from './views/top-cat/top-cat.component';
import { VoteCatComponent } from './views/vote-cat/vote-cat.component';


const routes: Routes = [
  { path: 'vote-cats', component: VoteCatComponent },
  { path: 'top-cats', component: TopCatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

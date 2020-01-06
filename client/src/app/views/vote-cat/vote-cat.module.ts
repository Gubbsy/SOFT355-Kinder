import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoteCatComponent } from './vote-cat.component';

@NgModule({
  declarations: [VoteCatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: VoteCatComponent }])
  ],
  providers: [],
})
export class VoteCatModule { }

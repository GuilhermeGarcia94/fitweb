import { NgModule } from '@angular/core';
import {TrainingsComponent} from './trainings/trainings.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../../shared/common/common.module';

@NgModule({
  declarations: [
    TrainingsComponent,
  ],

  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrainingsComponent
      },
    ])
  ]
})
export class TrainingModule{}

import { NgModule } from '@angular/core';
import {TrainingsComponent} from './training/trainings.component';
import{DrillsComponent} from './drills/drills.component';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { AppCommonModule} from '../../shared/common/common.module';

@NgModule({
  declarations: [
    TrainingsComponent,
    DrillsComponent
  ],

  entryComponents: [DrillsComponent],

  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrainingsComponent
      },
      {
        path: 'drills',
        component: DrillsComponent
      }
    ])
  ]
})

export class TrainingModule{}

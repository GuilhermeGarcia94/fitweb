import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../../shared/common/common.module';
import { AnamneseComponent } from '../anamnese/components/anamnese/anamnese.component'

@NgModule({
  declarations: [
    AnamneseComponent,
  ],

entryComponents: [AnamneseComponent],
    imports: [
      CommonModule,
      AppCommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: AnamneseComponent
        },
      ]),

    ]
  })
  export class AnamneseModule {}

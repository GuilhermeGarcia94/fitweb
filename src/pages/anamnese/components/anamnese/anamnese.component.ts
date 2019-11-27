import { Component, Injector, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Extender } from '../../../../shared/helpers/extender';
import { map } from 'rxjs/internal/operators/map';
import { ITrainer } from '../../../../shared/models';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.scss']
})

export class AnamneseComponent extends Extender implements OnInit {
  others: boolean = false;
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {

  }
}

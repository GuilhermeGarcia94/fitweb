import { Component, Injector, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Extender } from '../../../shared/helpers/extender';
import { ITrainings } from '../../../shared/models/trainings';



@Component({
  selector: 'app-traininigs',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent extends Extender implements OnInit {

  public trainings: ITrainings[] = [];
  public trainersRef: AngularFirestoreCollection<ITrainings>;

  constructor(protected injector: Injector)  {
    super(injector);
  }

public ngOnInit() {
}
}

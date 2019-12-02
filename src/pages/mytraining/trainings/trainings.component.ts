import { Component, Injector, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';
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

  constructor(protected injector: Injector) {
    super(injector);
  }

public ngOnInit() {
  this._getTrainings();
}

private _getTrainings(): void {
  this.status = 'load';

  this.trainersRef = this.afStore$.collection('trainers');
  this.trainersRef
    .snapshotChanges()
    .pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as ITrainings;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    )

  }
}

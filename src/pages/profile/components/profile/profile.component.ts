import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../shared/helpers/extender';
import { IUser } from '../../../../shared/models';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends Extender implements OnInit {
  public goals: Array<{
    title: string;
    code: string;
    units: string;
    value: string;
  }> = [];
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {
    this.auth$.user$.subscribe((user: IUser) => {
      this.goals = [
        {
          title: 'Peso',
          code: 'weight',
          value: user.weight,
          units: 'kg'
        },
        {
          title: 'IMC',
          code: 'bmi',
          value: user.bmi,
          units: ''
        },
        {
          title: 'Gordura corporal',
          code: 'bfp',
          value: user.bfp,
          units: '%'
        },
        {
          title: 'Altura',
          code: 'height',
          value: user.height,
          units: 'cm'
        },
        {
          title: 'Horas de sono',
          code: 'sleeptime',
          value: user.sleeptime,
          units: 'hours'
        },
        {
          title: 'Hidratação',
          code: 'hydration',
          value: user.hydration,
          units: '%'
        }
      ];
    });
  }

  public async openOptions(): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: EditProfileComponent
    });

    await modal.present();
  }
}

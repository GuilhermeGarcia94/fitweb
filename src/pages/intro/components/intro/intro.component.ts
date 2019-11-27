import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../../shared/helpers/extender';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent extends Extender implements OnInit {
  public categories: Array<{ icon: string; text: string; url: string }> = [
    {
      icon: 'assets/icon/bag.svg',
      text: 'Blogs',
      url: this.routes.blogs,
    },
    {
      icon: 'assets/icon/activity.svg',
      text: 'Academias',
      url: this.routes.gyms,
    },
    {
      icon: 'assets/icon/activity2.svg',
      text: 'Instrutores',
      url: this.routes.trainers,
    },
    {
      icon: 'assets/icon/cart.svg',
      text: 'Loja',
      url: this.routes.shop,
    },
  ];
  constructor(protected injector: Injector) {
    super(injector);
  }

  public ngOnInit() {}

  public async openOptions() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opções',
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            this.auth$.signOut();
          },
        },
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
  }
}

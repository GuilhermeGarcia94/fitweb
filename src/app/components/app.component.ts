import { Component, Injector } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { blogs } from '../../assets/data/blog';
import { notifications } from '../../assets/data/notifications';
import { products } from '../../assets/data/products';
import { trainers } from '../../assets/data/trainers';
import { Extender } from '../../shared/helpers/extender';

// import { Anamnese } from '../../pages/anamnese/components/anamnese/anamnese.component'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent extends Extender {
  /**
   * side menu info array
   */
  public appPages = [
    {
      title: 'início',
      url: this.routes.intro,
      icon: 'assets/icon/home.svg'
    },
    {
      title: 'blogs',
      url: this.routes.blogs,
      icon: 'assets/icon/bag.svg'
    },
    {
      title: 'academias',
      url: this.routes.gyms,
      icon: 'assets/icon/activity.svg'
    },
    {
      title: 'instrutores',
      url: this.routes.trainers,
      icon: 'assets/icon/activity2.svg'
    },
    {
      title: 'loja',
      url: this.routes.shop,
      icon: 'assets/icon/cart.svg'
    },
    {
      title: 'configurações',
      url: this.routes.settings,
      icon: 'assets/icon/setting.svg'
    },
   /*, {
      title: 'anamnese',
      url: this.routes.anamnese,
      icon: 'assets/icon/setting.svg'
    }*/
    {
    title: 'Treinos',
    url: this.routes.mytraining,
    icon: 'assets/icon/setting.svg'
    }
  ];

  constructor(protected injector: Injector, private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
      super(injector);
      this.initializeApp();

      //statusbar color
      if(this.platform.is('android')) {
        this.statusBar.styleLightContent();
      }
    }
  

  /**
   * initialise app
   */
  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.checkFirstUse();
    });
  }

  /** check if app is installed or opened for the first time on device */
  public checkFirstUse() {
    this.afStore$
      .doc('settings/personalyze')
      .snapshotChanges()
      .subscribe((initial) => {
        if (!initial.payload.exists) {
          this.setDB();
          this.afStore$.doc('settings/personalyze').set({ init: true });
        }
      });
  }

  /**
   * add data to db from data files
   */
  private setDB() {
    trainers.forEach((element) => {
      this.afStore$.collection('trainers').add(element);
    });
    notifications.forEach((element) => {
      this.afStore$.collection('notifications').add(element);
    });
    blogs.forEach((element) => {
      this.afStore$.collection('blogs').add(element);
    });
    products.forEach((element) => {
      this.afStore$.collection('products').add(element);
    });
    products.forEach((element) => {
      this.afStore$.collection('anamnese').add(element);
    });
  }
}

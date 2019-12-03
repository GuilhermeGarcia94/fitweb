import { Component, Injector, OnInit } from '@angular/core';
import { Extender } from '../../../shared/helpers/extender';


@Component({
  selector: 'app-drills',
  templateUrl: './drills.component.html',
  styleUrls: ['./drills.component.scss']
})
export class  DrillsComponent extends Extender implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);
  }

public ngOnInit() {
}

}

import { Component } from '@angular/core';
import {
  TransferVarsService,
  EffectService
} from 'services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Менеджер контактов';

  constructor(
    public transferVarsService: TransferVarsService,
    public effectService: EffectService
  ) {}

}

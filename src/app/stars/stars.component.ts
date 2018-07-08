import { Component, OnInit, Input } from '@angular/core';
import {
  EffectService,
  LocalStorageService,
  StarsService
} from 'services';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars: number;

  @Input() id: string;

  constructor(
    private localStorageService: LocalStorageService,
    private starsService: StarsService,
    public effectService: EffectService
  ) { }

  setStars(index: number): void {

    this.stars = index;
    this.localStorageService.setValue(this.id, {stars: index});

  }

  ngOnInit() {
    this.stars = this.starsService.getStars(this.id);
  }

}

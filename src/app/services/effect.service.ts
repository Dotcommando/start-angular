import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EffectService {

  onBorisClick(e: HTMLElement): void {
    const targetClass = 'effect-boris_click';
    e.className += ' ' + targetClass;
    setTimeout(function(){
      e.className = e.className.replace(' ' + targetClass, '');
    }, 320);
  }

}

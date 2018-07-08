import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferVarsService {

  private title = '';

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk', 'Thor'];

  public deletedHero?: string;

  // valor inicial underfine

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }



}

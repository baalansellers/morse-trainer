import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-tree',
  templateUrl: './character-tree.component.html',
  styleUrls: ['./character-tree.component.css']
})
export class CharacterTreeComponent implements OnInit {
  private _selectionTiming: number = 3;
  private _nodeContainerClass: string = 'd-flex justify-content-center';
  private _nodeClass: string = ''

  constructor() { }

  ngOnInit() {
  }

}

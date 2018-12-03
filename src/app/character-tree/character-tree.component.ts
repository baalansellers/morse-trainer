import { Component, OnInit } from '@angular/core';

import { CharSelectTimerComponent } from '../char-select-timer/char-select-timer.component';

@Component({
  selector: 'app-character-tree',
  templateUrl: './character-tree.component.html',
  styleUrls: ['./character-tree.component.css']
})
export class CharacterTreeComponent implements OnInit {
  private _selectionTiming: number = 3;
  private _nodeContainerClass: string = 'd-flex justify-content-center';
  private _nodeClass: string = '';
  private _treeMap: treeMap;

  constructor() { }

  ngOnInit() {
    this._treeMap = new treeMap();

    this._treeMap.start = new treeNode();
    this._treeMap.state = this._treeMap.start;

    this._treeMap.state.dahNode = new treeNode();
    this._treeMap.state.ditNode = new treeNode();
    //this._treeMap.state.dah = 
  }

}

class treeMap {
  start: treeNode
  state: treeNode
}

class treeNode {
  dahNode: treeNode;
  ditNode: treeNode;
  dah: () => void;
  dit: () => void;
}

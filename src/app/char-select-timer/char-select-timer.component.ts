import { Component, EventEmitter, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-char-select-timer',
  templateUrl: './char-select-timer.component.html',
  styleUrls: ['./char-select-timer.component.css']
})
export class CharSelectTimerComponent implements OnInit, OnDestroy {
  private _gaugeMax: number;
  private _gaugeValue: number;
  private _gaugeLabel: string;
  private _interval: any;
  private _getLabel: (value: number) => string;

  @Input()
  set gaugeLabel(label: string) {
    this._gaugeLabel = label;
    this._getLabel = function(value: number): string { return label; }
  }
  @Input()
  set gaugeMax(value: number) {
    this._gaugeMax = value;
    this._gaugeValue = value;
  }

  @Output()
  timesUp: EventEmitter<string> = new EventEmitter();

  @Output()
  startTimer() {
    const updateValues = (): void => {
      if (this._gaugeValue === 0) {
        clearInterval(this._interval);
        this.timesUp.emit(this._gaugeLabel);
      }

      this._gaugeValue--;
    };

    this._interval = setInterval(updateValues, 1000);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

}

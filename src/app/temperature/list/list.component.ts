import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'weather-spa-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  temperatures;
  @Output()
  deleteTemperature = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onDeleteTemperature(temperatureId) {
    this.deleteTemperature.emit(temperatureId);
  }

}

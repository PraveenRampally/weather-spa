import { Component, OnInit } from '@angular/core';
import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { TemperatureUtilService } from 'src/app/temperature/shared/services/temperature.util.service';

@Component({
  selector: 'weather-spa-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnChanges {
  
  summary: any;
  @Input()
  temperatures
  constructor(private temperatureUtilService: TemperatureUtilService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes['temperatures'] !== "undefined" && this.temperatures) {
      const currentTemperatures = this.temperatures.map(temperature => temperature.temperature);
      this.summary = this.temperatureUtilService.getSummary(currentTemperatures);
    }
  }
}

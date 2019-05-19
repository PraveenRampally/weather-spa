import { Component, OnInit } from '@angular/core';
import { TemperatureDataService } from 'src/app/temperature/shared/services/temperature.data.service';
import { Temperature } from 'src/app/temperature/shared/models/temperature.model';

@Component({
  selector: 'weather-spa-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
temperatures: Temperature[];
  constructor(private temperatureDataService: TemperatureDataService) { }

  ngOnInit() {
   this.getTemperatures();
  }

  private getTemperatures() {
    this.temperatureDataService.getTemperatures().subscribe( (data: Temperature[]) => {
      this.temperatures = data;
    },err => {
      console.log('Error: ',err)
    });
  }

  addTemperature(currentTemperature: any) {
    if( !currentTemperature) {
      return;
    }

    const temperature = new Temperature();
    temperature.temperature = currentTemperature.temperature;
    this.temperatureDataService.addTemperature(temperature).subscribe((data: Temperature) => {
      console.log('Temperature Added Successfully', data);
      this.getTemperatures();
    },err => {
      console.log('Error: ',err)
    });
  }

  deleteTemperature(temperatureId: string) {
    this.temperatureDataService.deleteTemperature(temperatureId).subscribe((data: any) => {
      console.log(data);
      this.getTemperatures();
    },err => {
      console.log('Error: ',err)
    });
  }

}

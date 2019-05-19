import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class TemperatureUtilService {
  temperatures: any = [];

  private getMedian() {
    let median = 0;
    const size = this.temperatures.length;

    if (size % 2 === 0) {
       median = (this.temperatures[size / 2 - 1] + this.temperatures[size / 2]) / 2;
    } else {

       median = this.temperatures[(size - 1) / 2];
    }
   return Math.floor(median);
  }

  private getAverage(): number {
    let average = 0;
    if (this.temperatures && this.temperatures.length > 0) {
      let count = this.temperatures.length;
      const sum = this.temperatures.reduce((previous, current) => current += previous);
      average = Math.floor(sum / count);
    }
    return average;
  }


  getSummary(data: any) {
    let result = { average: 0, highest: 0, lowest: 0, median: 0 };

    if (data && data.length > 0) {
      this.temperatures = data.sort((a, b) => a - b);
    } else {
      this.temperatures = data;
      return result;
    }

    result.average = this.getAverage();
    result.highest = this.temperatures && this.temperatures.length > 0 ? this.temperatures[this.temperatures.length - 1] : 0;
    result.lowest = this.temperatures && this.temperatures.length > 0 ? this.temperatures[0] : 0;
    result.median = this.getMedian();
    return result;
  }
}
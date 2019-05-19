import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'weather-spa-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  temperatureForm: FormGroup;
  @Output()
  addTemperature = new EventEmitter();
  
  constructor(private fb: FormBuilder) {
    this.temperatureForm = this.fb.group({
      temperature: ['', Validators.required]
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    if (!this.temperatureForm.valid)
    {
      return;
    }
      this.addTemperature.emit(this.temperatureForm.value);
  }

}

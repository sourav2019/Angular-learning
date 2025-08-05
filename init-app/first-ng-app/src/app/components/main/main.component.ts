import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private counterService: CounterService){}

  getCount(){
    return this.counterService.getCounter()
  };

  setCount(){
    return this.counterService.setCounter()
  }
}

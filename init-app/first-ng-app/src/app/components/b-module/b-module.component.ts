import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-b-module',
  imports: [],
  providers: [CounterService],
  templateUrl: './b-module.component.html',
  styleUrl: './b-module.component.css'
})
export class BModuleComponent {
constructor(private counterService: CounterService){}

  getCount(){
    return this.counterService.getCounter()
  };

  setCount(){
    return this.counterService.setCounter()
  }
}

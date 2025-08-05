import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a-module',
  imports: [],
  templateUrl: './a-module.component.html',
  styleUrl: './a-module.component.css'
})
export class AModuleComponent {
constructor(private counterService: CounterService){}

  getCount(){
    return this.counterService.getCounter()
  };

  setCount(){
    return this.counterService.setCounter()
  }

  getDoubleCount(){
    return this.counterService.doubleCount()
  }
}

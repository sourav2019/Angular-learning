import { computed, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // private count = 0;

  // getCounter(){
  //   return this.count;
  // }

  // setCounter (){
  //   return this.count = this.count + 1;
  // }




  private count = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  getCounter(){
    return this.count();
  }

  setCounter (){
    return this.count.update(oldValue => oldValue + 1)
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserType } from '../models/users';
import { JokesComponent } from './components/jokes/jokes.component';
import { CommonModule } from '@angular/common';
import { BModuleComponent } from './components/b-module/b-module.component';
import { AModuleComponent } from './components/a-module/a-module.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent, JokesComponent,
     CommonModule, AModuleComponent, BModuleComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

   users = [
    {name:"Ashish", isSingle: true, salary:43000, contact: 9876543123},
    {name:"Ajoy", isSingle: false, salary:40000, contact: 98765434321},
    {name:"Akash", isSingle: true, salary:42000, contact: 9875143124},
  ];

  recivedData(event: UserType){
    console.log("Event recived: ", event);
    const idx = this.users.findIndex((item => item.name === event.name));
    if (idx !== -1) {
      const updated = [...this.users];
      updated[idx] = { ...updated[idx], ...event };
      this.users = updated; // reassign to trigger change detection
  }
  }

}

import { booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, Output, output, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { UserType } from '../../../models/users';
import { CommonModule } from '@angular/common';
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value: string){
  return "Hi "+ value;
}

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // name = "Suresh";
  // status = "Single";
  // salary = 40000;
  // isButtonDisabled = true;
  // inputValue = "John Doe"
  
  // //two-way data binding:
  // onChange(event: Event){
  //   const { value } = event.target as HTMLInputElement;
  //   console.log("Called!", value);
  //   this.inputValue = value;
  // }

  // users = [
  //   {name:"Ashish", status: "single", salary:43000},
  //   {name:"Ajoy", status: "single", salary:40000},
  //   {name:"Akash", status: "N/A", salary:42000},
  // ]

  @ViewChild("myHeading") heading?: ElementRef


  // parent-to child
  @Input({alias: "userName"}) name = "";
  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform: numberAttribute}) salary!: number;
  @Input({transform: numberAttribute}) contact!: number;

  @Output() myEvent =  new EventEmitter<UserType>()
  sendData(){
    this.myEvent.emit({name: this.name, salary:50000, isSingle: !this.isSingle, contact:9876543213});
  }
  bgColor="blue"

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!", this.heading?.nativeElement.textContent); 
  }

}

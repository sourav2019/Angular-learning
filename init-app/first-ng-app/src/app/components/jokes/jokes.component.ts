import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { ChuckNorrisJoke } from '../../../models/users';

@Component({
  selector: 'app-jokes',
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent implements OnInit {
 joke = "Loading...";
  
  constructor(private jokeService: JokeService) {}

  // The corrected ngOnInit method
  ngOnInit(): void {
    // We subscribe to the observable returned by the service
    return this.getNewJoke()
  }

  getNewJoke() {
    this.jokeService.getJokes().subscribe((data: ChuckNorrisJoke) => {
        this.joke = data.value;
    }, (error) =>{
      this.joke = "Error.."
      console.log("Got error: ", error);
    });
  }
  
}

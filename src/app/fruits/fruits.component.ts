import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { FruitService } from './services/fruit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  userInput: string = '';
  fruits = [
    {
      color: 'red',
      taste: 'delicious'
    },
    {
      color: 'yellow',
      taste: 'delicious'
    },
    {
      color: 'blue',
      taste: 'sweet'
    },
    {
      color: 'red',
      taste: 'hot'
    },
    {
      color: 'green',
      taste: 'delicious'
    },
    {
      color: 'orange',
      taste: 'delicious'
    },
    {
      color: 'purple',
      taste: 'salty'
    }
  ];

  userCount: string = '';
  counts = [
    {
    one: '100',
    two: '200',
    three: '300'
    }

  ];



  joke: any = null;

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.newJoke();
  }

  newJoke() {
    this.fruitService.getJoke().subscribe((response) => {
      this.joke = response;
    });
  }

}

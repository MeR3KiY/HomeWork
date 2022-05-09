import { Component, OnInit } from '@angular/core';
import { User } from './models/redesign.model';
import { RedesignService } from './services/redesign.service';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-redesign',
  templateUrl: './redesign.component.html',
  styleUrls: ['./redesign.component.css']
})
export class RedesignComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'icon', 'age', 'phone', 'joke',];

  users = this.usersService.getUsers();

  name: any = '';
  surname = '';
  phone = '';

  constructor(private redesignService: RedesignService, private usersService: UsersService) { }

  save() {
      this.usersService.addUser(this.name, this.surname, this.phone);
  }


  getJoke() {
    for(let i = 0; i<3; i++) {
      this.redesignService.getJoke().subscribe((joke: any) => {
        this.users[i].joke = joke.category;
      });
    }
  }

  ngOnInit(): void {
    this.getJoke()
  }

  // 1. по массивам поработать с функциями find, findIndex, sort, filter, splice, join, forEach, pop, shift

  
  // 2. на страницу пользователя добавить возможность менять текущие имя, фамилию и телефон. По нажатию на кнопку надо обновлять данные в сервисе.
  // 3. под таблицей добавление пользователя, вводим телефон имя фамилию и он добавляется в табличку, а по клику можно также перейти
}

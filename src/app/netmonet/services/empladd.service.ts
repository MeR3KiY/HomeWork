import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class EmpladdNetmonetService {

  emplList: User[] = [];

  AddEmpl(name: string, surname:string, tel: string) {
    const empl: User = {
      name: name,
      surname: surname,
      tel: tel,
    };
    this.emplList.push(empl);
    console.log('done!')
  }

  getEmpl() {
    return this.emplList;
  }

  removeEmpl(i: number) {
    this.emplList.splice(i, 1);
  }
  

  constructor() {
  }
}

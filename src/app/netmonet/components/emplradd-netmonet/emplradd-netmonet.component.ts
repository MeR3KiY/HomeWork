import { Component, OnInit } from '@angular/core';
import { EmpladdNetmonetService } from '../../services/empladd.service';




@Component({
  selector: 'app-emplradd-netmonet',
  templateUrl: './emplradd-netmonet.component.html',
  styleUrls: ['./emplradd-netmonet.component.css']
})
export class EmplraddNetmonetComponent implements OnInit {

  name: any = '';
  surname = '';
  tel = '';

  constructor(private empladdservice: EmpladdNetmonetService) { }

  save() {
    if (this.name == '' || this.surname == '' || this.tel == '') {
      alert ('Пожалуйста, введите вседанные.');
    } else {
      this.empladdservice.AddEmpl(this.name, this.surname, this.tel);

      this.cleaner();
    }
  };

  cleaner() {
    return this.name = '',
    this.surname = '',
    this.tel = '';
  }

  ngOnInit(): void {
  }

}

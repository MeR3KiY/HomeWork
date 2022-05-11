import { Component, OnInit } from '@angular/core';
import { EmpladdNetmonetService } from '../../services/empladd.service';




@Component({
  selector: 'app-emplrlist-netmonet',
  templateUrl: './emplrlist-netmonet.component.html',
  styleUrls: ['./emplrlist-netmonet.component.css']
})
export class EmplrlistNetmonetComponent implements OnInit {

  emplList = this.empladdservice.getEmpl();

  userSearch: string = '';

  constructor(private empladdservice: EmpladdNetmonetService) { }

  removeEmpl(i: number) {
    this.empladdservice.removeEmpl(i);
  }

  ngOnInit(): void {

  }

}

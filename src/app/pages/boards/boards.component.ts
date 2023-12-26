import { Component, OnInit } from '@angular/core';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  items =[
    {
      label: 'item 1',
      items:[
        {
          label:'sub Item 1.1'
        },
        {
          label:'sub Item 1.2'
        },
      ]
    },
    {
      label: 'item 2',
      items:[
        {
          label:'sub Item 2.1'
        },
      ]
    },
    {
      label: 'item 3',
      items:[
        {
          label:'sub Item 3.1'
        },
        {
          label:'sub Item 3.2'
        },
        {
          label:'sub Item 3.3'
        },
      ]
    }
  ];


  constructor() {}

  ngOnInit(): void {}
}

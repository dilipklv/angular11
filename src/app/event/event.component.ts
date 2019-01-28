import { Component, OnInit } from '@angular/core';
import {Event} from './event';
import { MockEvents } from './mock-events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events = MockEvents;

  constructor() { }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  days: Number = 0;
  hours: Number = 0;
  minutes: Number = 0;
  seconds: Number = 0;
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    let widget = this;
    let countDownDate = new Date("Mar 8, 2020 08:30:00").getTime();
    var x = setInterval(function () {
      var distance = countDownDate - new Date().getTime();
      widget.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      widget.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      widget.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      widget.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-clock',
  template: `
    <p>
      my-clock works!
    </p>
  `,
  styles: [
  ]
})
export class MyClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

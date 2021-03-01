import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() message = 'message.error.genericError';
  @Input() noMarginTop = false;
  @Input() position: string;
  @Input() top = '55px';
  
  constructor() { }

  ngOnInit(): void {
  }

}

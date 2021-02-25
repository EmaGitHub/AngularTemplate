import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-found',
  templateUrl: './no-data-found.component.html',
  styleUrls: ['./no-data-found.component.scss']
})
export class NoDataFoundComponent implements OnInit {

  @Input() message = 'message.warn.noDataFound';
  @Input() noMarginTop = false;
  @Input() position: string;
  @Input() top = '55px';

  constructor() { }

  ngOnInit(): void {
  }

}

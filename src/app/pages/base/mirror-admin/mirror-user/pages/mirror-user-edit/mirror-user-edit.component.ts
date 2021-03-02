import { Component, OnInit } from '@angular/core';
import { MirrorUser } from '../../models/MirrorUser';

@Component({
  selector: 'app-mirror-user-edit',
  templateUrl: './mirror-user-edit.component.html',
  styleUrls: ['./mirror-user-edit.component.scss']
})
export class MirrorUserEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  public editUser(user: MirrorUser) {
    console.log("editing user ", user);
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MirrorUserService } from '../../services/mirror-user.service';
import { MirrorUser } from '../../models/MirrorUser';

@Component({
  selector: 'app-mirror-user-list',
  templateUrl: './mirror-user-list.component.html',
  styleUrls: ['./mirror-user-list.component.scss']
})
export class MirrorUserListComponent implements OnInit {

  isLoading: boolean = false;

  formTitle: string = "Ricerca utente esterno";
  buttonLabel: string = "Cerca";

  extUsersList: MirrorUser[];
  private extUsersSubscription: Subscription;

  companies: string[] = ["Europol S.r.l.", "Confidence", "Pegasus", "A Zeta S.r.l."];

  constructor(private mirrorUserService: MirrorUserService) { }

  ngOnInit(): void {
  }

  submit() {

  }
}

import { Company } from './../../models/Company';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MirrorUser } from '../../models/MirrorUser';

@Component({
  selector: 'app-mirror-user-form',
  templateUrl: './mirror-user-form.component.html',
  styleUrls: ['./mirror-user-form.component.scss']
})
export class MirrorUserFormComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() error: boolean = false;

  @Input() action: string;
  formTitle: string;
  buttonLabel: string;

  @Input() name: string = "";
  @Input() lastName: string = "";
  @Input() userId: string = "";
  @Input() email: string = "";
  @Input() companies: Company[];
  selectedCompany: Company;

  @Output() executeAction: EventEmitter<MirrorUser> = new EventEmitter<MirrorUser>();

  constructor() { }

  ngOnInit(): void {
    if (this.action == "create") {
      this.formTitle = "Creazione utente società esterna soc. investitrice";
      this.buttonLabel = "Crea utente";
    }
    else {
      this.formTitle = "Modifica utente società esterna soc. investitrice";
      this.buttonLabel = "Modifica utente";
    }
  }

  public submit() {
    let user: MirrorUser = new MirrorUser();
    user.name = this.name;
    user.lastName = this.lastName;
    user.id = this.userId;
    user.email = this.email;
    if (this.selectedCompany)
      user.companyCode = this.selectedCompany.companyCode;
    this.executeAction.emit(user);
  }

}

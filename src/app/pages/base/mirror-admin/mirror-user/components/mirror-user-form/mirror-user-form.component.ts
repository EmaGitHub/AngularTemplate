import { Company } from './../../models/Company';
import { merge, of, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { startWith, switchMap, catchError } from 'rxjs/operators';
import { RestResponse } from 'src/app/shared/domain/http/rest-response';
import { MirrorUserService } from '../../services/mirror-user.service';
import { UtilService } from 'src/app/core/services/utils/util.service';

@Component({
  selector: 'app-mirror-user-form',
  templateUrl: './mirror-user-form.component.html',
  styleUrls: ['./mirror-user-form.component.scss']
})
export class MirrorUserFormComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() error: boolean = false;

  @Input() action: String;
  formTitle: String;
  buttonLabel: String;

  @Input() name: String = "-";
  @Input() lastName: String = "-";
  @Input() userId: String = "-";
  @Input() email: String = "-";
  @Input() companies: Company[];

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

}

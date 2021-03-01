import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mirror-user-form',
  templateUrl: './mirror-user-form.component.html',
  styleUrls: ['./mirror-user-form.component.scss']
})
export class MirrorUserFormComponent implements OnInit {

  @Input() action: string;
  formTitle: string;
  buttonLabel: string;

  companies: string[] = ["Europol S.r.l.", "Confidence", "Pegasus", "A Zeta S.r.l."];

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

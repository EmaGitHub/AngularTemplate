import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: string;
  lastName: string;
  email: string;
  username: string; 
  password: string;
  systemAdmin: boolean = false;

  @Output('selectedTabIndex') 
  selectedTabIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  register() {
    /* this.spinnerService.start(""); 
    this.authService.login(this.username, this.password).subscribe(
      (resp: any) => {
        this.spinnerService.stop();
        console.log("Success "+JSON.stringify(resp));
        this.router.navigate(['../home']);
      },
      (err: any) => {
        this.spinnerService.stop();
        console.log("Error "+JSON.stringify(err));
        setTimeout(() => {
          this.dialogService.showTimedAlert("Wrong credentials", 1500);
        }, 0);
      }
    ) */
  }

  goLogin() {
    this.selectedTabIndex.emit(0);
  }


}

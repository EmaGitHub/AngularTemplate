import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string; 

  @Output('selectedTabIndex') 
  selectedTabIndex: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  login() {
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

  goRegister() {
    this.selectedTabIndex.emit(1);
  }

}

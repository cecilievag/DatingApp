import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegister(isCancel: boolean) {
    if (isCancel) {
      this.registerMode = false;
    }
  }
}

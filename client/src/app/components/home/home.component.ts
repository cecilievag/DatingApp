import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() {}

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegister(isCancel: boolean) {
    if (isCancel) {
      this.registerMode = false;
    }
  }
}

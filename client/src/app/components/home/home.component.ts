import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed')
    });
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

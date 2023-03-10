import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  model: any = {};
  currentUser$: Observable<User | null> = of(null);

  constructor(private accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }
  
  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigate(['members']),
      error: error => this.toastr.error(error.error)
    });
  }
  
  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }
}

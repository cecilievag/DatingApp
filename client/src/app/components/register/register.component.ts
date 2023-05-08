import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @Output()
  cancelRegister = new EventEmitter<boolean>();

  model: any = {};

  constructor(private accounService: AccountService, private toastr: ToastrService) {}

  register() {
    this.accounService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    });
  }

  cancel() {
    this.cancelRegister.emit(true);
  }
}

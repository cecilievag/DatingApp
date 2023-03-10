import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  @Output()
  cancelRegister = new EventEmitter<boolean>();

  model: any = {};

  constructor(private accounService: AccountService) {}

  ngOnInit() {

  }

  register() {
    this.accounService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel() {
    this.cancelRegister.emit(true);
  }
}

import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Member, User } from 'src/app/models';
import { AccountService } from 'src/app/services';
import { MembersService } from 'src/app/services/members/members.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') 
  editForm: NgForm | undefined;
  
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }

  member: Member | undefined;
  user: User | null = null;

  constructor(
    private accountService: AccountService,
    private membersService: MembersService,
    private toastrService: ToastrService
    ) {
    }
    
    ngOnInit(): void {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => {

        this.user = user;
      }
    })
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;
    this.membersService.getMember(this.user.username).subscribe({
      next: member => {
        this.member = member;
      }
    });
  }

  updateMember() {
    this.membersService.updateMember(this.editForm?.value).subscribe({
      next: () => {
        this.toastrService.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      }
    });
  }
}

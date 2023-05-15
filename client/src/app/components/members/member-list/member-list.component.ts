import { Component, OnInit } from '@angular/core';
import { Member, Pagination, User, UserParams } from 'src/app/models';
import { MembersService } from 'src/app/services';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  // members$: Observable<Member[]> | undefined;
  members: Member[] = [];
  pagination: Pagination | undefined;
  userParams: UserParams | undefined;
  genderList = [
    {
      value: 'male',
      display: 'Males'
    },
    {
      value: 'female',
      display: 'Females'
    }
  ];

  constructor(private membersService: MembersService) {
    this.userParams = this.membersService.getUserParams();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  pageChanged(e: any) {
    if (this.userParams && this.userParams?.pageNumber !== e.page) {
      this.userParams.pageNumber = e.page;
      this.membersService.setUserParams(this.userParams);
      this.loadMembers();
    }
  }

  resetFilters() {
    this.userParams = this.membersService.resetUserParams();
    this.loadMembers();
  }

  loadMembers() {
    if (this.userParams) {
      this.membersService.setUserParams(this.userParams);
      this.membersService.getMembers(this.userParams).subscribe({
        next: response => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        }
      });
    }
  }
}

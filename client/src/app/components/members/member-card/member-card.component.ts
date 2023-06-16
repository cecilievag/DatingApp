import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/models';
import { MembersService, PresenceService } from 'src/app/services';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MemberCardComponent {
  @Input()
  member: Member = {} as Member;

  constructor(
    private memberService: MembersService,
    private toastr: ToastrService,
    public presenceService: PresenceService
  ) {}

  addLike(member: Member) {
    this.memberService.addLike(member.userName).subscribe({
      next: () => this.toastr.success('You have liked ' + member.knownAs),
    });
  }
}

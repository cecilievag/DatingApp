import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Member } from 'src/app/models';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MemberCardComponent {
  @Input()
  member: Member = {} as Member;

}

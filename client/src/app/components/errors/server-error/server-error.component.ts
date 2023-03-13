import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }
  
  ngOnInit(): void {
    
    // console.log(navigation?.extras);
    
    console.log(this.error.details, 'errr');
    this.cdr.detectChanges();
    
  }
}

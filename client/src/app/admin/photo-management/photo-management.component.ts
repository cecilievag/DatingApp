import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Photo } from 'src/app/models';
import { AdminService } from 'src/app/services';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photosForApproval?: Photo[];
  constructor(private adminService: AdminService, private toastr: ToastrService) {}

  ngOnInit(): void {
      this.adminService.getPhotosForApproval().subscribe({
        next: response => {
          this.photosForApproval = response;
        }
      });
  }

  rejectPhoto(photoId: number) {
    this.adminService.rejectPhoto(photoId).subscribe({
      next: () => {
        this.toastr.info('Photo was successfully rejected');
        this.photosForApproval = this.photosForApproval?.filter(p => p.id !== photoId);
        
      }
    });
  }

  approvePhoto(photoId: number) {
    this.adminService.approvePhoto(photoId).subscribe({
      next: () => {
        this.toastr.success('Photo was successfully approved');
        this.photosForApproval = this.photosForApproval?.filter(p => p.id !== photoId);
      }
    });
  }
}

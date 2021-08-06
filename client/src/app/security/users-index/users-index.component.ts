import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../security.models';
import { SecurityService } from '../security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css'],
})
export class UsersIndexComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  users!: UserDTO[];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords = '';
  columnsToDisplay = ['email', 'actions'];

  ngOnInit(): void {
    this.securityService
      .getUsers(this.page, this.pageSize)
      .subscribe((httpResponse: HttpResponse<UserDTO[]>) => {
        this.users = httpResponse.body!;
        this.totalAmountOfRecords = httpResponse.headers.get(
          'totalAmountOfRecords'
        )!;
      });
  }

  makeAdmin(userId: string) {
    this.securityService.makeAdmin(userId).subscribe(() => {
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }

  removeAdmin(userId: string) {
    this.securityService.removeAdmin(userId).subscribe(() => {
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
}

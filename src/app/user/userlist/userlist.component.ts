import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  pageTitle: string = 'User List';
  public users: User[];

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data =>this.users=data );
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    //this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['AddUserComponent']);
  };


}



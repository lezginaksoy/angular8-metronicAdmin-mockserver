import { Component } from '@angular/core';
import { DataService } from './data.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, DataService]
})
  
export class AppComponent {
  title = 'CodeFin';

  constructor(private _dataService: DataService){}

  

}

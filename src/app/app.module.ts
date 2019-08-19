import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { Pipe, PipeTransform } from '@angular/core';
import { Directive } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './user/useradd/add-user.component';
import { EditUserComponent } from './user/useredit/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    DashboardComponent,   
    UserlistComponent,    
    AddUserComponent,
    EditUserComponent,  
  ],
  providers:[
    DataService,
    UserService,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
    RouterModule.forRoot([
      { path: "Dashboard", component: DashboardComponent },
      { path: "", component: DashboardComponent },
      { path: "UserlistComponent", component: UserlistComponent},      
      { path: "UseraddComponent", component: AddUserComponent},   
     
    ]),
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

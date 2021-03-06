import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from "./auth-service";

const appRoutes: Route[] =[
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers', /*canActivate: [AuthGuard]*/ canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent},
      { path: ':id', component: ServerComponent}
  ]},
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ServersService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

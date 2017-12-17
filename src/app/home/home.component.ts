import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = 'logged out';

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number){
    // some calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
    this.status = 'logged in';
  }

    onLogout() {
        this.authService.logout();
        this.status = 'logged out';
    }

}

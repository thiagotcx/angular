import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-v1',
  templateUrl: './admin-v1.component.html',
  styleUrls: ['./admin-v1.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule, 
    NgIf, 
    MatToolbarModule, 
    MatButtonModule, 
    SharedModule,
    RouterModule,
    MatIconModule
  ],
})
export class AdminV1Component {

  public isAuth: boolean = false

  constructor(private authService: AuthService) {
    this.authService
      .getIsAuth()
      .events
      .subscribe((isAuth) => this.isAuth = isAuth)
  }
  

}

import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from '../../shared.module';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-v1',
  templateUrl: './admin-v1.component.html',
  styleUrls: ['./admin-v1.component.scss'],
  imports: [RouterModule, NgIf, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SharedModule],
  standalone: true
})
export class AdminV1Component {
  @ViewChild('drawer') sidenav!: MatDrawer;

  public logout(): void {
    //
  }
}

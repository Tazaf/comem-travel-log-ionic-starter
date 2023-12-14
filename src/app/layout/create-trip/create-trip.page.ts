import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { logOut as logOutIcon } from 'ionicons/icons';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: [ './create-trip.page.scss' ],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule ]
})
export class CreateTripPage implements OnInit {

  readonly logOutIcon = logOutIcon;

  constructor(private readonly router: Router, private readonly authService: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl("/login");
  }

}

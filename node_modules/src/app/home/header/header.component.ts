import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../service/auth-service.service";
import {UserProfile} from "../../service/UserProfile";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private AuthServiceService: AuthServiceService) {
  }
  loggedEmpTitle?: string;
  loggedEmpNumber?: number;
  loggedUserName: any;
  userProfile?: UserProfile | null;

  ngOnInit(
  ) {

    this.AuthServiceService.userProfile.subscribe((data) => {
      this.userProfile = data;
    });

    this.AuthServiceService.getAccountData(this.userProfile?.user_id).subscribe((data) => {
      this.loggedEmpNumber = data['username']
      this.loggedUserName = data['first_name'] + ' ' + data['last_name']




    });
  }

}

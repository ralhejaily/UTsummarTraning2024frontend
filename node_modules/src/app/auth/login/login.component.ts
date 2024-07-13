import {MatCardModule} from '@angular/material/card';

import {Component, OnInit} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {
  faUser,
  faLock
} from '@fortawesome/free-solid-svg-icons';
// import {HttpClient} from '@angular/common/http';
import {LoginModel} from "./login-model";
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {OverlayModule} from "@angular/cdk/overlay";
import {CdkMenuModule} from "@angular/cdk/menu";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
// import {NgClass} from "@angular/common";

import {AuthServiceService} from "../../service/auth-service.service";
import {ShareddataService} from "../../service/shareddata.service";
import {UserProfile} from "../../service/UserProfile";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    NgxMatSelectSearchModule,
    MatBadgeModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSelectModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatRadioModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatCheckboxModule,
    // MatListModule,
    // ScrollingModule,
    // OverlayModule,
    // CdkMenuModule,
    // NgClass







  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  faUser = faUser
  faLock = faLock

  loginForm!: UntypedFormGroup;
  userProfile?: UserProfile | null;
  private role: any;


  constructor(
    private formBuilder: UntypedFormBuilder,
    private AuthServiceService: AuthServiceService,
    // private authService: AuthService,
    // private http: HttpClient,
    private router: Router
  ) {
  }




  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );


  }



  onSubmit(){
    this.AuthServiceService.userLogin(this.loginForm.value).subscribe( (data) => {
      console.log("this.loginForm.get('username')",this.loginForm.get('username')?.value);
      if (data){
        // this.AuthServiceService.getAccountData(this.loginForm.get('username')?.value).subscribe({
        //   next: (res) => {
        //     console.log("resres",res);
        //
        //   }})
        this.AuthServiceService.userProfile.subscribe((data) => {
          this.userProfile = data;
        });

        this.AuthServiceService.getAccountData(this.userProfile?.user_id).subscribe((data) => {
          this.role = data['group']
          console.log(this.role[0].id)
          if (this.role[0].id==1){
            this.router.navigate(['./stu'])


          }else {
            this.router.navigate(['./emp'])

          }


        });
      } else
        alert('اسم المستخدم او كلمة المرور خاطئة !!!')
    })
  }

    // this.authService.userLogin(this.loginForm.value).subscribe((data) => {
    //   if (data){
    //     this.router.navigate(['./utletters'])
    //   } else
    //     alert('اسم المستخدم او كلمة المرور خاطئة !!!')
    // })
}



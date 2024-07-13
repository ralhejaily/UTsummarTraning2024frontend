import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {StuBodyComponent} from "./stu-body/stu-body.component";
import {EmpBodyComponent} from "./emp-body/emp-body.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
  StuBodyComponent,
  EmpBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

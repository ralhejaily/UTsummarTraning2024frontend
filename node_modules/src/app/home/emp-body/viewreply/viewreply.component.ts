import { Component, OnInit, Inject } from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { faEdit, faSave, faClose ,faEye   } from '@fortawesome/free-solid-svg-icons';
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {OverlayModule} from "@angular/cdk/overlay";
import {CdkMenuModule} from "@angular/cdk/menu";
import {ShareddataService} from "../../../service/shareddata.service";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewreply',
  standalone: true,
  imports: [
    MatCardModule,
    FontAwesomeModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,

    MatPaginator,
    MatSort,
    MatTable,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatListModule,
    ScrollingModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule,

  ],
  templateUrl: './viewreply.component.html',
  styleUrl: './viewreply.component.css'
})
export class ViewreplyComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private matDialogRef: MatDialogRef<ViewreplyComponent>,
    private ShareddataService: ShareddataService,
  ) {
  }

  reply!: string;
  faSave = faSave
  faEdit = faEdit
  faClose = faClose
  faEye = faEye
  addEditForm !: UntypedFormGroup
  dialogTitle: string = 'إضافة'
  actionButton: string = 'حفظ'
  actionIcon: any = faSave

  ngOnInit() {
    console.log("in create" ,this.editData)

    this.ShareddataService.empreplayList2(this.editData).subscribe({
      next: (res) => {
        console.log("res.reply.value",res.reply);
        this.reply =res.reply


      },
      error: (res) => {
        alert(res.toString());
      }
    })

  }
}

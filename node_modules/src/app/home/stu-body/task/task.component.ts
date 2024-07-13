import { Component, OnInit, Inject } from '@angular/core';
import {UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { faEdit, faSave, faClose ,faEye ,faReply  } from '@fortawesome/free-solid-svg-icons';
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
import { FormGroup, FormControl } from '@angular/forms';
import {ShareddataService} from "../../../service/shareddata.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
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
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private matDialogRef: MatDialogRef<TaskComponent>,
    private ShareddataService:ShareddataService,
  ) {
  }
  faSave = faSave
  faEdit = faEdit
  faClose = faClose
  faEye=faEye
  addEditForm !: UntypedFormGroup
  dialogTitle: string = 'إضافة'
  actionButton: string = 'حفظ'
  actionIcon: any = faSave
  faReply=faReply

  ngOnInit() {


    this.addEditForm = this.formBuilder.group({
      taskDesc: ['', Validators.required],
      taskType: ['', Validators.required],
      TaskStatus: [1],
    })

    if (this.editData){
      this.dialogTitle = 'تعديل';
      this.actionButton = 'تعديـل';
      this.actionIcon = faEdit;
      this.addEditForm.controls['taskDesc'].setValue(this.editData.taskDesc);
      this.addEditForm.controls['taskType'].setValue(this.editData.taskDesc);
      this.addEditForm.controls['TaskStatus'].setValue(1);

      }
    }
  creatPutAction(){
    if (!this.editData) {
      this.creatAction();
    } else {
      this.putAction();
    }
  }

  creatAction(){
    if (this.addEditForm.valid) {
      console.log("this.addEditForm.value",this.addEditForm.value)

      this.ShareddataService.stuTaskAdd(this.addEditForm.value).subscribe({
        next: (res) => {
          this.addEditForm.reset();
          this.matDialogRef.close('save');
        },
        error: (res) => {
          alert(res.toString());
        }
      })
    }
  }


  putAction(){
    if(this.addEditForm.valid){
      this.ShareddataService.stuTaskUpdate(this.editData.id, this.addEditForm.value).subscribe({
        next:(res) => {
          this.addEditForm.reset();
          this.matDialogRef.close('update');
          // alert(res.toString());
        },
        error:(res) => {
          alert(res.toString());
        }
      });
    } else {
      alert('يرجى ادخال الحقول الاجبارية')
    }
  }
  }


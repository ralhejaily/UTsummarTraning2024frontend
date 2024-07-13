// import {Component, OnInit, ViewChild} from '@angular/core';
// import {FaIconComponent} from "@fortawesome/angular-fontawesome";
// import {MatButton, MatIconButton} from "@angular/material/button";
// import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
// import {MatFormField, MatLabel} from "@angular/material/form-field";
// import {MatInput} from "@angular/material/input";
// import {MatOption} from "@angular/material/core";
// import {MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
// import {DatePipe, NgIf} from "@angular/common";
// import {Dir} from "@angular/cdk/bidi";
// import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
// import {
//   MatCell,
//   MatCellDef,
//   MatColumnDef,
//   MatHeaderCell,
//   MatHeaderRow,
//   MatHeaderRowDef,
//   MatRow, MatRowDef, MatTable, MatTableDataSource
// } from "@angular/material/table";
// import {MatPaginator} from "@angular/material/paginator";
// import {MatSort, MatSortHeader} from "@angular/material/sort";
// import {faEdit, faTrash, faDatabase, faSave, faAdd, faEye} from '@fortawesome/free-solid-svg-icons';
// import { HttpClient } from '@angular/common/http';
// import {ShareddataService} from "../../service/shareddata.service";

import {Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {faEdit, faTrash, faDatabase, faSave, faAdd, faEye ,faReply} from '@fortawesome/free-solid-svg-icons';
import {MatCardModule} from "@angular/material/card";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
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
import {ShareddataService} from "../../service/shareddata.service";
import { HttpClient } from '@angular/common/http';
import {DatePipe, NgIf} from "@angular/common";
import {RepyComponent} from "./repy/repy.component";
import {ViewreplyComponent} from "./viewreply/viewreply.component";
import {HeaderComponent} from "../header/header.component";
import {StuBodyComponent} from "../stu-body/stu-body.component";
@Component({
  selector: 'app-emp-body',
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
    DatePipe,
    NgIf,
    RepyComponent,
    HeaderComponent,
    StuBodyComponent,
  ],
  templateUrl: './emp-body.component.html',
  styleUrl: './emp-body.component.css'
})
export class EmpBodyComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faDatabase = faDatabase;
  faSave = faSave
  faAdd = faAdd
  faEye=faEye
  faReply=faReply
  constructor(
    private dialog: MatDialog,
    private ShareddataService:ShareddataService ,
    private HttpClient:HttpClient,
  ) {
  }
  displayedColumns: string[] = ['id', 'taskDesc','taskType', 'taskTime','TaskStatus','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.refreshList();

  }
  refreshList(): void {
    this.ShareddataService.stuTaskList().subscribe({
      next: (res) => {
        // this.dataSource = new MatTableDataSource(res['results']);
        this.dataSource = new MatTableDataSource(res);
        // Get the value of a specific column
        this.dataSource.data.forEach((row) => {
          const columnValue = row['TaskStatus'];
          // console.log("columnValue",columnValue);

          this.ShareddataService.TaskStatusList2(columnValue).subscribe({
            next: (res) => {
              // console.log("resres",res.TaskStatusDesc);
              row['TaskStatus']=res.TaskStatusDesc

            }})
        });

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })

  }



  openDialog(row: any) {
    const dialogRef = this.dialog.open(RepyComponent,
      {width: '30%',
        data: row // Pass the row data to the dialog
      }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.refreshList();
      }
    });



  }

  viewAction(row: any) {
    const dialogRef = this.dialog.open(ViewreplyComponent,
      {width: '30%',
        data: row // Pass the row data to the dialog
      })

  }

  replyAction(row: any) {

  }
}

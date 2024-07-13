import {Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {faEdit, faTrash, faDatabase, faSave, faAdd, faEye} from '@fortawesome/free-solid-svg-icons';
import {TaskComponent} from "./task/task.component";
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
import {HeaderComponent} from "../header/header.component";
import {ViewreplyComponent} from "../emp-body/viewreply/viewreply.component";
import {ViewComponent} from "./view/view.component";

@Component({
  selector: 'app-stu-body',
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
    HeaderComponent,
  ],
  templateUrl: './stu-body.component.html',
  styleUrl: './stu-body.component.css'
})
export class StuBodyComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faDatabase = faDatabase;
  faSave = faSave
  faAdd = faAdd
  faEye = faEye;

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
  ngOnInit() {
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
          console.log("columnValue",columnValue);

          this.ShareddataService.TaskStatusList2(columnValue).subscribe({
            next: (res) => {
              console.log("resres",res.TaskStatusDesc);
              row['TaskStatus']=res.TaskStatusDesc

            }})
        });

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })

  }
  openDialog() {
    const dialogRef = this.dialog.open(TaskComponent,
      {width: '30%'}).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.dataSource = new MatTableDataSource(val);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.refreshList();
      }
    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  editAction(row: any) {
    this.dialog.open(TaskComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.refreshList();
      }
    })
  }

  deleteAction(id: number) {
    if (confirm('هل انت متأكد من حذف السجل ؟')) {
      this.ShareddataService.stuTaskDelete(id).subscribe({
        next: () => {
          this.refreshList();
        },
        error: (res) => {
          alert(res.toString());
        }
      })
    }
  }

  viewAction(row: any) {
    const dialogRef = this.dialog.open(ViewComponent,
      {width: '30%',
        data: row // Pass the row data to the dialog
      })
  }


}

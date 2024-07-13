import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {
  readonly APIUrl = "http://127.0.0.1:8000";
  // http://127.0.0.1:8000/stu/TaskStatus/1/

  constructor(
    private http: HttpClient,
  ) { }
  stuTaskList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/stu/stuTask/')
  }
  stuTaskList2(val:any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/stu/stuTask/'+val)
  }
  stuTaskAdd(val: any) {
    return this.http.post(this.APIUrl + '/stu/stuTask/', val)
  }

  stuTaskUpdate(id: number, val: any) {
    return this.http.patch(this.APIUrl + '/stu/stuTask/' + id+'/', val)
  }

  stuTaskDelete(id: any) {
    return this.http.delete(this.APIUrl + '/stu/stuTask/' + id)
  }
  TaskStatusList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/stu/TaskStatus/')
  }
  TaskStatusList2(val: any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/stu/TaskStatus/'+val)
  }

  TaskStatusAdd(val: any) {
    return this.http.post(this.APIUrl + '/stu/TaskStatus/', val)
  }

  TaskStatusUpdate(id: number, val: any) {
    return this.http.patch(this.APIUrl + '/stu/TaskStatus/' + id, val)
  }

  TaskStatusDelete(id: any) {
    return this.http.delete(this.APIUrl + '/stu/TaskStatus/' + id)
  }

  empreplayList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/emp/EmployeeReply/')
  }
  empreplayList2(val: any): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/emp/EmployeeReply/'+val)
  }

  empreplayAdd(val: any) {
    return this.http.post('http://127.0.0.1:8000/emp/EmployeeReply/', val)
  }

  empreplayUpdate(id: number, val: any) {
    return this.http.patch(this.APIUrl + '/emp/EmployeeReply/' + id, val)
  }

  empreplayDelete(id: any) {
    return this.http.delete(this.APIUrl + '/emp/EmployeeReply/' + id)
  }


}

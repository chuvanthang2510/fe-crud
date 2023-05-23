import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Student from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL ="http://localhost:8080/student";

  constructor(private http: HttpClient) { }
  getStudentsList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
  createStudent(student: Student): Observable<any>{
    return this.http.post(`${this.baseURL}`, student);
  }
  getStudentById(id: number): Observable<Student>{
    return this.http.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

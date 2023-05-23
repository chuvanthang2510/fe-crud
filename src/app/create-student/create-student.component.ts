import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import Student from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student:Student= {
    id: 0,
    name: '',
    age: 0,
    sdt: '',
    date: new Date(),
    email: '',
    address: '',
    student_id: '',
    major: '',
    sex:'',
    user_id:''
  };
  submitted = false;
  loader: any;
  constructor(private studentService: StudentService,
    private router: Router){}

    ngOnInit(): void {

    }


    saveStudent(){
      this.studentService.createStudent(this.student).subscribe(data => {
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
    }


    onSubmit(){
      this.submitted = true;
      this.saveStudent();
    }
    goToStudentList(){
      this.router.navigate(['/students']);
    }


}

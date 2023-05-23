export default class Student {
  id:number;
  name : string;
  age : number ;
  date:Date;
  sex:string;
  address:string;
  student_id:string;
  sdt:string;
  email:string;
  user_id : string ;
  major:string;
  constructor(id:number,name:string,age:number,address:string,
    sdt:string,date:Date,email:string,user_id:string,sutdent_id:string,major:string,sex:string){
    this.id= id;
    this.name = name;
    this.age = age;
    this.sdt = sdt;
    this.date = date;
    this.email = email;
    this.student_id = sutdent_id;
    this.major = major;
    this.sex = sex;
    this.address = address;
    this.user_id= user_id ;
  }
}

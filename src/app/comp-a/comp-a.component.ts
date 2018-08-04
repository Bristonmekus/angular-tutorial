import { Component, OnInit } from '@angular/core';
interface student {
  fname:string,
  lname:string,
  level:number,
  matriNum:number,
  grades:any
}

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
  fullname:string = " Sayil";
  status:boolean = false
  age:number = 4;
  classA:any = 67;
  newStudents:any = [
    {name:"Mark",
    details:"Mark is mark but not mark",
    class:"Year 4",
    position: 10,
    image: 'assets/img/john-obidi.jpg'
  },
  {name:"Mary",
    details:"MAry is the girl not the boy",
    class:"Year 2",
    position: 20,
    image: 'assets/img/Dr-abah.jpg'  
  },
  {name:"Peter",
    details:"Peter the pan. Continue panning",
    class:"",
    position: 30,
    image: 'assets/img/emeka.jpg'  
  },
  {name:"Daniel",
    details:"Daniel the programmer without a system",
    class:"Level 1",
    position: 40,
    image: 'assets/img/corerage.png'  
  }
  ]

  constructor() { }

  ngOnInit() {
    this.callName("Mr");
  }

  callName(x){
    this.fullname = x + this.fullname;
    this.age = this.age * this.classA;
  }

  changePosition(y,x){
  const limiter:number = 5;
  this.newStudents[y].position = x - limiter;

    console.log(this.newStudents[y].position)
    // this.newStudents.position = x -this.newStudents.position;
  }

}

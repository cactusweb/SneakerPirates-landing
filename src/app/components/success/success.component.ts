import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  successNum: number = 70000;

  constructor() { }

  ngOnInit(): void {
    this.changeSuccessNum()
  }


  changeSuccessNum(){
    let interval = setInterval(() => {
      let randomNum = Math.ceil(Math.random()*1000)
      if ( this.successNum + randomNum > 100000 ){
        this.successNum = 100000
        clearInterval(interval)
      }else
        this.successNum = this.successNum+randomNum
    }, 50)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuShow: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.menuShow = this.activatedRoute.snapshot.data['navMenu']
  }

  ngOnInit(): void {
  }


  
  scrollTo( blockId: string, e: MouseEvent ){
    e.preventDefault();
    document.querySelector(`#${blockId}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

}

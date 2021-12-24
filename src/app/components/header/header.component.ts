import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mousemove', ['$event'])
  parallax( e: MouseEvent ){
    let ells: NodeListOf<HTMLElement> = document.querySelectorAll( '.parallax-block > *' );
    ells.forEach( ell => {
      if ( window.innerWidth < 780 ) return; 
      
      const speed = ell.getAttribute('data-speed');
      
      if (!speed) return;

      let x =  -e.pageX*Number(speed)/100;
      let y = -e.pageY*Number(speed)/100;
      ell['style'].transform = `translate( ${x}px, ${y}px ) ${ell.getAttribute('transform') || ''}`
    })
    
  }

}

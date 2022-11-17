import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Piada do Dia';

  constructor() { } // corre sempre que o nosso componente é inicializado

  ngOnInit(): void { // life cycle method
  }
  toggleLaugh(){
    console.log('emissão de risos')
  }

}

import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-piada',
  templateUrl: './piada.component.html',
  styleUrls: ['./piada.component.css']
})
export class PiadaComponent implements OnInit {

  @Input() piada = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Contato } from './../models/contato.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  @Input() contatos: Contato[];
  @Output() editContato = new EventEmitter();
  @Output() deletContato = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  edit(contato: Contato) {
    this.editContato.emit(contato);
  }
  delete(contato: Contato) {
    this.deletContato.emit(contato);
  }

}

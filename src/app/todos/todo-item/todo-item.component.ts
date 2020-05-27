import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico', {static: false}) txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtEdit: FormControl;

  editando: boolean = false;

  constructor() { }

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }

}

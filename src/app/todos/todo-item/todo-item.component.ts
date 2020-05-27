import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.model';

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

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);

    this.chkCompletado.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  editar() {
    this.editando = true;
    this.txtEdit.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtEdit.invalid) {return;}
    if (this.txtEdit.value === this.todo.text) {return;}

    this.store.dispatch(actions.editar({id: this.todo.id, texto: this.txtEdit.value}));
  }

  borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

}

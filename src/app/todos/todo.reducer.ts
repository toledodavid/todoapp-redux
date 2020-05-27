import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar el traje de Ironman'),
  new Todo('Robar el escudo del Capitan America')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),

  on(editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: texto
        }
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}

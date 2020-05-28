import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

 export const establecerFiltro = createAction(
   '[Filtro] Establecer Filtro',
   props<{filtro: filtrosValidos}>()
);

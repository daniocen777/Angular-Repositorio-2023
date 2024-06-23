import { createAction, props } from '@ngrx/store';
import { ILogin } from 'src/app/core/models/auth.model';

// Accion con info
export const loginAction = createAction(
    '[AUTH] LoginAction',
    props<{ data: ILogin }>()
);

// EL effect cambiara el estado para enviarlo al reducer
export const loginSuccessAction = createAction(
    '[AUTH] LoginSuccessAction'
);

export const loginErrorAction = createAction(
    '[AUTH] LoginErrorAction',
    props<{ message: string }>()
);
import { createReducer, on, Action } from "@ngrx/store";
import * as authActions from './auth.actions';
import { AuthState } from './auth.state';

// ** Reducer => Primer archivo que lee la app
// Estado inicial
export const initialAuthState: AuthState = {
    loginDataState: null,
    loadingState: false,
    errorState: null
};

// Creando el reducer que escucha las acciones y modifica el estado
export const authReducerInternal = createReducer(
    initialAuthState,
    on(authActions.loginAction, (state, { data }) => {
        return {
            ...state, // estado anterior
            loginDataState: data,
            loadingState: true,
            errorState: null
        };
    }),
    // Hay acciones que no necesitan cambiar el estado (solo sirve para los effects)
    on(authActions.loginSuccessAction, (state) => {
        return {
            ...state, // estado anterior
            loadingState: false
        };
    }),
    on(authActions.loginErrorAction, (state, { message }) => {
        return {
            ...state, // estado anterior
            loadingState: false,
            errorState: message
        };
    }),
);

export function authReducer(state: AuthState | undefined, action: Action) {
    return authReducerInternal(state, action);
}

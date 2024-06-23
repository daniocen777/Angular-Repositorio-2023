import { authReducer } from "./auth/auth.reducer";
import { AuthState } from "./auth/auth.state";

export interface RootState {
    auth: AuthState
};

export const appReducers = {
    auth: authReducer
};

export const appEffects = [];
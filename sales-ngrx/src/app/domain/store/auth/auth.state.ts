import { ILogin } from "src/app/core/models/auth.model";

export interface AuthState {
    loginDataState: ILogin | null;
    loadingState: boolean;
    errorState: string | null;
}
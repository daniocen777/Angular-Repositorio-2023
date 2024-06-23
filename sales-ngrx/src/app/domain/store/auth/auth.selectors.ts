// Los selectores son funciones puras que se utilizan para obtener segmentos del estado
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const getAuthFeatureState = createFeatureSelector('auth');

export interface AppState {
    feature: AuthState
}

// Saber si esta cargando
export const selectAuthFeatureState = (state: AppState) => state.feature;

export const selectIsLoadingLogin = createSelector(
    selectAuthFeatureState,
    (state: AuthState) => state.errorState);

export const selectIsErrorLogin = createSelector(
    selectAuthFeatureState,
    (state: AuthState) => state.errorState);
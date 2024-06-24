import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { MatIconRegistry } from '@angular/material/icon';

@NgModule({})
export class IconModule {
    // domSanitizer => ruta
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry) {
        this._matIconRegistry.addSvgIcon(
            'world',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/world.svg'));

        this._matIconRegistry.addSvgIcon(
            'menu',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));

        this._matIconRegistry.addSvgIcon(
            'sign-out',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sign-out.svg'));

        this._matIconRegistry.addSvgIcon(
            'signout',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/signout.svg'));

        this._matIconRegistry.addSvgIcon(
            'add',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));

        this._matIconRegistry.addSvgIcon(
            'update',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/update.svg'));

        this._matIconRegistry.addSvgIcon(
            'delete',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
    }
}
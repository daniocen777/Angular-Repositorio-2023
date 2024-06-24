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
    }
}
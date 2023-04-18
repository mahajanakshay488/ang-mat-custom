import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule} from'@angular/material/input'


const material = [
        MatToolbarModule, 
        MatButtonModule, 
        MatIconModule,
        MatSidenavModule,
        LayoutModule,
        MatFormFieldModule,
        MatInputModule
]

@NgModule({
    imports:      [
        CommonModule,
        material,
    ],
    declarations: [ ],
    exports:      [ 
        material
    ]
   })

export class CustomThemeModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSnackBarModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSnackBarModule
];

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule { }

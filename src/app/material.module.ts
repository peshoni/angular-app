import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        MatSidenavModule,
        MatTooltipModule,
        MatListModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule, MatMenuModule,
        MatIconModule
    ],
    exports: [
        MatSidenavModule,
        MatTooltipModule,
        MatListModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule
    ],
})


export class MaterialModule { }
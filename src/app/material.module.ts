import { NgModule } from '@angular/core';

//llamo a este archivo desde app.nodule.ts

import { 
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';

//aqui llamo todos los modulos de material que necesite utilizar
@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ]
})

export class MaterialModule {}
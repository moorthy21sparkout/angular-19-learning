import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./formArray/formarray-example/formarray-example.component').then(m => m.FormarrayExampleComponent)
    }
];

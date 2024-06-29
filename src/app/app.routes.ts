import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'take-first',
        loadComponent: () =>
            import('./component/take-first/take-first.component').then(tf => tf.TakeFirstComponent)
    }
];

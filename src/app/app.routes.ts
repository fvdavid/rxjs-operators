import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'take-first',
        loadComponent: () =>
            import('./component/take-first/take-first.component').then(tf => tf.TakeFirstComponent)
    },
    {
        path: 'find-single',
        loadComponent: () =>
            import('./component/find-single/find-single.component').then(fs => fs.FindSingleComponent)
    }
];

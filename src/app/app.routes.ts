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
    },
    {
        path: 'debounce-distinct',
        loadComponent: () =>
            import('./component/debounce-distinct/debounce-distinct.component').then(dd => dd.DebounceDistinctComponent)
    },
    {
        path: 'buffer',
        loadComponent: () =>
            import('./component/buffer/buffer.component').then(b => b.BufferComponent)
    },
    {
        path: 'share-shareReplay',
        loadComponent: () =>
            import('./component/share-share-replay/share-share-replay.component').then(ss => ss.ShareShareReplayComponent)
    }
];

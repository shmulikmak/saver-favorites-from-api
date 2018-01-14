import { Routes, RouterModule } from '@angular/router';

import { ProviderComponent } from './provider/provider.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotFoundComponent } from './notFound/not-found.component';

const routes: Routes = [
  {
    path: '', component: ProviderComponent,
  },
  {
    path: 'favorites', component: FavoritesComponent,
  },
  {
    path: '**', component: NotFoundComponent,
  }
];

export const AppRoutes = RouterModule.forRoot(routes);

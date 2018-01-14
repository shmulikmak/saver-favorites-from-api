// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
import { AppRoutes } from './app.routing';

// sevices
import { WikipediaService } from './services/wikipedia.service';
import { LocalStorageService } from './services/local-storage.service';

// components
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProviderComponent } from './provider/provider.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    ProviderComponent,
    NotFoundComponent,
    HeaderComponent
],
  imports: [
    BrowserModule,
    AppRoutes,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    WikipediaService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

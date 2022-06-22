import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsComponent } from './details/details.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './service/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    HeaderComponent,
    DetailsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

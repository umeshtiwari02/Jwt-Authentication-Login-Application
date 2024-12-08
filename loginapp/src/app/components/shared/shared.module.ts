import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from '../../services/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    )
  ]
})
export class SharedModule { }

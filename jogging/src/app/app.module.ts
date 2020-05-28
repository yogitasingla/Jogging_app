import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoggingInfoComponent } from './jogging-info/jogging-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import{MatButtonModule,MatAutocompleteModule,MatSelectModule,MatRadioModule,
  MatDatepickerModule,MatNativeDateModule,MatSidenavModule,MatIconModule,MatToolbarModule,
  MatListModule,MatExpansionModule, MatMenuModule,MatDividerModule,MatTableModule,
  MatPaginatorModule,MatSortModule,MatDialogModule,MatSnackBarModule,} from '@angular/material';
  import{ReactiveFormsModule} from '@angular/forms';
import { DailyListComponent } from './daily-list/daily-list.component';
@NgModule({
  declarations: [
    AppComponent,
    JoggingInfoComponent,
    DailyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatDialogModule,
   MatRadioModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatStepperModule,
    MatInputModule ,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

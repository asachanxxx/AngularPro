import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { DialogComponent } from './login-modal/login-modal.component';
import { ModelDisplayComponent } from './model-display/model-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ModelDisplayComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

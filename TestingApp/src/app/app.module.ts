import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalModule } from 'ng2-modal-dialog/modal.module';
import { DialogComponent } from './login-modal/login-modal.component';
import { ModelDisplayComponent } from './model-display/model-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './ModelService/index';
import { ModalService2 } from './ModelService/index';


@NgModule({
  declarations: [
    AppComponent,
    ModelDisplayComponent,
    DialogComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule,
    
  ],
  providers: [ModalService2],
  bootstrap: [AppComponent]
})
export class AppModule { }

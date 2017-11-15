import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-display',
  templateUrl: './model-display.component.html',
  styleUrls: ['./model-display.component.css']
})
export class ModelDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { ModalService } from 'ng2-modal-dialog/modal.module';
// import { LoginModalComponent } from './login-modal/login-modal.component';
// // The AppModule from the application src
// import { AppModule } from './app.module';
// ...
 
// // Instancing a new ModalService in the parent component constructor
// constructor(private modalService: ModalService) { }
 
// // Click function to open the modal
//   openLoginModal(userCreds): void {
//   	// Service callback function to create the modal with an object passed as a parameter
//     this.modalService.create(AppModule, LoginModalComponent, {userCreds});
//   }
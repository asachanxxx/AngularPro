import { Component } from '@angular/core';
import { ModalService } from 'ng2-modal-dialog/modal.module';

// The AppModule from the application src
import { AppModule } from './app.module';


@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialog = false;
  
  constructor(private modalService: ModalService){

  }

  openLoginModal(userCreds): void {
  	// Service callback function to create the modal with an object passed as a parameter
   // this.modalService.create(AppModule, LoginModalComponent, {userCreds});
  }

  title = 'app';
  private jobtitle ="Software Engineer";
  job:object;
  isDisabled = true;

  possition:string;
  Address:string;
  Area:string;

  //Css class names
  specialh3 = "special-h3";
  spcecialcase = "spcecial-case";

  singleLine = "alert alert-danger";
  ischange = false;

  alertstyles ={
    "alert" :true,
    "alert-success" :true
  }  

  getContact(){
    return "+94 778151151";
  }

  onCLickmybtn(){
    alert("You clicked me!");
    this.possition = "Software Programmer";
  }

  onCLickmybtn2(event:any){
    alert("You clicked me!" + event.target.textContent);
    this.Address = "270/A Mullegama ,Homagama";

  }

  buttonCLickColorCHange(val:any){
    
      if(val ===1){
        alert("Incoming");
        this.ischange =true;
      }else{
        this.ischange =false;
      }
  }

  //forms
  model:JobTitle = new JobTitle();
  Submitvalues(){
    console.log(this.model)
  }
  departments = [
    {id:1 , Name:"IT Department"},
    {id:2 , Name:"ACC Department"},
    {id:3 , Name:"HR Department"},
  ]

}


export class JobTitle{
    id:number;
    title:string;
    position:string;
    isfulltime:boolean;
    department:string;
}
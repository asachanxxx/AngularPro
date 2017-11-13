import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}

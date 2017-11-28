import {Routes,Route} from '@angular/router';
import {FormdrivenComponent} from './formdriven/formdriven.component';
import {AppComponent} from './app.component';

const routes:Routes = [
    {path:'',component:AppComponent},
    {path:'forms',component:FormdrivenComponent}
]

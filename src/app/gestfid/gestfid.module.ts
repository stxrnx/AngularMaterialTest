import { ClientiService } from './services/clienti.service';
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestfidAppComponent } from './gestfid-app.component';
import { TollbarComponent } from './components/tollbar/tollbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes=[
  {
    path: '', component: GestfidAppComponent,
    children: [
      { path:'', component:MainContentComponent}
    ]
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  declarations: [
    GestfidAppComponent,
    TollbarComponent,
    MainContentComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    ClientiService
  ]
})
export class GestfidModule { }

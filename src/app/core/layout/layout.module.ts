import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopComponent } from './top/top.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { CustomizerComponent } from './customizer/customizer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopComponent,
    NavComponent,
    ContentComponent,
    CustomizerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }

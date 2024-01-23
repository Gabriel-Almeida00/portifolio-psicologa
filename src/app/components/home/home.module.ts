import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from "./home.component";
import {HeaderComponent} from "../../shared/header/header.component";
import {BtnPrimaryComponent} from "../../shared/btn-primary/btn-primary.component";
import {MainSectionComponent} from "../../shared/main-section/main-section.component";
import {MainAnimationComponent} from "../../shared/main-animation/main-animation.component";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { InputsExampleComponent } from './componentes/inputs-example/inputs-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsExampleComponent
  ],
  imports: [
    BrowserModule,
    LayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

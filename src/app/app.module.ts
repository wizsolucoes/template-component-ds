import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./componentes/layout/layout.component";
import { RadialButtonComponent } from "./componentes/radial-button/radial-button.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutComponent, RadialButtonComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

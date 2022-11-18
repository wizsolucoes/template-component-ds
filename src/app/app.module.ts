import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./componentes/layout/layout.component";
import { UploadComponent } from "./componentes/upload/upload.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutComponent, UploadComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from "@angular/core";
import { BlobUploadCommonResponse } from "@azure/storage-blob";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  active = false;

  toggle() {
    setTimeout(() => {
      this.active = !this.active;
    }, 2000);
  }

  public responseUpload(response: BlobUploadCommonResponse): void {
    console.log(response);
  }
}

import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { BlobUploadCommonResponse } from "@azure/storage-blob";

import { UploadDirective } from "./directives/upload.directive";
import { UploadService } from "./services/upload.service";

@Component({
  selector: "app-upload",
  standalone: true,
  imports: [CommonModule, UploadDirective],
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent {
  @Output()
  public response = new EventEmitter<BlobUploadCommonResponse>();

  public file?: FileList;

  constructor(public readonly uploadService: UploadService) {}

  public onFileDropped(files: FileList): void {
    this.prepareFilesList(files);
  }

  public fileBrowseHandler(event: Event): void {
    const target = <HTMLInputElement>event.target;
    if (target.files) {
      this.prepareFilesList(target.files);
    }
  }

  public prepareFilesList(file: FileList): void {
    this.uploadService.call(file, (response) => {
      this.response.emit(response);
    });
  }
}

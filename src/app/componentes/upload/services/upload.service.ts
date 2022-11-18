import * as md5 from "md5";

import { Injectable } from "@angular/core";
import {
  BlobServiceClient,
  BlobUploadCommonResponse,
  BlockBlobClient,
  ContainerClient,
} from "@azure/storage-blob";

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  private response?: (response: BlobUploadCommonResponse) => void;

  private readonly containerName = "test-component";

  private containerClient?: ContainerClient;
  private blocBlobClient?: BlockBlobClient;
  private blobServiceClient?: BlobServiceClient;

  public call(
    files: FileList,
    response: (response: BlobUploadCommonResponse) => void
  ): void {
    this.response = response;

    Array.from(files).forEach((file: File) => {
      const ext = file.name?.split(".")?.pop()?.toLowerCase();

      if (ext) {
        this.fileEach(file, ext);
      }
    });
  }

  private fileEach(file: File, ext: string): void {
    const nameFile = this.castMD5(file, ext);

    this.blobServiceClient = new BlobServiceClient(
      `${environment.azureBlob.url}${environment.azureBlob.access}`
    );
    this.containerClient = this.blobServiceClient.getContainerClient(
      this.containerName
    );
    this.blocBlobClient = this.containerClient.getBlockBlobClient(nameFile);

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.addEventListener("load", (e) => {
      this.onLoad(e, file);
    });
  }

  private castMD5(file: File, ext: string): string {
    const date = `${file?.name}${Date.now()}`;
    const convert = md5(date);

    return `${convert}.${ext}`;
  }

  private async onLoad(e: ProgressEvent<FileReader>, file: File) {
    if (e.target?.result) {
      const response = await this.blocBlobClient?.uploadData(
        e.target.result as ArrayBuffer,
        {
          blobHTTPHeaders: { blobContentType: file.type },
        }
      );

      if (response) {
        this.response && this.response(response);
      }
    }
  }
}

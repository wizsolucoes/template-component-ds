import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appUpload]",
  standalone: true,
})
export class UploadDirective {
  @HostBinding("class.upload--over")
  public fileOver = false;

  @Output()
  public fileDropped = new EventEmitter<FileList>();

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  @HostListener("drop", ["$event"])
  public ondrop(evt: DragEvent & { dataTransfer: DataTransfer }) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = false;

    let { files } = evt.dataTransfer;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}

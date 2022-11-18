import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { UploadDirective } from "./directives/upload.directive";

import { UploadComponent } from "./upload.component";

describe("UploadComponent", () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should click on the upload button and perform the default process", () => {
    spyOn(component.uploadService, "call");

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(new File([""], "test-file.img"));

    const inputDebugEl = fixture.debugElement.query(By.css("input[type=file]"));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent("change"));

    fixture.detectChanges();

    expect<any>(component.uploadService.call).toHaveBeenCalledTimes(1);
  });

  it("should run dragOver event", () => {
    const event = jasmine.createSpyObj({
      preventDefault: () => void 0,
      stopPropagation: () => void 0,
    });

    fixture.detectChanges();

    const dragElement = fixture.debugElement.query(
      By.directive(UploadDirective)
    );

    dragElement.triggerEventHandler("dragover", event);
    fixture.detectChanges();

    expect(dragElement.attributes["class"]).toContain("upload--over");

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it("should run dragleave event", () => {
    const event = jasmine.createSpyObj({
      preventDefault: () => void 0,
      stopPropagation: () => void 0,
    });

    fixture.detectChanges();

    const dragElement = fixture.debugElement.query(
      By.directive(UploadDirective)
    );

    dragElement.triggerEventHandler("dragleave", event);
    fixture.detectChanges();

    expect(dragElement.attributes["class"]).not.toContain("upload--over");

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it("should run drop event", () => {
    const blob = new Blob([""], { type: "text/html" });
    (<any>blob).name = "filename";

    const file = <File>blob;
    Object.defineProperty(file, "size", { value: 999999999 });

    const files: FileList = {
      0: file,
      1: file,
      length: 2,
      item: (_: number) => file,
    };

    const event = jasmine.createSpyObj({
      preventDefault: () => void 0,
      stopPropagation: () => void 0,
    });
    event.dataTransfer = { files };

    fixture.detectChanges();

    const dragElement = fixture.debugElement.query(
      By.directive(UploadDirective)
    );

    dragElement.triggerEventHandler("drop", event);
    fixture.detectChanges();

    expect(dragElement.attributes["class"]).not.toContain("upload--over");

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });
});

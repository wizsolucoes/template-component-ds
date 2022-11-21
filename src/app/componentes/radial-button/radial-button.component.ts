import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-radial-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./radial-button.component.html",
  styleUrls: ["./radial-button.component.scss"],
})
export class RadialButtonComponent {
  @Input()
  public listRadio: Array<any> = [];

  public value: any;
  constructor() {}

  selectType(value: string) {
    console.log(value);
  }
}

export class RadialButton {
  public texto: string | undefined;
  public value: any;
}

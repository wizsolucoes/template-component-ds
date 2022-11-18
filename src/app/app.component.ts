import { Component } from "@angular/core";
import { StepperClass } from "./componentes/stepper/stepper.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  active = false;

  /* Classes válidas para stepper: 'finalized', 'current', 'waiting' ou 'error' */
  /* Tipos válidos: | type: 'icon' -> valores: 'valueIcon' | e | type: 'text' -> valores: 'valueBullet' | */

  stepArrayConfig: StepperClass[] = [
    {
      label: "Label Finalized",
      className: "finalized",
      showLineStart: false,
      showLineEnd: true,
      type: "icon",
      valueIcon: "done",
    },
    {
      label: "Label Current",
      className: "current",
      showLineStart: true,
      showLineEnd: true,
      type: "text",
      valueBullet: "1",
    },
    {
      label: "Label Waiting",
      className: "waiting",
      showLineStart: true,
      showLineEnd: true,
      type: "text",
      valueBullet: "2",
    },
    {
      label: "Label Error",
      className: "error",
      showLineStart: true,
      showLineEnd: true,
      type: "icon",
      valueIcon: "close",
    },
    {
      label: "Clear Label",
      className: "finalized",
      showLineStart: true,
      showLineEnd: false,
      type: "text",
      valueBullet: "",
    },
  ];

  toggle() {
    setTimeout(() => {
      this.active = !this.active;
    }, 2000);
  }
}

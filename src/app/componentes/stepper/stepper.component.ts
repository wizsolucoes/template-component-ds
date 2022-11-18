import { Component, Input, OnInit } from "@angular/core";

export interface StepperClass {
  label?: string;
  className?: string;
  showLineStart: boolean;
  showLineEnd: boolean;
  type?: string;
  valueIcon?: string;
  valueBullet?: string;
}

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  @Input() isVertical: boolean = false;
  @Input() stepperArray: Array<StepperClass> = [];

  constructor() {}

  ngOnInit(): void {}
}

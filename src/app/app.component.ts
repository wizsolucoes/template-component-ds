import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  active = false;
  listRadio = [
    {
      texto: "Desmarcado",
      value: false,
      isDisabeld: false,
    },
    {
      texto: "Marcado",
      value: true,
      isDisabeld: false,
    },
    {
      texto: "Desabilitado Desmarcado",
      value: false,
      isDisabeld: false,
      tipo: false,
    },
    {
      texto: "Desabilitado Marcado",
      value: true,
      isDisabeld: true,
      tipo: false,
    },
    {
      texto: "Hover",
      value: false,
      isDisabeld: false,
      tipo: true,
    },
  ];
  toggle() {
    setTimeout(() => {
      this.active = !this.active;
    }, 2000);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input('tag-component') tagElement: string = '';
  @Input('link-usuario-github') linkGithub: string = '';
  @Input() showInfo: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}

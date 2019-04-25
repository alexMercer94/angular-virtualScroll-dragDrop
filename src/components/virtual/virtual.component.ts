import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  personas = Array(500).fill(0);
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() {}

  ngOnInit() {}

  goEnd() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  goStart() {
    this.viewport.scrollToIndex(0);
  }

  goHalf() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
}

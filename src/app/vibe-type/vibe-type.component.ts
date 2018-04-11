import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vibe-type',
  templateUrl: './vibe-type.component.html',
  styleUrls: ['./vibe-type.component.css']
})

export class VibeTypeComponent implements OnInit {
@Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}

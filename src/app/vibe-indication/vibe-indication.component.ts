import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-vibe-indication',
  templateUrl: './vibe-indication.component.html',
  styleUrls: ['./vibe-indication.component.css']
})
export class VibeIndicationComponent implements OnInit {
  @Output() goodVibeCreated = new EventEmitter<{goodVibeName: string, goodVibeContent: string}>();
  @Output() badVibeCreated = new EventEmitter<{badVibeName: string, badVibeContent: string}>();
  newVibeName = '';
  newVibeContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddGoodVibe() {
    this.goodVibeCreated.emit({
      goodVibeName: this.newVibeName,
      goodVibeContent: this.newVibeContent
    });
  }

  onAddBadVibe() {
    this.badVibeCreated.emit({
      badVibeName: this.newVibeName,
      badVibeContent: this.newVibeContent
    })
  }

}

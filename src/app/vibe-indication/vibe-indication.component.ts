import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-vibe-indication',
  templateUrl: './vibe-indication.component.html',
  styleUrls: ['./vibe-indication.component.css']
})
export class VibeIndicationComponent implements OnInit {
  @Output() goodVibeCreated = new EventEmitter<{goodVibeName: string, goodVibeContent: string}>();
  @Output() badVibeCreated = new EventEmitter<{badVibeName: string, badVibeContent: string}>();
  // newVibeName = '';
  newVibeContent = '';

  constructor() { }

  ngOnInit() {
  }

  // HTMLInputElement makes user that value property is recognized
  onAddGoodVibe(nameInput: HTMLInputElement) {
    // console.log(nameInput);
    this.goodVibeCreated.emit({
      goodVibeName: nameInput.value,
      goodVibeContent: this.newVibeContent
    });
  }

  onAddBadVibe(nameInput: HTMLInputElement) {
    this.badVibeCreated.emit({
      badVibeName: nameInput.value,
      badVibeContent: this.newVibeContent
    })
  }

}

import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-vibe-indication',
  templateUrl: './vibe-indication.component.html',
  styleUrls: ['./vibe-indication.component.css']
})
export class VibeIndicationComponent implements OnInit {
  @Output() goodVibeCreated = new EventEmitter<{goodVibeName: string, goodVibeContent: string}>();
  @Output() badVibeCreated = new EventEmitter<{badVibeName: string, badVibeContent: string}>();
  // newVibeName = '';
  // newVibeContent = '';
  @ViewChild('vibeContentInput') vibeContentInput: ElementRef;
  // Element Ref is an Angular type; 
  // Element Ref is a reference to a particular element
  // has a useful property --> nativeElement 

  constructor() { }

  ngOnInit() {
  }

  // HTMLInputElement makes user that .value property is recognized
  // nativeElement gives access to underlying element
  // .value still comes from input
  // inside method: console.log(nameInput); console.log(this.vibeContentInput)
  onAddGoodVibe(nameInput: HTMLInputElement) {
    this.goodVibeCreated.emit({
      goodVibeName: nameInput.value,
      goodVibeContent: this.vibeContentInput.nativeElement.value
  });
  }

  onAddBadVibe(nameInput: HTMLInputElement) {
    this.badVibeCreated.emit({
      badVibeName: nameInput.value,
      badVibeContent: this.vibeContentInput.nativeElement.value
    })
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vibeElements = [{type: 'good-vibe', name: 'Gratitude', content: 'Be thankful!'}];


  onGoodVibeAdded(goodVibeData: {goodVibeName: string, goodVibeContent: string}) {
    this.vibeElements.push({
      type: 'good-vibe',
      name: goodVibeData.goodVibeName,
      content: goodVibeData.goodVibeContent
    });
  }

  onBadVibeAdded(badVibeData: {badVibeName: string, badVibeContent: string}) {
    this.vibeElements.push({
      type: 'bad-vibe',
      name: badVibeData.badVibeName,
      content: badVibeData.badVibeContent
    });
  }
}

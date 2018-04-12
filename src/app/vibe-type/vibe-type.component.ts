import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-vibe-type',
  templateUrl: './vibe-type.component.html',
  styleUrls: ['./vibe-type.component.css']
})

// every time that a new instance is initialized, console logs
// Interfaces have to be imported
export class VibeTypeComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
@Input() element: {type: string, name: string, content: string};
@Input() name: string; // making it boundable from outside

  constructor() { 
    console.log('constructor called!');
  }
  
  // only hook that receies an argument
  // Angular type: SimpleChanges (an object)
  // bound property element is and object!!
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called')
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  // whenever Angular detects user activity
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}

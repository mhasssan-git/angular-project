import { Component, OnInit, Output,EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  intervalRef:number;

  ngOnInit(): void {
    
  }
  @Output() evOnStart=new EventEmitter();
  @Output() evOnEnd=new EventEmitter();
  onStart() {
   this.evOnStart.emit(null);
  }
  onStop() {
    this.evOnEnd.emit(null);
  }
}

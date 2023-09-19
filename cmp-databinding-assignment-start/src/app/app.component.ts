import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  gameStarted() {
    console.log("Game Started");
  }
  gameEnded() {
    console.log("Game Ended");
  }
}

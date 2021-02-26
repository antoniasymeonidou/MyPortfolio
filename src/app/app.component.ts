import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'typing/typing.component.scss'],
})

export class AppComponent {
  title = 'my-website';
  
  dark_mode: boolean = false;
  color_mode = "light"

  ngInit() {
    this.dark_mode = window.localStorage.getItem("dark_mode") == "true"
    this.setColourMode()
  }

  toggle_dark_mode() {
    this.dark_mode = !this.dark_mode;
    window.localStorage.setItem("dark_mode", JSON.stringify(this.dark_mode))
    this.setColourMode()
  }  

  private setColourMode() {
    if (this.dark_mode)
      this.color_mode = "dark"
    else
      this.color_mode = "light"
  }
}




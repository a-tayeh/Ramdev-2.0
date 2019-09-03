import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ramdev";
  officersList: any[] = [];
  constructor() {
    this.officersList.push({
      title: " President",
      name: "John Naylor",
      imgSrc: "../assets/president.jpg"
    });
    this.officersList.push({
      title: "Vice President",
      name: "Mohammad Malik",
      imgSrc: "../assets/vice-president.jpeg"
    });
    this.officersList.push({
      title: "Hackathon Czar",
      name: "Zephyr Headley",
      imgSrc: "../assets/hackathon-czar.jpg"
    });
    this.officersList.push({
      title: "Webmaster",
      name: "Ali Tayeh",
      imgSrc: "../assets/webmaster.jpg"
    });
    this.officersList.push({
      title: "Faculty Advisor",
      name: "Dr Kostadin Damevski",
      imgSrc: "../assets/faculty-advisor.jpg"
    });
    this.officersList.push({
      title: "Marketing Officer",
      name: "Rowan O'Hara",
      imgSrc: "../assets/marketing.jpg"
    });
  }
}

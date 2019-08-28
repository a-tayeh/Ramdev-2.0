// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { IOfficer } from "../../officer";

@Component({
  selector: "app-officers",
  templateUrl: "./officers.component.html",
  styleUrls: ["./officers.component.scss"]
})
export class OfficersComponent implements OnInit {
  officersList: IOfficer[] = [];
  constructor() {
    this.officersList.push({
      title: " President",
      name: "John Naylor",
      imgSrc: "../../../assets/president.jpg"
    });
    this.officersList.push({
      title: "Vice President",
      name: "Mohammad Malik",
      imgSrc: "/../../../assets/vice-president.jpeg"
    });
    this.officersList.push({
      title: "Hackathon Czar",
      name: "Zephyr Headley",
      imgSrc: "/../../../assets/hackathon-czar.jpg"
    });
    this.officersList.push({
      title: "Webmaster",
      name: "Ali Tayeh",
      imgSrc: "/../../../assets/webmaster.jpg"
    });
    this.officersList.push({
      title: "Faculty Advisor",
      name: "Dr Kostadin Damevski",
      imgSrc: "/../../../assets/faculty-advisor.jpg"
    });
    this.officersList.push({
      title: "Marketing Officer",
      name: "Rowan O'Hara",
      imgSrc: "/../../../assets/marketing.jpg"
    });
  }

  ngOnInit() {}
}

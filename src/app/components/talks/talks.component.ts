import { Component, OnInit } from "@angular/core";
import { Talks } from "../talks/Talks";
@Component({
  selector: "app-talks",
  templateUrl: "./talks.component.html",
  styleUrls: ["./talks.component.scss"]
})
export class TalksComponent implements OnInit {
  constructor() {}
  talks: Talks[] = [
    {
      body: "RamDev members gathered in preparation for HooHacks.",
      speaker: "MLH",
      date: "02/03/2019",
      title: "HooHacks"
    },
    {
      body:
        "Chase shared insights and tips on how to be successful after graduation and shared some aspects of the current project he's involved in.",
      speaker: "Chase Greco",
      date: "26 February 2019",
      title: "LIFE Talk"
    },
    {
      body:
        "Jeet from MLH did a presentation on mendix which is a is a low-code software platform that provides tools to build, test, deploy and iterate applications. Students were given a demo to learn how mendix works at first then proceeded on creating their own web apps.",
      speaker: "Jeet Gajjar ",
      date: "19 February 2019",
      title: "No Code app Building with Mendix"
    },
    {
      body: "Students gathered in preparations for HopHacks.",
      speaker: "Johns Hopkins University",
      date: "15 February 2019",
      title: "HopHacks"
    },
    {
      body:
        "Jeet from MLH came back to introduce CockroachDB and how to integrate scalable apps with it.",
      speaker: "MLH",
      date: "12 February 2019",
      title: "Building Scalable Apps with CockroachDB"
    },
    {
      body:
        "Matt Nuckols gave an introduction to typescript and why major companies are quickly embracing it.",
      speaker: "Afton/NewMarket",
      date: "05 February 2019",
      title: "TypeScript"
    },
    {
      body:
        "Preparations for HoyaHacks were discussed by students who have attended HoyaHacks in the past, previous challenges from last year's HoyaHacks were also displayed to ramdev members.",
      speaker: "HoyaHacks",
      date: "26 February 2019",
      title: "GeorgeTown Hoyas"
    },
    {
      body:
        "Engineers from Mozilla discuss internship opportunities and give insights on various projects Mozilla is working on. The Mozilla team also emphasized the impact interns had on these projects in the past years and shared previous interns' experience during their stay at Mozilla.",
      speaker: "Mozilla Engineering Team",
      date: "29 January 2019",
      title: "Mozilla"
    },
    {
      body:
        "Jake shared his insights on the challenges presented at EarthHacks.",
      speaker: "MLH",
      date: "26 January 2019",
      title: "EarthHacks"
    },
    {
      body:
        "Chase Greco discussed different methods of deploying machine learning models.",
      speaker: "Chase Greco",
      date: "03 December 2018",
      title: "Machine Learning Model Deployment"
    },
    {
      body:
        "Joel Fuller from Federal Reserve of Richmond stopped by to share tips on cracking technical interviews. Sample coding questions were shown and discussed to help students identify a common pattern technical questions have.",
      speaker: "Joel Fuller",
      date: "26 November 2018",
      title: "Federal Reserve of Richmond | Technical Interviews"
    },
    {
      body:
        "David from Capital One visited RamDev to give a talk about the freely-available articles, methodologies, documentation, tools, and technologies in the field of web application security.",
      speaker: "David Walter",
      date: "19 November 2018",
      title: "Capital One"
    },
    {
      body:
        "Jeet from major league hacking comes back again to shed some light on the technology of Blockchain and why some consider it an incorruptible digital ledger of economic transactions.",
      speaker: "Jeet Gajjar",
      date: "05 November 2018",
      title: "Blockchain"
    },
    {
      body:
        "RamDev welcomes Allison Garret from Radify Labs to give us insights on how to prepare for behavioural interviews, in depth analysis about how body language plays an important role and how students can organize their chain of thoughts to respond more efficiently to the questions asked.",
      speaker: "Allison Garret",
      date: "29 October 2018",
      title:
        "Mastering Behavioral Interviews for Software Engineers, Data Science, and Developers"
    },
    {
      body:
        "Andriy explains how machine learning is expanding to quickly become one of the hottest fields in computer science and the endless possibilities that it brings when combined with NLP.",
      speaker: "Andriy Mulyar",
      date: "08 October 2018",
      title: "Introduction to Machine Learning/NLP"
    },
    {
      body:
        "Mit introduces aspects of iOS programming using Apple's xcode environment and goes over the differences between objective-c and swift.",
      speaker: "Mit Amin ",
      date: "01 October 2018",
      title: "iOS Development"
    },
    {
      body:
        "Students who are part of the SpaceX Hyperloop competition share their experiences during the summer '18 in Hawthorne,CA.",
      speaker: "John Naylor, Chris Jones and Jon O'Dell ",
      date: "17 September 2018",
      title: "Project Management: Hyperloop"
    },
    {
      body:
        "Chase shared insights and tips on how to be successful after graduation and shared some aspects of the current project he's involved in.",
      speaker: "Chase Greco",
      date: "26 February 2019",
      title: "LIFE Talk"
    },
    {
      body:
        "Jeet from MLH gives a talk about Bug-Free SPARK Programming (MLH Localhost Workshop). Come here to learn why SPARK is robust and used by major government agencies, cool stickers, USBs with SPARK and PIZZA will be provided :)",
      speaker: "Jeet Gajjar",
      date: "10 September 2018",
      title: "Bug-Free SPARK Programming"
    },
    {
      body:
        "UDig will be giving a talk about Spring Boot. More details are coming soon.",
      speaker: "UDig ",
      date: "02 April 2018",
      title: "Spring Boot"
    },
    {
      body:
        "We will be hosting a MLH Localhost Slideshow Karaoke session! Join us for MLH swag, chipotle, and practice with public speaking.",
      speaker: "Yadunandan Pillai ",
      date: "19 March 2018",
      title: "MLH Localhost"
    },
    {
      body:
        "Chase shared insights and tips on how to be successful after graduation and shared some aspects of the current project he's involved in.",
      speaker: "Chase Greco",
      date: "26 February 2019",
      title: "LIFE Talk"
    },
    {
      body:
        "CWe will be hosting a Master the Mainframe Meetup, led by representatives from IBM. You can see the ad below for why mainframes are cool. Come to this meeting to get access to an IBM Z mainframe and be taught how to use it. There will be IBM swag available to all participants, and prizes for those who complete certain challenges.",
      speaker: "IBM",
      date: "12 March 2018",
      title: "Master The Mainframe"
    },
    {
      body:
        "This week, we are hosting a speaker from Dominion Energy. They will be talking about cyber-security.",
      speaker: "Dominion Energy",
      date: "26 February 2018",
      title: "Cybersecurity"
    },
    {
      body:
        "This week, Chase Greco, a CS Masters student at VCU, talked about developing Minecraft plugins. Specifically, how to develop Minecraft plugins with Sponge, IntelliJ, and Minecraft Dev. plugin. There will be free food this Monday!! We will be serving Jimmy Johns! Please come eat out food!",
      speaker: "Chase Greco",
      date: "05 February 2019",
      title: "Minecraft"
    },
    {
      body:
        "John Naylor and the Hyperloop team gives a presentation on Elon Musk’s Hyperloop competition, embedded hardware/software, and technical challenges faced in this challenge.",
      speaker: "John Naylor",
      date: "29 January 2018",
      title: "Hyperloop"
    }
  ];
  ngOnInit() {}
}

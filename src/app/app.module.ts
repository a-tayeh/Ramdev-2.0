import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";

// import { OfficersComponent } from "./components/officers/officers.component";
// import { TalksComponent } from "./components/talks/talks.component";
// import { HackathonComponent } from "./components/hackathon/hackathon.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // OfficersComponent,
    // TalksComponent,
    // HackathonComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

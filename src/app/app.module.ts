import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OfficersComponent } from "./components/officers/officers.component";
import { TalksComponent } from "./components/talks/talks.component";

const routes: Routes = [
  { path: "officers", component: OfficersComponent },
  { path: "talks", component: TalksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [OfficersComponent, TalksComponent];

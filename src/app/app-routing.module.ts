import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OfficersComponent } from "./components/officers/officers.component";

const routes: Routes = [{ path: "officers", component: OfficersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [OfficersComponent];

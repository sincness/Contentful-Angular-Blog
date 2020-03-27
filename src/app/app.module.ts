import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ContentfulService } from "./contentful.service";
import { RouterModule, Routes } from "@angular/router";

import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductListComponent }
];

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}

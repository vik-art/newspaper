import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspaperListComponent } from './components/newspaper-list/newspaper-list.component';
import { NewspaperPageComponent } from './components/newspaper-page/newspaper-page.component';

const routes: Routes = [
  {
    path: "", component: NewspaperListComponent
  },
  {
    path: "article/:id", component: NewspaperPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

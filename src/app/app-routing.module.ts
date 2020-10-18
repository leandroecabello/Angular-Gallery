import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { ImageFormComponent } from './components/image-form/image-form.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';


const routes: Routes = [
  {path: 'images', component: ImageListComponent},
  {path: 'images/new', component: ImageFormComponent},
  {path: 'images/:id', component: ImagePreviewComponent},
  {path: '', redirectTo: '/images', pathMatch: 'full'},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

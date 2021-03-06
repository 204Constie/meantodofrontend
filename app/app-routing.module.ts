import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './addTodo.component';
import { ListComponent } from './listTodos.component';
import { TodoComponent } from './todo.component';
import { UploadComponent } from './uploadFile.component';


const appRoutes: Routes = [
  {path: '', component: ListComponent},
  {path: 'addtodo', component: AddComponent},
  {path: 'todo/:id', component: TodoComponent},
  {path: 'upload', component: UploadComponent}
];

// import { RecipesComponent } from './recipes/recipes.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
//
// const appRoutes: Routes = [
//   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//   { path: 'recipes', component: RecipesComponent, children: [
//     { path: '', component: RecipeStartComponent },
//     { path: 'new', component: RecipeEditComponent },
//     { path: ':id', component: RecipeDetailComponent },
//     { path: ':id/edit', component: RecipeEditComponent },
//   ] },
//   { path: 'shopping-list', component: ShoppingListComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

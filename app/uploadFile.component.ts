import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  // templateUrl: './app/uploadFile.component.html',
  template: `
  <h1>
    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
  </h1>

  <form ngNoForm method="post" enctype="multipart/form-data" action="/file-upload">
    <div class="addtodo">
      <input class="addtodo__item" type="file" name="thumbnail">
      <button class="addtodo__item" style="margin-top: 2%;" type="submit" >submit</button>
    </div>
  </form>

  `,
  styleUrls: ['app/listTodos.component.css']
})
export class UploadComponent  {
  constructor(private router: Router) { }

  navigateBack(){
    this.router.navigate(['']);
  }
}

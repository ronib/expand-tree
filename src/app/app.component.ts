import { Component } from '@angular/core';
import { TreeNode } from 'src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'autodesk-tree';
  children: TreeNode[] = [{name:'first', children:[]}];
}

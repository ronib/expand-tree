import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'src/model';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {
  @Input() children: TreeNode[];

  constructor(){
  }
  
  expand(){
    this.children[0].children.push({name: 'new node', children: []});
    console.log(this.children);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GridStackOptions, GridStackWidget} from "gridstack";
import {GridstackModule, nodesCB} from "gridstack/dist/angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridstackModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public gridOptions: GridStackOptions = { margin: 5 }
  public items: GridStackWidget[] = [
    {x:0, y:0, w:4, id:'1'},
    {x:1, y:0, w:3, id:'2'},
    {x:0, y:1, h:4, w:4, id:'3'},
    {x:3, y:1, w:3, id:'4'},
    {x:0, y:2, w:2, id:'5'},
  ];

  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

}

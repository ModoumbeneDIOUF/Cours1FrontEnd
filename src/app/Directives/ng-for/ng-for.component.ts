import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  films: Film[] =[

    {type:"Type 1", description:"Description 1", principal: "Principal 1", date: "Date 1"},
    {type:"Type 2", description:"Description 2", principal: "Principal 2", date: "Date 2"},
    {type:"Type 3", description:"Description 3", principal: "Principal 3", date: "Date 3"},
    {type:"Type 4", description:"Description 4", principal: "Principal 4", date: "Date 4"},
  ]


  constructor() { }

  ngOnInit(): void {
  }


}



class Film {
  type!: string
  description!: string
  principal!: string
  date!: string

}

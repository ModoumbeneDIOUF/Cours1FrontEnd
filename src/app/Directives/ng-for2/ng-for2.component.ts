import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for2',
  templateUrl: './ng-for2.component.html',
  styleUrls: ['./ng-for2.component.css']
})
export class NgFor2Component implements OnInit {

  etudiants= [

    { name: "Pape", email:"pape@pape",
      notes:[{matier:"Java", note:"10"}, {matier:"Laravel", note:"11"}, {matier:"Php", note:"10"}]
    },

    { name: "Modou", email:"modou@modou",
      notes:[{matier:"Java", note:"12"}, {matier:"Laravel", note:"11"}, {matier:"Php", note:"11"},]
    },

    { name: "Issa", email:"issa@issa",
      notes:[{matier:"Java", note:"14"}, {matier:"Laravel", note:"11"}, {matier:"Php", note:"11"},]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

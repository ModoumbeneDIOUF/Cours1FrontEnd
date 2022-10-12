import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {


  films: any[] = []
  titre:string = ""
  description: string = ""

  constructor() { }

  ngOnInit(): void {

    this.Refresh()

  }


 addFilm(){

  this.films.push({titre:this.titre, description:this.description})


  this.titre= ""
  this.description= ""

 }

 removeFilm(i:any){
   this.films.splice(i,1)
 }

  Refresh() {
    console.log("refresh")

    this.films = [
      { titre: "Titre 1", description: 'Description 1'},
      { titre: "Titre 2", description: 'Description 2'},
      { titre: 'Titre 3', description: 'Description 3'},

    ]
  }

}

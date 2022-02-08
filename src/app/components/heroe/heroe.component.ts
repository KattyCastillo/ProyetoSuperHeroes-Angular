import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroes ;

  constructor(private activateRaute: ActivatedRoute,
              private _serviceHeroes: HeroesService) 
    { 
  }

  ngOnInit(): void {
    this.activateRaute.params.subscribe( params => {
      this.heroe = this._serviceHeroes.getHeroe(params['id']);
    })
  }

}

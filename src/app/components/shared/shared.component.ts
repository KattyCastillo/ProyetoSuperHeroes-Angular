import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  heroes!: Heroes[];
  busquedaElementos: boolean = false;
  busquedaCantidad!: number;

  constructor(private activateRaute: ActivatedRoute, 
              private _heroesService: HeroesService,
              private router: Router)
  { 
    
  }

  ngOnInit(): void {
    this.activateRaute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.busquedaCantidad = this.heroes.length;
      if (this.busquedaCantidad != 0) {
        this.busquedaElementos = true;
      }
      console.log(this.heroes);
    });
  }

  getHeroe(index:number):void{
    this.router.navigate(['heroes/heroe', index]);
  }

}

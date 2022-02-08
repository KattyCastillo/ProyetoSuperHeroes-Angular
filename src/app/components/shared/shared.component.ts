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
  msjBusqueda!: string;
  msjClass!:string;

  constructor(private activateRaute: ActivatedRoute, 
              private _heroesService: HeroesService,
              private router: Router)
  { 
    
  }

  ngOnInit(): void {
    this.activateRaute.params.subscribe( params => {
      this.heroes= this._heroesService.buscarHeroe(params['termino']);
      this.busquedaCantidad = this.heroes.length;

      this.heroes.forEach(function (value) {
        console.log(value);
      }); 

      if (this.busquedaCantidad != 0) {
        this.busquedaElementos = true;
        this.msjBusqueda = "Resultados encontrados " + this.busquedaCantidad;
        this.msjClass = "alert alert-success";
      }
      else{
        this.msjBusqueda = "No se encontraron registros con el termino: " + params['termino'];
        this.msjClass = "alert alert-warning";
      }
      console.log(this.heroes);
    });
  }

  getHeroe(index:number):void{
    this.router.navigate(['heroes/heroe', index]);
  }

}

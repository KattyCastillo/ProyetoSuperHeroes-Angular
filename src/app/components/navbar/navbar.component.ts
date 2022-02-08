import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes!: Heroes[];
  paginaActual!:string;
  constructor(private _heroesService: HeroesService,
              private router: Router)
  { 
  }

  ngOnInit(): void {
  }

  //Redirecciones
  redireccionarBusqueda(texto:string): void{
    this.router.navigate(['/shared',texto]);
  }
}

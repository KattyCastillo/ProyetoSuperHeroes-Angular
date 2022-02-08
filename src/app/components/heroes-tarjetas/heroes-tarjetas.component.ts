import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjetas',
  templateUrl: './heroes-tarjetas.component.html',
  styleUrls: ['./heroes-tarjetas.component.css']
})
export class HeroesTarjetasComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() heroeTarjeta: any = {};
  @Input() indexTarjeta!: number;

  ngOnInit(): void {
  }

  redireccionarHeroe(index: number):void{
    this.router.navigate(['heroes/heroe', this.indexTarjeta]);
  }
}

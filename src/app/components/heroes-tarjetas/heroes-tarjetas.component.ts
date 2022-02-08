import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjetas',
  templateUrl: './heroes-tarjetas.component.html',
  styleUrls: ['./heroes-tarjetas.component.css']
})
export class HeroesTarjetasComponent implements OnInit {

  @Input() heroeTarjeta: any = {};
  @Input() indexTarjeta!: number;

  @Output() solicitarHeroe: EventEmitter<number>;

  constructor(private router: Router) {
    this.solicitarHeroe = new EventEmitter();
   }

  ngOnInit(): void {
  }

  redireccionarHeroe(index: number):void{
   // this.router.navigate(['heroes/heroe', this.indexTarjeta]);
   this.solicitarHeroe.emit(this.indexTarjeta);
  }
}

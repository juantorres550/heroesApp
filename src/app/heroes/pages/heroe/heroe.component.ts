import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img{
        width: 100%;
        /* height: 450px; */
        border-radius: 5px;
        /* margin-left: 100px; */
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private aR: ActivatedRoute, private heroesService: HeroeService, private router: Router) { }

  ngOnInit(): void {
    this.aR.params.pipe(
      switchMap(res=> this.heroesService.getHeroesPorId(res.id))
    )
    .subscribe( heroe => this.heroe=heroe )
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}

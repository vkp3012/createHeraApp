import { Component,OnInit } from '@angular/core';
import { Hero } from "../../hero";
// import { Heroes } from "../../mock-heroes"
import { HeroService } from 'src/app/hero.service';
// import { MessageService } from 'src/app/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  // heroes = Heroes;

  // selectedHero?: Hero;
  heroes: Hero[] = []

  constructor(
    private heroService : HeroService ,
    // private messageService : MessageService
  ){}

  ngOnInit():void{
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`)
  // }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
}

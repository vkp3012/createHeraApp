import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private messageService: MessageService) {}
    getHero(id: number): Observable<Hero> {
        // For now, assume that a hero with the specified `id` always exists.
        // Error handling will be added in the next step of the tutorial.
        const hero = Heroes.find((h) => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
    }

    getHeroes(): Observable<Hero[]> {
        const heroes = of(Heroes);
        this.messageService.add('HeroService : fetched heroes');
        return heroes;
    }
}

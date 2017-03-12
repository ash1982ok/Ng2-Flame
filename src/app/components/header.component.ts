import { NgModule } from '@angular/core';
import {Component} from '@angular/core'

@Component({
    selector:'header',
    template:`
    <section class="page-header">
      <h1 class="project-name infinite rubberBand animated">FLAME</h1>
      <h4> 
        Flame game is a method to find out the status of a love relationship. Entering two names will give you the outcome of a relationship between them.FLAME is a Love Test, a good old game of love which has helped lovers determine the scope of their love and relationship.FLAMES stands for Friends, Love, Affair, Marriage and Enemy.
      </h4>  
    </section>
    `
})

export class HeaderComponent {

}
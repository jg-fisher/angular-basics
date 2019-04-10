import { Component, OnInit } from '@angular/core';

import { Recipe, RecipeItem } from '../../core/entities';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Array<Recipe> = [
    new Recipe({ 
      title: "Cheeseburger", 
      items: [
        new RecipeItem({ 
          name: "Potatos",
          amount: "1 pound"
        })
      ]
    }),
    new Recipe({ 
      title: "Soup du Jour", 
      items: [
        new RecipeItem({ 
          name: "Potatos",
          amount: "1 pound"}),
        new RecipeItem({ 
          name: "Chicken Broth",
          amount: "4 Cups"})
      ]
    })
  ];

  constructor() { }

  ngOnInit() {
  }

}

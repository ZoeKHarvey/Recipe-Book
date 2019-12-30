import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Steak', 
    'Cook as steak in less than a half an hour!',
    'https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg'
    ),
    new Recipe('Rib Eye', 'Cook a tasty ribeye',
    'https://images.pitboss-grills.com/catalog/recipes/1200px/Reverse-Seared-NY-Steak.jpg'
    )
  ]
  constructor() { }

  ngOnInit() {
  }

}

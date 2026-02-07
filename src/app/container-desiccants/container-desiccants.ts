import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CONTAINER_DESICCANTS_DATA } from '../product/container-desiccants';

interface Category {
  name: string;
  slug: string;
}

interface Product {
  title: string;
  slug: string;
  categorySlug: string;
  image: string;
  gram: string;
}

@Component({
  selector: 'app-container-desiccants',
  imports: [RouterModule, CommonModule],
  templateUrl: './container-desiccants.html',
  styleUrl: './container-desiccants.css',
})
export class ContainerDesiccants {
  categoriesData = CONTAINER_DESICCANTS_DATA;

   categorie: Category[] = [
    { name: 'DS', slug: 'ds' },
    { name: 'DP', slug: 'dp' },
    { name: 'SQ/TP/DP', slug: 'sq-tp-dp' }
  ];

  selectedCategory = 'ds';
  filteredProjects: Product[] = [];

  projects: Product[] = [
    {
      title: 'DS 250G',
      slug: 'ds-250g',
      categorySlug: 'ds',
      image: '/banner1.png',
      gram: 'DS 250G'
    },
    {
      title: 'DS 250g Sticker',
      slug: 'ds-250g-sticker',
      categorySlug: 'ds',
      image: '/banner2.png',
      gram: 'DS 250G Sticker'
    },
    {
      title: 'DS 500G',
      slug: 'ds-500g',
      categorySlug: 'ds',
      image: '/banner1.png',
      gram: 'DS 500G'
    },

    {
      title: 'DP 1000G',
      slug: 'dp-1000g',
      categorySlug: 'dp',
      image: '/banner2.png',
      gram: 'DP 1000G'
    },

    {
      title: 'DB 1000G',
      slug: 'db-1000g',
      categorySlug: 'sq-tp-dp',
      image: '/banner1.png',
      gram: 'DB 1000G'
    },
    {
      title: 'SQ 1000G',
      slug: 'sq-1000g',
      categorySlug: 'sq-tp-dp',
      image: '/banner2.png',
      gram: 'SQ 1000G'
    },
    {
      title: 'TP 1000G',
      slug: 'tp-1000g',
      categorySlug: 'sq-tp-dp',
      image: '/banner1.png',
      gram: 'TP 1000G'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filterCategory(this.categorie[0]);
  }

  filterCategory(category: Category) {
    this.selectedCategory = category.slug;
    this.filteredProjects = this.projects.filter(
      p => p.categorySlug === category.slug
    );
  }

  openProject(product: Product) {
    this.router.navigate([
      '/container-desiccants',
      product.categorySlug,
      product.slug
    ]);
  }
}

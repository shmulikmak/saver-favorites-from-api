import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  savedItems = [];
  commentsItems = {};
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getSavedItems();
  }

  getSavedItems() {
    this.savedItems = this.localStorageService.getStorage('WikipediaSearched');
    this.commentsItems = this.localStorageService.getStorage('commentsItems') || {};
  }

  removeItem(item) {
    // remove item from 'Wikipedia Searched'
    const newItems = this.savedItems.filter((it) => {
      return it !== item;
    });
    this.localStorageService.setStorage('WikipediaSearched', newItems);

    // remove item from 'comment'
    delete this.commentsItems[item];
    this.localStorageService.setStorage('commentsItems', this.commentsItems);

    // update the table
    this.getSavedItems();
  }

  updateVal(event, key) {
    this.commentsItems[key] = event;
  }

  saveComment() {
    this.localStorageService.setStorage('commentsItems', this.commentsItems);
  }
}

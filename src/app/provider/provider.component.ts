import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WikipediaService } from '../services/wikipedia.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable } from 'rxjs/Observable';
import { Sort } from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  items: Observable<Array<any>>;
  term = new FormControl();

  constructor(private wikipediaService: WikipediaService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.term.valueChanges
      .debounceTime(250)
      .distinctUntilChanged()
      .switchMap(term => this.wikipediaService.search(term))
      .subscribe(
      result => {
        this.items = result[1];
      },
      error => {
        console.log('error: ', error);
      });
  }

  updateCheckedFavorites(item, event) {
    let oldItems = this.localStorageService.getStorage('WikipediaSearched') || [];

    if (oldItems.indexOf(item) > -1) {
      // remove item if exist
      oldItems = oldItems.filter((it) => {
        return it !== item;
      });
    } else {
      oldItems.push(item);
    }
    this.localStorageService.setStorage('WikipediaSearched', oldItems);
  }
}

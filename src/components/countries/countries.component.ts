import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(countries => (this.countries = countries));
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }
}

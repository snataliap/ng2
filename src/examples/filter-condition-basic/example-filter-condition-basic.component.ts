import { Component, OnInit } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'example-filter-condition-basic',
	templateUrl: 'example-filter-condition-basic.component.html',
	styleUrls: ['example-filter-condition-basic.component.scss'],
	providers: [DataService]
})
export class ExampleFilterConditionBasicComponent {
	rows: Observable<Atom[]>;

	constructor(dataService: DataService) {
		this.rows = dataService.getAtoms();
	}
}
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { PositionView } from 'ng2-qgrid/plugin/position/position.view';

@Directive({
	selector: '[q-grid-position]'
})
export class PositionDirective implements OnDestroy, OnInit {
	@Input('q-grid-position') public target = '';
	private position: PositionView;

	constructor(private element: ElementRef) {
	}

	ngOnInit() {
		this.position = new PositionView({
			element: this.element.nativeElement,
			targetName: this.target
		});

		this.position.invalidate();
	}

	ngOnDestroy() {
		this.position.dispose();
	}
}

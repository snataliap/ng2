import { Matrix } from './matrix';
import { Selector } from './selector';
import { SelectorMediator } from './selector.mediate';
import { UnitFactory } from './unit.factory';
import { Range } from '../../infrastructure/range';

export class SelectorFactory {
	constructor(bag, selectorMark) {
		this.bag = bag;
		this.selectorMark = selectorMark;
	}

	create() {
		console.log('selectorFactory: create');
		const bag = this.bag;
		const selectorMark = this.selectorMark;
		const matrix = new Matrix(tr => bag.models.has(tr));
		const entries =
			selectorMark
				.select()
				.map(({ element, rowRange, columnRange }) => ({
					matrix: matrix.build(element),
					rowRange,
					columnRange
				}));

		const selectorFactory = context => {
			return entries.map(entry => ({
				invoke: f => {
					const unitFactory = new UnitFactory(entry.rowRange, entry.columnRange);
					const selector = new Selector(entry.matrix, bag, unitFactory);

					const args = [];
					args.push(selector);
					
					if (context.hasOwnProperty('row')) {
						args.push(context.row - entry.rowRange.start);
					}

					if (context.hasOwnProperty('column')) {
						args.push(context.column - entry.columnRange.start);
					}

					return f(...args);
				}
			}));
		};

		const unitFactory = new UnitFactory(new Range(0, 0), new Range(0, 0));
		return new SelectorMediator(selectorFactory, unitFactory);
	}
}

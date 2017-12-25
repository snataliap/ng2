import {PluginView} from '../plugin.view';
import {Event, EventListener, EventManager} from '../../core/infrastructure';

export class BackdropView extends PluginView {
	constructor(context) {
		super(context);
		
		this.closeEvent = new Event();

		const element = context.element;
		const listener = new EventListener(element, new EventManager(this));

		this.using(listener.on('click', e => {
			e.stopPropagation();
			element.remove();

			if (context.propagate !== false) {
				const target = document.elementFromPoint(e.clientX, e.clientY);
				target.click();
			}

			this.closeEvent.emit(e);
		}));

		this.using(listener.on('keydown', e => {
			context.onKeyDown({$event: e});
		}));
	}
}
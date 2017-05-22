import {Directive, ElementRef, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {GRID_PREFIX} from '@grid/core/definition';
import {ViewCoreService} from '../view/view-core.service';
import {TemplateCacheService, TemplateLinkService} from '@grid/template';

@Directive({
  selector: '[q-grid-core-tf]'
})
export class TfCoreDirective implements OnInit, OnDestroy {
  @Input('q-grid-core-row-index') rowIndex: number;
  @Input('q-grid-core-column-index') columnIndex: number;
  private element: HTMLElement = null;
  private $implicit = this;

  constructor(public $view: ViewCoreService,
              private templateCache: TemplateCacheService,
              private templateLink: TemplateLinkService,
              private viewContainerRef: ViewContainerRef,
              element: ElementRef) {

    this.element = element.nativeElement.parentNode;
  }

  ngOnInit() {
    const column = this.column;
    const element = this.element;

    this.$view.bag.set(element, this);
    element.classList.add(`${GRID_PREFIX}-${column.key}`);
    element.classList.add(`${GRID_PREFIX}-${column.type}`);
    if (column.hasOwnProperty('editor')) {
      element.classList.add(`${GRID_PREFIX}-${column.editor}`);
    }

    const template =
      this.templateCache.get('foot-cell-text.tpl.html') ||
      this.templateLink.get('foot-cell-text.tpl.html');

    this.viewContainerRef.createEmbeddedView(template, this);
  }

  get value() {
    const column = this.column;
    return this.$view.foot.value(column);
  }

  get column() {
    return this.row[this.columnIndex].model;
  }

  get row() {
    return this.$view.foot.rows[this.rowIndex];
  }

  ngOnDestroy(){
    const element = this.element;
    this.$view.bag.set(element, this);
  }
}
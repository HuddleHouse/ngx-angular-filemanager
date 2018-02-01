import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'angular-filemanager'
})
export class AngularFilemanagerDirective extends UpgradeComponent {
  @Input() fileManagerConfig: any;
  @Input() Item: any;
  @Input() FileNavigator: any;
  @Input() ApiMiddleware: any;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('angularFilemanager', elementRef, injector);
  }
}

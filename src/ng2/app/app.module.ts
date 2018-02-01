import { AngularFilemanagerDirective } from './../directives/angular-filemanager';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularFilemanagerDirective,
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: '$scope',
      useFactory: i => i.get('$rootScope'),
      deps: ['$injector']
    }
  ],
  // bootstrap: []
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    private upgrade: UpgradeModule
  ) {
    this.upgrade.bootstrap(document.body, ['FileManagerApp']);
  }
  // ngDoBootstrap() { }
  ngDoBootstrap() {
    // this.upgrade.bootstrap(document.body, ['FileManagerApp']);
  }
}

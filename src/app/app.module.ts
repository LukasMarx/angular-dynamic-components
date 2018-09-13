import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DialogModule } from './dialog/dialog.module';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, DialogModule],
  bootstrap: [AppComponent],
  entryComponents: [ExampleComponent]
})
export class AppModule {}

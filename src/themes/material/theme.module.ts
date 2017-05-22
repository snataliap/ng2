import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {ThemeService} from './theme.service';
import {ThemeComponent} from './theme.component';
import {PluginModule} from "@grid/plugins";
import {TemplateModule} from "@grid/template";
import {
  MdIconModule,
  MdButtonModule,
  MdCheckboxModule,
  MdSelectModule,
  MdTooltipModule,
  MdProgressBarModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    ThemeComponent
  ],
  exports: [
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TemplateModule,
    PluginModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdTooltipModule,
    MdProgressBarModule,
    MdInputModule
  ],
  providers: [
    ThemeService
  ]
})
export class ThemeModule {
  constructor() {
  }
}
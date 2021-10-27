import { NgModule } from '@angular/core';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import { TagModule } from 'primeng/tag';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    PanelMenuModule,
    MenuModule,
    CardModule,
    InputNumberModule,
    CalendarModule,
    InputTextareaModule,
    KnobModule,
    TagModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    MessageModule
  ]
})
export class PrimeModule { }

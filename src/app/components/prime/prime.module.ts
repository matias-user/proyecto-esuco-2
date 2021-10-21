import { NgModule } from '@angular/core';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import { TagModule } from 'primeng/tag';

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
    TagModule
  ]
})
export class PrimeModule { }

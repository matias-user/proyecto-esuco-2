import { NgModule } from '@angular/core';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import { TagModule } from 'primeng/tag';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    PanelMenuModule,
    MenuModule,
    CardModule,
    InputNumberModule,
    InputTextareaModule,
    KnobModule,
    TagModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    TableModule
  ]
})
export class PrimeModule { }

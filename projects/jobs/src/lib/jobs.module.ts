import { NgModule } from '@angular/core';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';

@NgModule({
  declarations: [JobsComponent],
  imports: [JobsRoutingModule],
  exports: [JobsComponent],
})
export class JobsModule {}

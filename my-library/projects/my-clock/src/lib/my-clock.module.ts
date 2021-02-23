import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyClockComponent } from './my-clock.component';
import { ClockComponent } from './clock/clock.component';
import { ChronometerComponent } from './chronometer/chronometer.component';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [MyClockComponent, ClockComponent, ChronometerComponent, TimerComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MyClockComponent, ClockComponent, ChronometerComponent, TimerComponent]
})
export class MyClockModule { }

# My first Angular library
This is my first library created with Angular 11. This library contain three componenents:
1. Clock Component
    This component allow to view a digital clock with the 12-hours format.
2. Chronometer Component
    This component allow to view a digital chronometer. The user can start, pause and restart the chronometer.
3. Timer Component
    This component allow to view a digital timer. The user can insert a start value and then he can start, pause and restart the timer.
 
# Commands most used
1. Create a new project
```
ng new my-library
```
2. Create a library
```
ng generate library my-clock
```
3. Create components into the library
```
ng g c chronometer --project my-clock
```
4. Build the library
```
ng build my-clock
```
5. Serve the application
```
ng serve
```
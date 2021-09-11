import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

    // Subscribe métodos: (1) next, (2) error y (3) complete
    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('Subs: ', valor),
    //   error => console.warn('Error: ', error),
    //   () => console.error('Obs terminado')

    // );

    this.intervalSubs = this.retornaIntervalo()
      .subscribe(valor => console.log(valor));
  }


  ngOnDestroy(): void {
    // Desuscribirme del Observable, est 'onDestroy' hace efecto cuando 
    // se refresca la pagina o se navega a otra.
    this.intervalSubs.unsubscribe();
  }

  ngOnInit(): void {
  }

  retornaIntervalo(): Observable<number> {

    // Se ejecutará en orde, primero el take, luego el map y finalmente filter
    return interval(1000)
      .pipe(
        take(10), // repetir 4 veces
        map(valor => valor + 1), // 0 => 1
        filter(valor => (valor % 2 === 0) ? true : false) // Pasar solo los pares
      );
  }

  retornaObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i); // Emitir valor

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);

    });

  }

}

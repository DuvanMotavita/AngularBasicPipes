import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Duvan'
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male: 'invitarlo',
    female:'invitarla'
  }
  changeClient():void{
    this.name = 'Sari';
    this.gender =   'female';
  }

  //i18nPlural
  public clients: string[] = ['Juan','Mario','Sari','Duvan','Albert','Einstein','Juanda'];
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }
  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Duvan',
    age: 27,
    address: 'Bog, Colombia'
  }
  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue:Promise<string> = new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve('Tenemos data en la promesa');
        console.log('Tenemos data en la promesa');
      }, 3000);
  });

}

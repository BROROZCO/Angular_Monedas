import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRAS'];
  constructor() { }

  ngOnInit(): void {
  }

  convertir()
  {
    switch(this.tengo)
    {
      case 'USD':
        // TODO
        if(this.quiero === 'USD')
        {
          this.total = this.cantidad;
        }

        if(this.quiero === 'EUR')
        {
          this.total = parseFloat((this.cantidad * 0.81).toFixed(5));
          
        }

        if(this.quiero === 'LIBRAS')
        {
          this.total = parseFloat((this.cantidad * 0.74).toFixed(5));
        }
        break;

      case 'EUR':
        // TODO

        if(this.quiero === 'USD')
        {
          this.total = parseFloat((this.cantidad * 1.23).toFixed(5));
        }

        if(this.quiero === 'EUR')
        {
          this.total = this.cantidad;
        }

        if(this.quiero === 'LIBRAS')
        {
          this.total = parseFloat((this.cantidad * 0.90).toFixed(5));
        }
        break;

      case 'LIBRAS':
        // TODO
        if(this.quiero === 'USD')
        {
          this.total = parseFloat((this.cantidad * 1.36).toFixed(5));
        }

        if(this.quiero === 'EUR')
        {
          this.total = parseFloat((this.cantidad * 1.11).toFixed(5));
        }

        if(this.quiero === 'LIBRAS')
        {
          this.total = this.cantidad;
        }
      break;
    }
  }

}

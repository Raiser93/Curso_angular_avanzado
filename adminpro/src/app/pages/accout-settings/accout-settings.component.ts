import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(color: string, link) {
    this.aplicarCheck(link);
    const url = `assets/css/colors/${color}.css`;
    this._document.getElementById(`tema`).setAttribute('href', url);

    this._ajustes.ajustes.tema = color;
    this._ajustes.ajustes.temaUrl = url;
    this._ajustes.guardarAjustes();
  }

  aplicarCheck(link) {
    const w = document.getElementsByClassName('working')[0];
    if (w) {
      w.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    let w: any = document.getElementsByClassName('working')[0];
    if (w) {
      w.classList.remove('working');
    }
    const tema = this._ajustes.ajustes.tema;
    w = document.getElementsByClassName('selector');
    for (const ref of w ) {
      if (ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}

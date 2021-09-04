import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');
  // private links!: NodeListOf<Element>; // !: --> se afirma que es de este tipo

  // PageComponent
  constructor() {
    // Si no existe en la url, poner valor por defecto. Esto es por operador '||'
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

   // Funcion para cambiar el color del tema de la pagina - settingComponent
   changeTheme( theme: string ){
    const url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  
  // Funcion para poner el check en color seleccionado - settingComponent
  // Usar este servicio cuando las NodeList son pocas, sino recibir estas listas
  // por parametro desde el componente
  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');
    links.forEach( element => {

      element.classList.remove('working'); // Borrar si la tiene por defecto
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl =  `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        element.classList.add('working');
      }

    })
  }
}

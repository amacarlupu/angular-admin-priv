import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.settingService.checkCurrentTheme();
  }

  // Funcion para cambiar el color del tema de la pagina
  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
  }

}

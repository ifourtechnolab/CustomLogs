import { Component } from '@angular/core';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private logsService: LogsService) { }

  async btnClicked() {
    await this.logsService.createAccessLogFileAndWrite('Log file create');
    await this.logsService.createAccessLogFileAndWrite('done');
  }
}

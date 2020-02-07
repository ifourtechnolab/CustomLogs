import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable()
export class LogsService {

  constructor(private file: File) { }

  async createAccessLogFileAndWrite(text: string) {
    await this.file.checkFile(this.file.dataDirectory, 'access.log').then(async doesExist => {
      console.log('doesExist : ' + doesExist);
      return await this.writeToAccessLogFile(text);
    }).catch(() => {
      return this.file.createFile(this.file.dataDirectory, 'access.log', false)
        .then(async () => await this.writeToAccessLogFile(text))
        .catch(err => console.log('Could not create file', JSON.stringify(err)));
    });
  }

  async writeToAccessLogFile(text: string) {
    await this.file.writeFile(this.file.dataDirectory, 'access.log', text + '\n', { append: true, replace: false });
  }
}

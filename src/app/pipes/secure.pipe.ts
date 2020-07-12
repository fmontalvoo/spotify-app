import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secure'
})
export class SecurePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(path: string, url: string): any {
    let args: string[] = path.split(':');
    path = `${args[1]}/${args[2]}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + path);
  }


}

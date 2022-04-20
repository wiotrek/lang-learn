import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// unnecessary to replace languages
export function HttpLoaderFactory(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/locales/', suffix: '.json' }
  ]);
}

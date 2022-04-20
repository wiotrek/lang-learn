import { Injectable, Optional, SkipSelf } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationConfigService } from 'src/app/core/internationalization/_services/localization-config.service';

export const LanguagesDirectory: { [key: string]: string } = {
  en: 'en-US',
  pl: 'pl-PL'
};

// Class representing the translation service
@Injectable()
export class LocalizationService {
  private localeId = 'en-US'; // default

  constructor(
    @Optional() @SkipSelf() private singleton: LocalizationService,
    private config: LocalizationConfigService,
    private translateService: TranslateService
  ) {
    if (this.singleton) {
      throw new Error(
        'LocalizationService is already provided by the root module'
      );
    }
    this.localeId = this.config.localeId;
  }

  initService(): Promise<void> {
    const browserLang = this.translateService.getBrowserLang();

    this.localeId = localStorage.getItem('language')
      ? localStorage.getItem('language') ?? 'en-US'
      // @ts-ignore
      : LanguagesDirectory[browserLang];

    localStorage.setItem('language', this.localeId);
    return this.useLanguage(this.localeId);
  }

  useLanguage(lang: string): Promise<void> {
    this.translateService.setDefaultLang(lang);
    return this.translateService
      .use(lang)
      .toPromise()
      .catch(() => {
        throw new Error('LocalizationService.init failed');
      });
  }

  translate(key: string | string[], interpolateParams?: object): string {
    return this.translateService.instant(key, interpolateParams) as string;
  }
}

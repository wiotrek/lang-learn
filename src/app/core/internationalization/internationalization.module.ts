import { APP_INITIALIZER, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizationConfigService } from 'src/app/core/internationalization/_services/localization-config.service';
import { LocalizationService } from 'src/app/core/internationalization/_services/localization.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild()
  ],
  exports: [TranslateModule]
})
export class InternationalizationModule {
  public static forRoot(config: any): ModuleWithProviders<InternationalizationModule> {
    return {
      ngModule: InternationalizationModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: initLocalizationService,
          deps: [LocalizationService],
          multi: true
        },
        LocalizationService,
        { provide: LOCALE_ID, useValue: config.locale_id }, // using the initial value
        { provide: LocalizationConfigService, useValue: config }
      ]
    };
  }
}

export function initLocalizationService(service: LocalizationService): any {
  return () => service.initService();
}

import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { InternationalizationModule } from "./internationalization/internationalization.module";
import { HttpClient } from "@angular/common/http";
import { HttpLoaderFactory } from "./internationalization/_helpers/http-loader-factory.helper";

@NgModule({
  imports: [
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class CoreModule {}

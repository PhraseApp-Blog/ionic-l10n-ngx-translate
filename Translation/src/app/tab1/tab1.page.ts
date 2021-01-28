import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  language: string = this.translateService.currentLang;

  constructor(private translateService: TranslateService) {}

  languageChange() {
    this.translateService.use(this.language);
  }
}

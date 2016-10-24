import {Pipe, PipeTransform, OnInit} from '@angular/core'
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeScript, SafeStyle, SafeHtml} from '@angular/platform-browser';
import * as services from '../services/services'
import * as dal from '../dal/models'
@Pipe({
    name: 'translate',

})

export class TranslatePipe implements PipeTransform {
    translationFile = {
        "Noya Schleien": "נויה שליין",
        "Marimba & Percussion": "מרימבה וכלי הקשה",
        "Home": "בית",
        "Biography": "ביוגרפיה",
        "Pictures": "תמונות",
        "Videos": "וידאו",
        "Programs": "תכניות",
        "Links": "קישורים",
        "Contact": "יצירת קשר",
        "Hey Noya, I would like to get some details about your concerts. Please contact me": "שלום נויה, אנא צרי עמי קשר על מנת לקבל פרטים אודות קונצרט",
        "Name": "שם",
        "Email": "אי-מייל",
        "Content": "תוכן",
        "Order Concert": "הזמנת קונצרט"


    };

    constructor(private translationService: services.TranslationService, private cacheManager: services.CacheManager) {

    }
    transform(value: string): string {
        //console.log(value);
        let res = this.translationService.TranlateItem(value);
        return res;
        //var lang = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
        //if (lang == 0) {
        //    return this.translationFile[value];


        //}
        //if (lang == 1) {
        //    return value;
        //}
    }
}


@Pipe({
    name: 'safeResource',

})

export class SafeResourcePipe implements PipeTransform {


    constructor(private dataService: services.DataService, private cacheManager: services.CacheManager, public sanitizer: DomSanitizer) {

    }
    transform(value: string): SafeHtml {
        //console.log(value);

        return this.sanitizer.bypassSecurityTrustHtml(value);



    }
}



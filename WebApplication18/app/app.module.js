import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { Home } from "./Home/home";
import { Calendar } from './Home/calendar';
import { Updates } from './Home/updates';
import { Press } from './Home/press';
import { Biography } from "./Biography/biography";
import { Links } from "./Links/links";
import { Contact } from "./Contact/contact";
import { SharedModule } from './shared.module';
import { Programs } from "./Programs/programs";
import { Pictures } from "./Pictures/pictures";
import { Videos } from "./Videos/videos";
import { GaliluLink } from './galilu/link/link.component';
import { HeaderImage } from "./HeaderImage/header.image";
import * as pipes from './pipes/pipes';
import * as services from "./services/services";
import { pageNameService } from './services/page-name.service';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent, Home, Biography, Links, Contact, Programs, Pictures, Videos, HeaderImage, Calendar, Press, Press, Updates, pipes.SafeResourcePipe, GaliluLink],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        AppRoutingModule,
                        SharedModule
                    ],
                    providers: [pageNameService, services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title],
                    bootstrap: [AppComponent],
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map
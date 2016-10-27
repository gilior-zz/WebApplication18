import {NgModule} from '@angular/core'
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {AppRoutingModule} from './app.routes'
import {Home} from "./Home/home"
import {Calendar} from './Home/calendar'
import {Updates} from './Home/updates'
import {Press} from './Home/press'
import {Biography} from "./Biography/biography"
import {Links} from "./Links/links"
import {Contact} from "./Contact/contact"
import {Programs} from "./Programs/programs"
import {Pictures} from "./Pictures/pictures"
import {Videos} from "./Videos/videos"
import {KidsArt} from './kids-art/kids-art.component'
import {HeaderImage} from "./HeaderImage/header.image"
import * as pipes from './pipes/pipes'
import * as services from "./services/services"
import {BaseComponent} from './common/base.component'

@NgModule({
    declarations: [AppComponent, Home, Biography, Links, Contact, Programs, Pictures, Videos, HeaderImage, pipes.TranslatePipe, Calendar, Press, Press, pipes.SafeResourcePipe, KidsArt],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ],

    providers: [services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, Title],
    bootstrap: [AppComponent],
})
export class AppModule { }

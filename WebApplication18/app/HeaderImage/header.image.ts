import {Component, OnInit, ViewEncapsulation} from 'angular2/core'
import {Router} from 'angular2/router'
import * as services from '../services/services'
import * as dal from '../dal/models'
import * as pipes from '../pipes/pipes'

@Component({
    selector: 'header-image',
    template: require('./header.image.html!text'),

    inputs: ['ImageURL'],
    pipes: [pipes.TranslatePipe]
})

export class HeaderImage implements OnInit {

    ImageURL: string;
    constructor(private router: Router, private dataService: services.DataService) {
        router.subscribe((url) => {          
            // Current URL
            router.recognize(url).then((instruction) => {
                var currentPathName = instruction.component.componentType.name;

                var req: dal.MenuImageRequest = { Language: dal.Language.Hebrew, PathName: currentPathName };
                this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(
                    (res: dal.MenuImageResponse) => { this.ImageURL = res.ImageURL }
                )
            });
        });
    }

    ngOnInit() { }

}
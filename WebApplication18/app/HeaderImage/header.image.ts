import {Component, OnInit} from 'angular2/core'
import {Router} from 'angular2/router'
@Component({
    selector: 'header-image',
    template: require('./header.image.html!text')
})

export class HeaderImage {
    image: string;
    constructor(private router: Router) {
        router.subscribe((url) => {          
            // Current URL
            router.recognize(url).then((instruction) => {
                var currentPathName = instruction.component.componentType.name;
                //console.log(currentPathName);
                this.image = 'Content/Images/' + currentPathName + '.jpg';
            });
        });
    }
  
}
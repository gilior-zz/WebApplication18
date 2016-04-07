import {Component, OnInit, AfterViewInit, OnDestroy} from 'angular2/core'
import * as dal from '../dal/models'
import * as services from '../services/services'


@Component({
    template: require("./pictures.html!text"),

})

export class Pictures implements OnInit, AfterViewInit, OnDestroy {

    mainImagePath: string;
    images: dal.ImageGalleryItem[];
    imagesToolBarPathes: string[];
    bbb ='lime';


    ngOnDestroy() {

    }

    ngAfterViewInit() {



    }


    onLeft() {

        this.LoadRequestedImage(dal.NextData.Prev);
    }

    onKeyUp(event: KeyboardEvent) {
        console.log(event.keyCode);
        var nextData: dal.NextData = event.keyCode == 39 ? dal.NextData.Next : dal.NextData.Prev;
        this.LoadRequestedImage(nextData);
    }

    LoadRequestedImage(nextData: dal.NextData) {

        var currentImageID = this.cacheManager.GetFromCache('currentImageID', 1);

        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].ID == currentImageID) {
                var currentIndex = i;
                var nextIndex = i + 1;
                var prevIndex = i - 1;
                var isLastImage = nextIndex == this.images.length;
                var isFirstImage = prevIndex == -1;
                break;
            }
        }
        switch (nextData) {

            case dal.NextData.Next:

                if (isLastImage) {
                    this.mainImagePath = 'Content/Images/Gallery/' + this.images[0].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[0].ID);

                }
                else {
                    this.mainImagePath = 'Content/Images/Gallery/' + this.images[nextIndex].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[nextIndex].ID);

                }


                break;
            case dal.NextData.Prev:
                if (isFirstImage) {
                    this.mainImagePath = 'Content/Images/Gallery/' + this.images[this.images.length - 1].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[this.images.length - 1].ID);
                }
                else {
                    this.mainImagePath = 'Content/Images/Gallery/' + this.images[prevIndex].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[prevIndex].ID);
                }

                break;
            case dal.NextData.Currnet:
                this.mainImagePath = 'Content/Images/Gallery/' + this.images[currentIndex].ImageName;
                this.cacheManager.StoreInCache('currentImageID', this.images[currentIndex].ID);
                break;
        }


    }

    onRight() {
        this.LoadRequestedImage(dal.NextData.Next);
    }

    onSelectedImage(img: dal.ImageGalleryItem) {
        var currentImageID = img.ID;
        this.cacheManager.StoreInCache('currentImageID', currentImageID);
        this.LoadRequestedImage(dal.NextData.Currnet);
    }

    isSelected(img: dal.ImageGalleryItem): boolean {
        return this.cacheManager.GetFromCache('currentImageID', -1) == img.ID;
    }
    constructor(private dataService: services.DataService, private cacheManager: services.CacheManager) {
        this.mainImagePath = 'Content/Sources/loading.gif';

    }
    ngOnInit() {
        var currentImageID = this.cacheManager.GetFromCache('currentImageID', 1);

        var req: dal.ImageGalleryRequest = { CurrentImageID: currentImageID, Language: dal.Language.English, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.Single }
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(
            (res: dal.ImageGalleryResponse) => {
                this.mainImagePath = 'Content/Images/Gallery/' + res.Image.ImageName;
                console.log(this.mainImagePath);
                this.cacheManager.StoreInCache('currentImageID', res.Image.ID);

            },
            (err: dal.DataError) => { console.log(err.ErrorText); }
        );


        var req: dal.ImageGalleryRequest = { CurrentImageID: currentImageID, Language: dal.Language.English, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.All }
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(
            (res: dal.ImageGalleryResponse) => {
                this.images = res.Images;
            },
            (err: dal.DataError) => { console.log(err.ErrorText); }
        );
    }
}
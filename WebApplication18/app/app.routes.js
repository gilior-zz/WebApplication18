"use strict";
var router_1 = require('@angular/router');
var home_1 = require("./Home/home");
var biography_1 = require("./Biography/biography");
var links_1 = require("./Links/links");
var contact_1 = require("./Contact/contact");
var programs_1 = require("./Programs/programs");
var pictures_1 = require("./Pictures/pictures");
var videos_1 = require("./Videos/videos");
var appRoutes = [
    {
        path: "home",
        component: home_1.Home,
    },
    { path: "biography", component: biography_1.Biography },
    { path: "pictures", component: pictures_1.Pictures },
    { path: "videos", component: videos_1.Videos },
    { path: "programs", component: programs_1.Programs },
    { path: "links", component: links_1.Links },
    { path: "contact", component: contact_1.Contact },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map
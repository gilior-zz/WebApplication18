/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/Pictures/pictures';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import9 from '../../../app/services/services';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from '@angular/core/src/security';
export var Wrapper_Pictures = (function () {
    function Wrapper_Pictures(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.Pictures(p0, p1, p2, p3, p4);
    }
    Wrapper_Pictures.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Pictures.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_Pictures.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Pictures.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Pictures.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Pictures.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.headImageUpdate.subscribe(_eventHandler.bind(view, 'headImageUpdate')));
        }
    };
    return Wrapper_Pictures;
}());
var renderType_Pictures_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Pictures_Host0 = (function (_super) {
    __extends(View_Pictures_Host0, _super);
    function View_Pictures_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Pictures_Host0, renderType_Pictures_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Pictures_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Pictures0(this.viewUtils, this, 0, this._el_0);
        this._Pictures_0_3 = new Wrapper_Pictures(this.injectorGet(import8.DomSanitizer, this.parentIndex), this.injectorGet(import9.DataService, this.parentIndex), this.injectorGet(import9.CacheManager, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex), this.injector(0));
        this.compView_0.create(this._Pictures_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Pictures_0_3.context);
    };
    View_Pictures_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Pictures) && (0 === requestNodeIndex))) {
            return this._Pictures_0_3.context;
        }
        return notFoundResult;
    };
    View_Pictures_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Pictures_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Pictures_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_Pictures_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Pictures_0_3.ngOnDestroy();
    };
    View_Pictures_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Pictures_Host0;
}(import1.AppView));
export var PicturesNgFactory = new import7.ComponentFactory('ng-component', View_Pictures_Host0, import0.Pictures);
var styles_Pictures = [];
var renderType_Pictures = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Pictures, {});
export var View_Pictures0 = (function (_super) {
    __extends(View_Pictures0, _super);
    function View_Pictures0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Pictures0, renderType_Pictures, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_59 = import6.UNINITIALIZED;
    }
    View_Pictures0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'swiper-container hidden-lg hidden-md hidden-sm'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_4 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'swiper-wrapper'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_7 = this.renderer.createText(this._el_5, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_8 = new import11.ViewContainer(8, 5, this, this._anchor_8);
        this._TemplateRef_8_5 = new import14.TemplateRef_(this, 8, this._anchor_8);
        this._NgFor_8_6 = new import12.Wrapper_NgFor(this._vc_8.vcRef, this._TemplateRef_8_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_9 = this.renderer.createText(this._el_5, '\n\n    ', null);
        this._text_10 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'swiper-button-prev'), null);
        this._text_15 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'swiper-button-next'), null);
        this._text_17 = this.renderer.createText(this._el_2, '\n\n\n', null);
        this._text_18 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_19 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'black-panel hidden-xs', 'id', ''), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'outer-image-div'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n        ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_23 = new import11.ViewContainer(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import14.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import13.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_21, '\n        ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_25 = new import11.ViewContainer(25, 21, this, this._anchor_25);
        this._TemplateRef_25_5 = new import14.TemplateRef_(this, 25, this._anchor_25);
        this._NgIf_25_6 = new import13.Wrapper_NgIf(this._vc_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_21, '\n        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'col-sm-10   text-center main-image'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._text_29 = this.renderer.createText(this._el_21, '\n        ', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_30 = new import11.ViewContainer(30, 21, this, this._anchor_30);
        this._TemplateRef_30_5 = new import14.TemplateRef_(this, 30, this._anchor_30);
        this._NgIf_30_6 = new import13.Wrapper_NgIf(this._vc_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(this._el_21, '\n        ', null);
        this._anchor_32 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_32 = new import11.ViewContainer(32, 21, this, this._anchor_32);
        this._TemplateRef_32_5 = new import14.TemplateRef_(this, 32, this._anchor_32);
        this._NgIf_32_6 = new import13.Wrapper_NgIf(this._vc_32.vcRef, this._TemplateRef_32_5);
        this._text_33 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_19, '\n    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'tool-strip '), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n        ', null);
        this._anchor_37 = this.renderer.createTemplateAnchor(this._el_35, null);
        this._vc_37 = new import11.ViewContainer(37, 35, this, this._anchor_37);
        this._TemplateRef_37_5 = new import14.TemplateRef_(this, 37, this._anchor_37);
        this._NgFor_37_6 = new import12.Wrapper_NgFor(this._vc_37.vcRef, this._TemplateRef_37_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.ref);
        this._text_38 = this.renderer.createText(this._el_35, '\n    ', null);
        this._text_39 = this.renderer.createText(this._el_19, '\n\n', null);
        this._text_40 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._anchor_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._anchor_37,
            this._text_38,
            this._text_39,
            this._text_40
        ]), null);
        return null;
    };
    View_Pictures0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import16.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === import14.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import17.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import14.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import17.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import14.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import17.NgIf) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        if (((token === import14.TemplateRef) && (32 === requestNodeIndex))) {
            return this._TemplateRef_32_5;
        }
        if (((token === import17.NgIf) && (32 === requestNodeIndex))) {
            return this._NgIf_32_6.context;
        }
        if (((token === import14.TemplateRef) && (37 === requestNodeIndex))) {
            return this._TemplateRef_37_5;
        }
        if (((token === import16.NgFor) && (37 === requestNodeIndex))) {
            return this._NgFor_37_6.context;
        }
        return notFoundResult;
    };
    View_Pictures0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = this.context.images;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_23_0_0 = this.context.isEnglish;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        var currVal_25_0_0 = this.context.isHebrew;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        var currVal_30_0_0 = this.context.isEnglish;
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        var currVal_32_0_0 = this.context.isHebrew;
        this._NgIf_32_6.check_ngIf(currVal_32_0_0, throwOnChange, false);
        this._NgIf_32_6.ngDoCheck(this, this._anchor_32, throwOnChange);
        var currVal_37_0_0 = this.context.images;
        this._NgFor_37_6.check_ngForOf(currVal_37_0_0, throwOnChange, false);
        this._NgFor_37_6.ngDoCheck(this, this._anchor_37, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
        this._vc_32.detectChangesInNestedViews(throwOnChange);
        this._vc_37.detectChangesInNestedViews(throwOnChange);
        var currVal_59 = this.context.mainImagePath;
        if (import3.checkBinding(throwOnChange, this._expr_59, currVal_59)) {
            this.renderer.setElementStyle(this._el_27, 'background-image', ((this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE, currVal_59) == null) ? null : this.viewUtils.sanitizer.sanitize(import18.SecurityContext.STYLE, currVal_59).toString()));
            this._expr_59 = currVal_59;
        }
    };
    View_Pictures0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
        this._vc_23.destroyNestedViews();
        this._vc_25.destroyNestedViews();
        this._vc_30.destroyNestedViews();
        this._vc_32.destroyNestedViews();
        this._vc_37.destroyNestedViews();
    };
    View_Pictures0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_Pictures1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 23)) {
            return new View_Pictures2(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        if ((nodeIndex == 25)) {
            return new View_Pictures3(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        if ((nodeIndex == 30)) {
            return new View_Pictures4(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        if ((nodeIndex == 32)) {
            return new View_Pictures5(this.viewUtils, this, 32, this._anchor_32, this._vc_32);
        }
        if ((nodeIndex == 37)) {
            return new View_Pictures6(this.viewUtils, this, 37, this._anchor_37, this._vc_37);
        }
        return null;
    };
    return View_Pictures0;
}(import1.AppView));
var View_Pictures1 = (function (_super) {
    __extends(View_Pictures1, _super);
    function View_Pictures1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures1, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import6.UNINITIALIZED;
        this._expr_5 = import6.UNINITIALIZED;
        this._expr_6 = import6.UNINITIALIZED;
    }
    View_Pictures1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'swiper-slide'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'img', new import3.InlineArray4(4, 'class', 'img-responsive swiper-slide', 'height', '100'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_Pictures1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = this.context.$implicit.ID;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.$implicit.ImageURL;
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementProperty(this._el_2, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_5));
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.parentView.context.isSelected(this.context.$implicit);
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'thumbnail-selected', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    View_Pictures1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onSelectedImage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures1;
}(import1.AppView));
var View_Pictures2 = (function (_super) {
    __extends(View_Pictures2, _super);
    function View_Pictures2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures2, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import6.UNINITIALIZED;
    }
    View_Pictures2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'left-filler  col-sm-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-hand-left switch-image-glyphicon left-arrow'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_Pictures2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = (this.parentView.context.mainImagePath == null);
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_Pictures2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onLeft() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures2;
}(import1.AppView));
var View_Pictures3 = (function (_super) {
    __extends(View_Pictures3, _super);
    function View_Pictures3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures3, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Pictures3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'right-filler   col-sm-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-hand-right switch-image-glyphicon right-arrow'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_Pictures3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onRight() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures3;
}(import1.AppView));
var View_Pictures4 = (function (_super) {
    __extends(View_Pictures4, _super);
    function View_Pictures4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures4, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_Pictures4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'right-filler  col-sm-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-hand-right switch-image-glyphicon right-arrow float-right'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_Pictures4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures4.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onRight() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures4;
}(import1.AppView));
var View_Pictures5 = (function (_super) {
    __extends(View_Pictures5, _super);
    function View_Pictures5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures5, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_4 = import6.UNINITIALIZED;
    }
    View_Pictures5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'left-filler   col-sm-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon float-left glyphicon-hand-left switch-image-glyphicon left-arrow'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_Pictures5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4 = (this.parentView.context.mainImagePath == null);
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_Pictures5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onLeft() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures5;
}(import1.AppView));
var View_Pictures6 = (function (_super) {
    __extends(View_Pictures6, _super);
    function View_Pictures6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Pictures6, renderType_Pictures, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_1 = import6.UNINITIALIZED;
        this._expr_2 = import6.UNINITIALIZED;
        this._expr_3 = import6.UNINITIALIZED;
    }
    View_Pictures6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray4(4, 'class', 'img-thumbnail', 'height', '100'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_Pictures6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit.ID;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'id', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.$implicit.ImageURL;
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL, currVal_2));
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.parentView.context.isSelected(this.context.$implicit);
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_0, 'thumbnail-selected', currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_Pictures6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Pictures6.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onSelectedImage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_Pictures6;
}(import1.AppView));
//# sourceMappingURL=pictures.ngfactory.js.map
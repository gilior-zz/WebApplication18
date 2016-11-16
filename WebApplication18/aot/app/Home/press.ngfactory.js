/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('../../../app/Home/press');
var import1 = require('@angular/core/src/linker/view');
var import3 = require('@angular/core/src/linker/view_utils');
var import4 = require('@angular/core/src/metadata/view');
var import5 = require('@angular/core/src/linker/view_type');
var import6 = require('@angular/core/src/change_detection/change_detection');
var import7 = require('@angular/core/src/linker/component_factory');
var import8 = require('../../../app/services/services');
var import9 = require('@angular/core/src/linker/view_container');
var import10 = require('../../node_modules/@angular/common/src/directives/ng_for.ngfactory');
var import11 = require('@angular/core/src/linker/template_ref');
var import12 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import13 = require('@angular/common/src/directives/ng_for');
var import14 = require('@angular/core/src/security');
var Wrapper_Press = (function () {
    function Wrapper_Press(p0) {
        this._changed = false;
        this.context = new import0.Press(p0);
    }
    Wrapper_Press.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Press.prototype.ngOnDestroy = function () {
    };
    Wrapper_Press.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Press.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Press.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Press.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Press;
}());
exports.Wrapper_Press = Wrapper_Press;
var renderType_Press_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_Press_Host0 = (function (_super) {
    __extends(View_Press_Host0, _super);
    function View_Press_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Press_Host0, renderType_Press_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Press_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'noya-press', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Press0(this.viewUtils, this, 0, this._el_0);
        this._Press_0_3 = new Wrapper_Press(this.injectorGet(import8.DataService, this.parentIndex));
        this.compView_0.create(this._Press_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Press_0_3.context);
    };
    View_Press_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Press) && (0 === requestNodeIndex))) {
            return this._Press_0_3.context;
        }
        return notFoundResult;
    };
    View_Press_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Press_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Press_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_Press_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Press_Host0;
}(import1.AppView));
exports.PressNgFactory = new import7.ComponentFactory('noya-press', View_Press_Host0, import0.Press);
var styles_Press = [];
var renderType_Press = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_Press, {});
var View_Press0 = (function (_super) {
    __extends(View_Press0, _super);
    function View_Press0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Press0, renderType_Press, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_Press0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import11.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import10.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.injectorGet(import12.IterableDiffers, this.parentIndex), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_Press0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_Press0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.pressItems;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_Press0.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_Press0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_Press1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_Press0;
}(import1.AppView));
exports.View_Press0 = View_Press0;
var View_Press1 = (function (_super) {
    __extends(View_Press1, _super);
    function View_Press1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_Press1, renderType_Press, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_1 = import6.UNINITIALIZED;
    }
    View_Press1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_Press1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit.Text;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_Press1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Press1;
}(import1.AppView));
//# sourceMappingURL=press.ngfactory.js.map
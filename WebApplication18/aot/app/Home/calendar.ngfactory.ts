/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../app/Home/calendar';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/services/services';
import * as import9 from '@angular/common/src/pipes/date_pipe';
import * as import10 from '@angular/core/src/i18n/tokens';
import * as import11 from '@angular/core/src/security';
export class Wrapper_Calendar {
  /*private*/ _eventHandler:Function;
  context:import0.Calendar;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.Calendar(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Calendar_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_Calendar_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.Calendar>;
  _Calendar_0_3:Wrapper_Calendar;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Calendar_Host0,renderType_Calendar_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'noya-calendar',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Calendar0(this.viewUtils,this,0,this._el_0);
    this._Calendar_0_3 = new Wrapper_Calendar(this.injectorGet(import8.DataService,this.parentIndex),this.injectorGet(import8.CacheManager,this.parentIndex));
    this.compView_0.create(this._Calendar_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._Calendar_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Calendar) && (0 === requestNodeIndex))) { return this._Calendar_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Calendar_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CalendarNgFactory:import7.ComponentFactory<import0.Calendar> = new import7.ComponentFactory<import0.Calendar>('noya-calendar',View_Calendar_Host0,import0.Calendar);
const styles_Calendar:any[] = ([] as any[]);
var renderType_Calendar:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_Calendar,{});
export class View_Calendar0 extends import1.AppView<import0.Calendar> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  /*private*/ _expr_13:any;
  _pipe_date_0:import9.DatePipe;
  _pipe_date_0_0:any;
  _pipe_date_0_1:any;
  /*private*/ _expr_17:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Calendar0,renderType_Calendar,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_13 = import6.UNINITIALIZED;
    this._expr_17 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','calendar-date text-center left-to-right'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'span',new import3.InlineArray4(4,'aria-hidden','true','class','glyphicon glyphicon-arrow-left'),(null as any));
    this._text_6 = this.renderer.createText(this._el_3,'',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_3,'span',new import3.InlineArray4(4,'aria-hidden','true','class','glyphicon glyphicon-arrow-right'),(null as any));
    this._text_8 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','calendar-data'),(null as any));
    this._text_11 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_12 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    this._pipe_date_0 = new import9.DatePipe(this.parentView.injectorGet(import10.LOCALE_ID,this.parentIndex));
    this._pipe_date_0_0 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
    this._pipe_date_0_1 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import6.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_13:any = import3.inlineInterpolate(2,'\n        ',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0,this._pipe_date_0.transform)(this.context.dataDate,'MM')),'/',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_1,this._pipe_date_0.transform)(this.context.dataDate,'yyyy')),'\n        ');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_13,currVal_13))) {
      this.renderer.setText(this._text_6,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_17:any = this.context.text;
    if (import3.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementProperty(this._el_10,'innerHTML',this.viewUtils.sanitizer.sanitize(import11.SecurityContext.HTML,currVal_17));
      this._expr_17 = currVal_17;
    }
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onLeft()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onRight()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
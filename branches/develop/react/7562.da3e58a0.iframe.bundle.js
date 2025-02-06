"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[7562],{"../web-components/dist/esm/close-icon-539ec8d1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>closeIcon});var closeIcon='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},"../web-components/dist/esm/ic-alert.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_alert:()=>Alert});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../web-components/dist/esm/close-icon-539ec8d1.js"),_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-003f27c9.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var Alert=function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function Alert(hostRef){var _this=this;!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Alert),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.dismiss=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"dismiss",7),this.icDismiss=(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"icDismiss",7),this.hostMutationObserver=null,this.dismissAction=function(){_this.dismiss.emit(),_this.icDismiss.emit()},this.alertTitleWrap=!1,this.visible=!0,this.announced=!0,this.dismissible=!1,this.heading="",this.message=void 0,this.titleAbove=!1,this.variant="neutral",this.showDefaultIcon=!0}),[{key:"disconnectedCallback",value:function disconnectedCallback(){var _a;null===(_a=this.hostMutationObserver)||void 0===_a||_a.disconnect()}},{key:"componentDidLoad",value:function componentDidLoad(){var _this2=this;this.alertTitleShouldWrap(),this.hostMutationObserver=new MutationObserver((function(mutationList){return(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.k)(mutationList,"action",_this2)})),this.hostMutationObserver.observe(this.el,{childList:!0})}},{key:"handleClick",value:function handleClick(){this.visible=!this.visible}},{key:"alertTitleShouldWrap",value:function alertTitleShouldWrap(){var _a;(null===(_a=this.el.shadowRoot.querySelector(".alert-title"))||void 0===_a?void 0:_a.clientHeight)>24&&(this.alertTitleWrap=!0)}},{key:"render",value:function render(){var variant=this.variant,heading=this.heading,message=this.message,titleAbove=this.titleAbove,dismissible=this.dismissible,announced=this.announced,visible=this.visible,showDefaultIcon=this.showDefaultIcon;return visible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:announced?"alert":null,class:_defineProperty({},_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark,!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"container",!0),"container-".concat(variant),!0)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-icon-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"divider",!0),"divider-".concat(variant),!0)}),"neutral"===variant?(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"neutral-icon")?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-icon svg-container icon-neutral"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"neutral-icon"})):showDefaultIcon?(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:_defineProperty(_defineProperty(_defineProperty({},"alert-icon",!0),"svg-container",!0),"icon-".concat(variant),!0),innerHTML:_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.V[variant].icon}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icon-placeholder"}):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:_defineProperty(_defineProperty(_defineProperty({},"alert-icon",!0),"svg-container",!0),"icon-".concat(variant),!0),innerHTML:_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.V[variant].icon})),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-content"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:_defineProperty(_defineProperty({},"alert-message",!0),"alert-message-title-above",titleAbove||this.alertTitleWrap)},heading&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{class:_defineProperty(_defineProperty({},"alert-title",!0),"alert-title-above",titleAbove||this.alertTitleWrap),variant:"subtitle-large"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("p",null,heading)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"message"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"body"},message))),(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.i)(this.el,"action")&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"alert-action-container"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"action"}))),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"dismiss-icon-container"},dismissible&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-button",{class:_defineProperty(_defineProperty({},"svg-container",!0),"dismiss-icon",!0),innerHTML:_close_icon_539ec8d1_js__WEBPACK_IMPORTED_MODULE_3__.c,onClick:this.dismissAction,variant:"icon",appearance:_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.I.Dark,title:"dismiss"}))))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}])}();Alert.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}.container{min-height:3.5rem;border-radius:var(--ic-border-radius);position:relative;display:flex;align-items:center}.container-neutral{background-color:var(--ic-status-unknown-light)}.container-info{background-color:var(--ic-status-info-light)}.container-warning{background-color:var(--ic-status-warning-light)}.container-error{background-color:var(--ic-status-error-light)}.container-success{background-color:var(--ic-status-success-light)}.alert-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs);position:absolute}.divider-neutral{background-color:var(--ic-status-unknown)}.divider-info{background-color:var(--ic-status-info)}.divider-warning{background-color:var(--ic-status-warning)}.divider-error{background-color:var(--ic-status-error)}.divider-success{background-color:var(--ic-status-success)}.alert-icon{height:var(--ic-space-lg);width:1.375rem;margin-left:1.125rem}.icon-placeholder{margin-left:var(--ic-space-xs)}.alert-icon>svg{height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block}:host([showdefaulticon="false"]) .icon-neutral{visibility:hidden;width:0;margin-left:0.625rem}.icon-neutral>svg,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block;fill:var(--ic-status-unknown)}:host([variant="info"]) .alert-icon svg{fill:var(--ic-status-info)}:host([variant="warning"]) .alert-icon svg{fill:var(--ic-status-warning)}:host([variant="error"]) .alert-icon svg{fill:var(--ic-status-error)}:host([variant="success"]) .alert-icon svg{fill:var(--ic-status-success)}.alert-content{display:flex;align-items:center;margin-left:0.625rem;width:100%}.alert-message{display:flex;align-items:center;padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0;flex:1}.alert-message-title-above{display:inline}.alert-title{margin-right:var(--ic-space-xs)}.alert-title-above{white-space:normal}.alert-action-container{margin-right:var(--ic-space-xs);display:flex;align-items:center}.dismiss-icon{margin-right:var(--ic-space-xxxs);margin-left:-0.375rem;padding:0.375rem;border:none;border-radius:50%;background-color:inherit;display:flex;align-items:center;justify-content:center}.dismiss-icon:hover{cursor:pointer}@media (max-width: 628px){.alert-content{display:flex;flex-direction:column;align-items:flex-start}.alert-message{display:flex;flex-direction:column;align-items:flex-start}.alert-title{white-space:normal}.alert-action-container{margin-bottom:var(--ic-space-xs)}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}'}}]);
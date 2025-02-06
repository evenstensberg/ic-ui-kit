"use strict";(self.webpackChunk_ukic_react=self.webpackChunk_ukic_react||[]).push([[3842],{"../web-components/dist/esm/ic-input-label_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ic_input_label:()=>InputLabel,ic_input_validation:()=>InputValidation});var _index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../web-components/dist/esm/index-d1d2c456.js"),_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../web-components/dist/esm/helpers-003f27c9.js"),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../web-components/dist/esm/types-6f6b41a5.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var InputLabel=function(){return _createClass((function InputLabel(hostRef){_classCallCheck(this,InputLabel),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.appearance="default",this.dark=!1,this.disabled=!1,this.error=!1,this.for=void 0,this.helperText="",this.hideLabel=!1,this.label=void 0,this.readonly=!1,this.required=!1}),[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.label,propName:"label"}],"Input Label")}},{key:"render",value:function render(){var disabled=this.disabled,readonly=this.readonly,label=this.label,required=this.required,helperText=this.helperText,hideLabel=this.hideLabel,error=this.error,dark=this.dark,appearance=this.appearance,labelText=required?label+" *":label,labelContent=readonly?"".concat(labelText):(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.for},labelText),id=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.S)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty(_defineProperty({},"disabled",disabled),"readonly",readonly),"with-helper",""!==helperText)},!hideLabel&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"label",class:_defineProperty(_defineProperty(_defineProperty({},"readonly-label",readonly),"error-label",error&&!(readonly||disabled)),"dark",dark||"dark"===appearance)},labelContent),""!==helperText&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:_defineProperty(_defineProperty(_defineProperty({},"helpertext",!0),"helpertext-normal",!disabled&&!readonly),"helpertext-readonly",readonly)},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{id},helperText)))}}])}();InputLabel.style="ic-input-label{margin-bottom:var(--ic-space-xs)}ic-input-label.with-helper{margin-bottom:var(--ic-space-xxxs)}ic-input-label.readonly{color:var(--ic-color-tertiary-text)}ic-input-label .helpertext{margin-top:var(--ic-space-xxxs);padding-bottom:var(--ic-input-label-helpertext-padding, 0)}ic-input-label .helpertext-normal{color:var(--ic-color-secondary-text)}ic-input-label .helpertext-readonly{color:var(--ic-color-tertiary-text)}ic-input-label .readonly-label{color:var(--ic-color-secondary-text)}ic-input-label .error-label{color:var(--ic-status-error)}ic-input-label .dark{color:var(--ic-architectural-white)}";var icon=_defineProperty(_defineProperty(_defineProperty({},_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Warning,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.U),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Error,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.X),_types_6f6b41a5_js__WEBPACK_IMPORTED_MODULE_2__.a.Success,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.Q),InputValidation=function(){return _createClass((function InputValidation(hostRef){_classCallCheck(this,InputValidation),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.ariaLiveMode="polite",this.for=void 0,this.fullWidth=!1,this.message=void 0,this.status=""}),[{key:"componentDidLoad",value:function componentDidLoad(){(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.a)([{prop:this.message,propName:"message"}],"Input Validation")}},{key:"render",value:function render(){var displayIcon=""!==this.status?icon[this.status]:"",id=(0,_helpers_003f27c9_js__WEBPACK_IMPORTED_MODULE_1__.T)(this.for);return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:_defineProperty(_defineProperty({},this.status,""!==this.status),"fullwidth",this.fullWidth)},""!==displayIcon&&(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:_defineProperty(_defineProperty({},"status-icon",!0),"icon-".concat(this.status),!0),innerHTML:displayIcon}),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("ic-typography",{variant:"caption",class:"statustext"},(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"aria-live":this.ariaLiveMode,id},this.message)),(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"validation-message-adornment"}))}},{key:"el",get:function get(){return(0,_index_d1d2c456_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}}])}();InputValidation.style="ic-input-validation{width:var(--input-width, 20rem);margin-top:var(--ic-space-xs);display:flex}ic-input-validation.fullwidth{width:100%}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-status-success)}ic-input-validation span.icon-error>svg{fill:var(--ic-status-error)}ic-input-validation span.icon-warning>svg{fill:var(--ic-status-warning)}ic-input-validation .statustext{flex-grow:1}"}}]);
webpackJsonp([1],{183:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=t(0),u=t.n(l),c=t(8),s=t(10),p=t(184),A=t(52),d=t(53),b=t(196),h=t.n(b),g=t(14),f=t(16),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),C=function(e){function n(){var e,t,i,l;o(this,n);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return t=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},i.inputChangedHandler=function(e,n){var t=Object(f.b)(i.state.controls,r({},n,Object(f.b)(i.state.controls[n],{value:e.target.value,valid:Object(f.a)(e.target.value,i.state.controls[n].validation),touched:!0})));i.setState({controls:t})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},l=t,a(i,l)}return i(n,e),m(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return u.a.createElement(p.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(r=u.a.createElement(d.a,null));var o=null;this.props.error&&(o=u.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=u.a.createElement(s.c,{to:this.props.authRedirectPath})),u.a.createElement("div",{className:h.a.Auth},a,o,u.a.createElement("form",{onSubmit:this.submitHandler},r,u.a.createElement(A.a,{btnType:"Success"},"Submit")),u.a.createElement(A.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"Switch To ",this.state.isSignup?"Sign In":"Sign Up"))}}]),n}(l.Component),v=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},x=function(e){return{onAuth:function(n,t,r){return e(g.b(n,t,r))},onSetAuthRedirectPath:function(){return e(g.j("/"))}}};n.default=Object(c.b)(v,x)(C)},184:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(185),i=t.n(a),l=function(e){var n=null,t=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push("classes.Invalid"),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=o.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Label},e.label),n)};n.a=l},185:function(e,n,t){var r=t(186);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(180)(r,o);r.locals&&(e.exports=r.locals)},186:function(e,n,t){n=e.exports=t(179)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/Neria/Front End/Projects/burger/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},196:function(e,n,t){var r=t(197);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(180)(r,o);r.locals&&(e.exports=r.locals)},197:function(e,n,t){n=e.exports=t(179)(!0),n.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__ContactData__2_pdI{width:500px}}","",{version:3,sources:["C:/Users/Neria/Front End/Projects/burger/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,0BACI,WAAa,CAChB,CACJ",file:"Auth.css",sourcesContent:[".Auth {\r\n    margin: 20px auto;\r\n    width: 80%;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n    .ContactData {\r\n        width: 500px;\r\n    }\r\n}"],sourceRoot:""}]),n.locals={Auth:"Auth__Auth__1TInt",ContactData:"Auth__ContactData__2_pdI"}}});
//# sourceMappingURL=1.3d949705.chunk.js.map
(function(e){function t(t){for(var n,a,l=t[0],r=t[1],c=t[2],d=0,h=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,l=1;l<o.length;l++){var r=o[l];0!==i[r]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},s=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=r;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1083:function(e,t,o){"use strict";o("c469")},4887:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),i={id:"appgrid"},s={key:0,class:"distance"},a={class:"imperial"},l={class:"metric"},r={key:1,class:"weight"},c={class:"imperial"},u={class:"metric"},d={key:2,class:"speed"},h={class:"scale"},p={key:3,class:"temperature"},m={class:"scale"},F={key:4,class:"time"},f={class:"scale"};function b(e,t,o,b,v,O){var x=Object(n["k"])("Dropdown"),j=Object(n["k"])("Unit");return Object(n["f"])(),Object(n["c"])("div",i,[Object(n["e"])("header",null,[Object(n["e"])(x,{options:v.options,onSelected:O.updateOption},null,8,["options","onSelected"])]),Object(n["e"])("main",null,["distance"===v.selectedOption.value?(Object(n["f"])(),Object(n["c"])("div",s,[Object(n["e"])("div",a,[Object(n["e"])(j,{label:"Miles",modelValue:v.mi,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.mi=e}),onInput:O.convertMiles},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Yards",modelValue:v.yd,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.yd=e}),onInput:O.convertYards},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Feet",modelValue:v.ft,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.ft=e}),onInput:O.convertFeet},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Inches",modelValue:v.inch,"onUpdate:modelValue":t[4]||(t[4]=function(e){return v.inch=e}),onInput:O.convertInches},null,8,["modelValue","onInput"])]),Object(n["e"])("div",l,[Object(n["e"])(j,{label:"Km",modelValue:v.km,"onUpdate:modelValue":t[5]||(t[5]=function(e){return v.km=e}),onInput:O.convertKilometers},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Meters",modelValue:v.m,"onUpdate:modelValue":t[6]||(t[6]=function(e){return v.m=e}),onInput:O.convertMeters},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Cm",modelValue:v.cm,"onUpdate:modelValue":t[7]||(t[7]=function(e){return v.cm=e}),onInput:O.convertCentimeters},null,8,["modelValue","onInput"])])])):Object(n["d"])("",!0),"weight"===v.selectedOption.value?(Object(n["f"])(),Object(n["c"])("div",r,[Object(n["e"])("div",c,[Object(n["e"])(j,{label:"Pounds",modelValue:v.lb,"onUpdate:modelValue":t[8]||(t[8]=function(e){return v.lb=e}),onInput:O.convertPounds},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Ounces",modelValue:v.oz,"onUpdate:modelValue":t[9]||(t[9]=function(e){return v.oz=e}),onInput:O.convertOunces},null,8,["modelValue","onInput"])]),Object(n["e"])("div",u,[Object(n["e"])(j,{label:"Kg",modelValue:v.kg,"onUpdate:modelValue":t[10]||(t[10]=function(e){return v.kg=e}),onInput:O.convertKilograms},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Grams",modelValue:v.g,"onUpdate:modelValue":t[11]||(t[11]=function(e){return v.g=e}),onInput:O.convertGrams},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Stone",modelValue:v.st,"onUpdate:modelValue":t[12]||(t[12]=function(e){return v.st=e}),onInput:O.convertStones},null,8,["modelValue","onInput"])])])):Object(n["d"])("",!0),"speed"===v.selectedOption.value?(Object(n["f"])(),Object(n["c"])("div",d,[Object(n["e"])("div",h,[Object(n["e"])(j,{label:"Mph",modelValue:v.mph,"onUpdate:modelValue":t[13]||(t[13]=function(e){return v.mph=e}),onInput:O.convertMPH},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Km / h",modelValue:v.kph,"onUpdate:modelValue":t[14]||(t[14]=function(e){return v.kph=e}),onInput:O.convertKPH},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Knots",modelValue:v.knots,"onUpdate:modelValue":t[15]||(t[15]=function(e){return v.knots=e}),onInput:O.convertKnots},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Mach",modelValue:v.mach,"onUpdate:modelValue":t[16]||(t[16]=function(e){return v.mach=e}),onInput:O.convertMach},null,8,["modelValue","onInput"])])])):Object(n["d"])("",!0),"temperature"===v.selectedOption.value?(Object(n["f"])(),Object(n["c"])("div",p,[Object(n["e"])("div",m,[Object(n["e"])(j,{label:"Fahrenheit",modelValue:v.f,"onUpdate:modelValue":t[17]||(t[17]=function(e){return v.f=e}),onInput:O.convertF},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Celcius",modelValue:v.c,"onUpdate:modelValue":t[18]||(t[18]=function(e){return v.c=e}),onInput:O.convertC},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Kelvin",modelValue:v.k,"onUpdate:modelValue":t[19]||(t[19]=function(e){return v.k=e}),onInput:O.convertK},null,8,["modelValue","onInput"])])])):Object(n["d"])("",!0),"time"===v.selectedOption.value?(Object(n["f"])(),Object(n["c"])("div",F,[Object(n["e"])("div",f,[Object(n["e"])(j,{label:"Years",modelValue:v.yr,"onUpdate:modelValue":t[20]||(t[20]=function(e){return v.yr=e}),onInput:O.convertYears},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Days",modelValue:v.day,"onUpdate:modelValue":t[21]||(t[21]=function(e){return v.day=e}),onInput:O.convertDays},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Hours",modelValue:v.hr,"onUpdate:modelValue":t[22]||(t[22]=function(e){return v.hr=e}),onInput:O.convertHours},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Minutes",modelValue:v.mn,"onUpdate:modelValue":t[23]||(t[23]=function(e){return v.mn=e}),onInput:O.convertMinutes},null,8,["modelValue","onInput"]),Object(n["e"])(j,{label:"Seconds",modelValue:v.sec,"onUpdate:modelValue":t[24]||(t[24]=function(e){return v.sec=e}),onInput:O.convertSeconds},null,8,["modelValue","onInput"])])])):Object(n["d"])("",!0)])])}o("b680"),o("b0c0");var v=Object(n["m"])("data-v-7181bcf7");Object(n["h"])("data-v-7181bcf7");var O={class:"title"},x=Object(n["e"])("div",{class:"arrow"},null,-1),j={key:0,class:"menu"};Object(n["g"])();var k=v((function(e,t,o,i,s,a){return Object(n["f"])(),Object(n["c"])("section",{class:"dropdown",onFocusout:t[2]||(t[2]=function(t){return e.showMenu=!1}),tabindex:"-1"},[Object(n["e"])("div",{class:"button",onClick:t[1]||(t[1]=function(t){return e.showMenu=!e.showMenu})},[Object(n["e"])("div",O,Object(n["l"])(e.selectedOption.name),1),x]),e.showMenu?(Object(n["f"])(),Object(n["c"])("div",j,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(o.options,(function(e,t){return Object(n["f"])(),Object(n["c"])("div",{class:"option",key:t,value:e.value,onClick:function(t){return a.optionClick(e)}},Object(n["l"])(e.name),9,["value","onClick"])})),128))])):Object(n["d"])("",!0)],32)})),V={name:"Dropdown",props:{options:Array,placeholder:String},data:function(){return{showMenu:!1,selectedOption:{}}},methods:{optionClick:function(e){this.selectedOption=e,this.$emit("selected",e),this.showMenu=!1},setDefaults:function(){this.options?this.placeholder?this.selectedOption={value:void 0,name:this.placeholder}:this.selectedOption=this.options[0]:this.selectedOption={value:void 0,name:"no options..."}}},mounted:function(){this.setDefaults()}};o("1083");V.render=k,V.__scopeId="data-v-7181bcf7";var y=V,g=Object(n["m"])("data-v-19bba9f6");Object(n["h"])("data-v-19bba9f6");var I={class:"item"};Object(n["g"])();var w=g((function(e,t,o,i,s,a){return Object(n["f"])(),Object(n["c"])("div",I,[Object(n["e"])("label",null,Object(n["l"])(o.label),1),Object(n["e"])("input",{type:"text",value:o.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["value"]),Object(n["j"])(e.$slots,"default")])})),M={name:"",props:["label","modelValue"],emits:["update:modelValue"],data:function(){return{title:""}},computed:{},methods:{},mounted:function(){}};o("f3ac");M.render=w,M.__scopeId="data-v-19bba9f6";var U=M,P={name:"App",components:{Dropdown:y,Unit:U},data:function(){return{options:[{value:"distance",name:"Distance"},{value:"weight",name:"Weight"},{value:"speed",name:"Speed"},{value:"temperature",name:"Temperature"},{value:"time",name:"Time"}],selectedOption:{},mi:1,yd:0,ft:0,inch:0,km:0,m:0,cm:0,lb:1,oz:0,kg:0,g:0,st:0,mph:1,kph:0,knots:0,mach:0,f:32,c:0,k:0,yr:1,day:0,hr:0,mn:0,sec:0}},methods:{updateOption:function(e){switch(this.selectedOption=e,this.selectedOption.value){case"distance":this.convertMiles();break;case"weight":this.convertPounds();break;case"speed":this.convertMPH();break;case"temperature":this.convertF();break;case"time":this.convertYears();break;default:}},convertFeet:function(){this.mi=parseFloat((18939e-8*this.ft).toFixed(2)),this.yd=parseFloat((.33333*this.ft).toFixed(2)),this.inch=parseFloat((12*this.ft).toFixed(2)),this.km=parseFloat((this.ft/3280.8).toFixed(2)),this.m=parseFloat((this.ft/3.2808).toFixed(2)),this.cm=parseFloat((this.ft/.032808).toFixed(2))},convertMeters:function(){this.mi=parseFloat((62137e-8*this.m).toFixed(2)),this.yd=parseFloat((1.0936*this.m).toFixed(2)),this.ft=parseFloat((3.2808*this.m).toFixed(2)),this.inch=parseFloat((39.37*this.m).toFixed(2)),this.km=parseFloat((this.m/1e3).toFixed(2)),this.cm=parseFloat((this.m/.01).toFixed(2))},convertInches:function(){this.mi=parseFloat((15783e-9*this.inch).toFixed(2)),this.yd=parseFloat((.027778*this.inch).toFixed(2)),this.ft=parseFloat((.083333*this.inch).toFixed(2)),this.km=parseFloat((this.inch/39370).toFixed(2)),this.m=parseFloat((this.inch/39.37).toFixed(2)),this.cm=parseFloat((this.inch/.3937).toFixed(2))},convertCentimeters:function(){this.mi=parseFloat((62137e-10*this.cm).toFixed(2)),this.yd=parseFloat((.010936*this.cm).toFixed(2)),this.ft=parseFloat((.032808*this.cm).toFixed(2)),this.inch=parseFloat((.3937*this.cm).toFixed(2)),this.km=parseFloat((this.cm/1e5).toFixed(2)),this.m=parseFloat((this.cm/100).toFixed(2))},convertYards:function(){this.mi=parseFloat((56818e-8*this.yd).toFixed(2)),this.ft=parseFloat((3*this.yd).toFixed(2)),this.inch=parseFloat((36*this.yd).toFixed(2)),this.km=parseFloat((this.yd/1093.6).toFixed(2)),this.m=parseFloat((this.yd/1.0936).toFixed(2)),this.cm=parseFloat((this.yd/.010936).toFixed(2))},convertKilometers:function(){this.mi=parseFloat((.62137*this.km).toFixed(2)),this.yd=parseFloat((1093.6*this.km).toFixed(2)),this.ft=parseFloat((3280.8*this.km).toFixed(2)),this.inch=parseFloat((39370*this.km).toFixed(2)),this.m=parseFloat((1e3*this.km).toFixed(2)),this.cm=parseFloat((1e5*this.km).toFixed(2))},convertMiles:function(){this.yd=parseFloat((1760*this.mi).toFixed(2)),this.ft=parseFloat((5280*this.mi).toFixed(2)),this.inch=parseFloat((63360*this.mi).toFixed(2)),this.km=parseFloat((this.mi/.62137).toFixed(2)),this.m=parseFloat((this.mi/62137e-8).toFixed(2)),this.cm=parseFloat((this.mi/62137e-10).toFixed(2))},convertPounds:function(){this.kg=parseFloat((this.lb/2.2046).toFixed(2)),this.oz=parseFloat((16*this.lb).toFixed(2)),this.g=parseFloat((this.lb/.0022046).toFixed(2)),this.st=parseFloat((.071429*this.lb).toFixed(2))},convertKilograms:function(){this.lb=parseFloat((2.2046*this.kg).toFixed(2)),this.oz=parseFloat((35.274*this.kg).toFixed(2)),this.g=parseFloat((1e3*this.kg).toFixed(2)),this.st=parseFloat((.1574*this.kg).toFixed(2))},convertOunces:function(){this.lb=parseFloat((.0625*this.oz).toFixed(2)),this.kg=parseFloat((this.oz/35.274).toFixed(2)),this.g=parseFloat((this.oz/.035274).toFixed(2)),this.st=parseFloat((.0044643*this.oz).toFixed(2))},convertGrams:function(){this.lb=parseFloat((.0022046*this.g).toFixed(2)),this.kg=parseFloat((this.g/1e3).toFixed(2)),this.oz=parseFloat((.035274*this.g).toFixed(2)),this.st=parseFloat((15747e-8*this.g).toFixed(2))},convertStones:function(){this.lb=parseFloat((14*this.st).toFixed(2)),this.kg=parseFloat((this.st/.15747).toFixed(2)),this.oz=parseFloat((224*this.st).toFixed(2)),this.g=parseFloat((this.st/15747e-8).toFixed(2))},convertMPH:function(){this.kph=parseFloat((1.609344*this.mph).toFixed(2)),this.mach=parseFloat((this.mph/761.207).toFixed(2)),this.knots=parseFloat((this.mph/1.150779).toFixed(2))},convertKPH:function(){this.mph=parseFloat((this.kph/1.609344).toFixed(2)),this.mach=parseFloat((this.kph/1225.044).toFixed(2)),this.knots=parseFloat((this.kph/1.852).toFixed(2))},convertKnots:function(){this.mph=parseFloat((1.150779*this.knots).toFixed(2)),this.kph=parseFloat((1.852*this.knots).toFixed(2)),this.mach=parseFloat((this.knots/661.4708).toFixed(2))},convertMach:function(){this.mph=parseFloat((761.207*this.mach).toFixed(2)),this.kph=parseFloat((1225.044*this.mach).toFixed(2)),this.knots=parseFloat((661.4708*this.mach).toFixed(2))},convertF:function(){this.c=parseFloat(((this.f-32)/1.8).toFixed(2)),this.k=parseFloat(((this.f-32)/1.8+273.15).toFixed(2))},convertC:function(){this.f=parseFloat((1.8*this.c+32).toFixed(2)),this.k=parseFloat((1*this.c+273.15).toFixed(2))},convertK:function(){this.f=parseFloat((1.8*(this.k-273.15)+32).toFixed(2)),this.c=parseFloat((this.k-273.15).toFixed(2))},convertYears:function(){this.day=parseFloat((365.25*this.yr).toFixed(2)),this.hr=parseFloat((8766*this.yr).toFixed(2)),this.mn=parseFloat((525960*this.yr).toFixed(2)),this.sec=parseFloat((31557600*this.yr).toFixed(2))},convertDays:function(){this.yr=parseFloat((.002737850787132*this.day).toFixed(2)),this.hr=parseFloat((24*this.day).toFixed(2)),this.mn=parseFloat((1440*this.day).toFixed(2)),this.sec=parseFloat((86400*this.day).toFixed(2))},convertHours:function(){this.yr=parseFloat((.000114077116131*this.hr).toFixed(2)),this.day=parseFloat((.041666666666667*this.hr).toFixed(2)),this.mn=parseFloat((60*this.hr).toFixed(2)),this.sec=parseFloat((3600*this.hr).toFixed(2))},convertMinutes:function(){this.yr=parseFloat((1901285269e-15*this.mn).toFixed(2)),this.day=parseFloat((.000694444444444*this.mn).toFixed(2)),this.hr=parseFloat((.016666666666667*this.mn).toFixed(2)),this.sec=parseFloat((60*this.mn).toFixed(2))},convertSeconds:function(){this.yr=parseFloat((3.1688088e-8*this.sec).toFixed(2)),this.day=parseFloat((115740740740741e-19*this.sec).toFixed(2)),this.hr=parseFloat((.000277777777778*this.sec).toFixed(2)),this.mn=parseFloat((.016666666666667*this.sec).toFixed(2))}},mounted:function(){this.selectedOption=this.options[0],this.convertMiles()}};o("da82");P.render=b;var S=P,K=o("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App served from cache by service worker.")},registered:function(){console.log("Service worker registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection. App in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["b"])(S).mount("#app")},"68f6":function(e,t,o){},c469:function(e,t,o){},da82:function(e,t,o){"use strict";o("68f6")},f3ac:function(e,t,o){"use strict";o("4887")}});
//# sourceMappingURL=app.a378e7bd.js.map
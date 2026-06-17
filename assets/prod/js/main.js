/*
 * International Telephone Input v18.1.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!function(a){"object"==typeof module&&module.exports?module.exports=a():window.intlTelInput=a();}(function(a){return function(){function b(a){for(var b=1;b<arguments.length;b++){var d=null!=arguments[b]?Object(arguments[b]):{},e=Object.keys(d);"function"==typeof Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable})),e.forEach(function(b){c(a,b,d[b]);});}return a}function c(a,b,c){return b=g(b),b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,g(d.key),d);}}function f(a,b,c){return b&&e(a.prototype,b),c&&e(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function g(a){var b=h(a,"string");return "symbol"==typeof b?b:String(b)}function h(b,c){if("object"!=typeof b||null===b)return b;var d=b[Symbol.toPrimitive];if(d!==a){var e=d.call(b,c||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===c?String:Number)(b)}for(var i=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1",5,["684"]],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1",6,["264"]],["Antigua and Barbuda","ag","1",7,["268"]],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Ascension Island","ac","247"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1",8,["242"]],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1",9,["246"]],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1",10,["441"]],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1",11,["284"]],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","367","368","387","403","416","418","431","437","438","450","474","506","514","519","548","579","581","584","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1,["3","4","7"]],["Cayman Islands","ky","1",12,["345"]],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2,["89164"]],["Cocos (Keeling) Islands","cc","61",1,["89162"]],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1",13,["767"]],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Eswatini","sz","268"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1",14,["473"]],["Guadeloupe","gp","590",0],["Guam","gu","1",15,["671"]],["Guatemala","gt","502"],["Guernsey","gg","44",1,["1481","7781","7839","7911"]],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2,["1624","74576","7524","7924","7624"]],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3,["1534","7509","7700","7797","7829","7937"]],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1,["33","7"]],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1,["269","639"]],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1",16,["664"]],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["North Macedonia (Северна Македонија)","mk","389"],["Northern Mariana Islands","mp","1",17,["670"]],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1",18,["869"]],["Saint Lucia","lc","1",19,["758"]],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1",20,["784"]],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1",21,["721"]],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1,["79"]],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1",22,["868"]],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1",23,["649"]],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1",24,["340"]],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1,["06698"]],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1,["5288","5289"]],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1,["18"]]],j=0;j<i.length;j++){var k=i[j];i[j]={name:k[0],iso2:k[1],dialCode:k[2],priority:k[3]||0,areaCodes:k[4]||null};}var l={getInstance:function(a){var b=a.getAttribute("data-intl-tel-input-id");return window.intlTelInputGlobals.instances[b]},instances:{},documentReady:function(){return "complete"===document.readyState}};"object"==typeof window&&(window.intlTelInputGlobals=l);var m=0,n={allowDropdown:!0,autoInsertDialCode:!1,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,showFlags:!0,utilsScript:""},o=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"],p=function(a,b){for(var c=Object.keys(a),d=0;d<c.length;d++)b(c[d],a[c[d]]);},q=function(a){p(window.intlTelInputGlobals.instances,function(b){window.intlTelInputGlobals.instances[b][a]();});},r=function(){function c(a,b){var e=this;d(this,c),this.id=m++,this.a=a,this.b=null,this.c=null;var f=b||{};this.d={},p(n,function(a,b){e.d[a]=f.hasOwnProperty(a)?f[a]:b;}),this.e=Boolean(a.getAttribute("placeholder"));}return f(c,[{key:"_init",value:function(){var a=this;this.d.nationalMode&&(this.d.autoInsertDialCode=!1),this.d.separateDialCode&&(this.d.autoInsertDialCode=!1);var b=this.d.allowDropdown&&!this.d.separateDialCode;if(!this.d.showFlags&&b&&(this.d.showFlags=!0),this.g=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.g&&(document.body.classList.add("iti-mobile"),this.d.dropdownContainer||(this.d.dropdownContainer=document.body)),"undefined"!=typeof Promise){var c=new Promise(function(b,c){a.h=b,a.i=c;}),d=new Promise(function(b,c){a.i0=b,a.i1=c;});this.promise=Promise.all([c,d]);}else this.h=this.i=function(){},this.i0=this.i1=function(){};this.s={},this._b(),this._f(),this._h(),this._i(),this._i3();}},{key:"_b",value:function(){this._d(),this._d2(),this._e(),this.d.localizedCountries&&this._d0(),(this.d.onlyCountries.length||this.d.localizedCountries)&&this.p.sort(this._d1);}},{key:"_c",value:function(b,c,d){c.length>this.countryCodeMaxLen&&(this.countryCodeMaxLen=c.length),this.q.hasOwnProperty(c)||(this.q[c]=[]);for(var e=0;e<this.q[c].length;e++)if(this.q[c][e]===b)return;var f=d!==a?d:this.q[c].length;this.q[c][f]=b;}},{key:"_d",value:function(){if(this.d.onlyCountries.length){var a=this.d.onlyCountries.map(function(a){return a.toLowerCase()});this.p=i.filter(function(b){return a.indexOf(b.iso2)>-1});}else if(this.d.excludeCountries.length){var b=this.d.excludeCountries.map(function(a){return a.toLowerCase()});this.p=i.filter(function(a){return -1===b.indexOf(a.iso2)});}else this.p=i;}},{key:"_d0",value:function(){for(var a=0;a<this.p.length;a++){var b=this.p[a].iso2.toLowerCase();this.d.localizedCountries.hasOwnProperty(b)&&(this.p[a].name=this.d.localizedCountries[b]);}}},{key:"_d1",value:function(a,b){return a.name<b.name?-1:a.name>b.name?1:0}},{key:"_d2",value:function(){this.countryCodeMaxLen=0,this.dialCodes={},this.q={};for(var a=0;a<this.p.length;a++){var b=this.p[a];this.dialCodes[b.dialCode]||(this.dialCodes[b.dialCode]=!0),this._c(b.iso2,b.dialCode,b.priority);}for(var c=0;c<this.p.length;c++){var d=this.p[c];if(d.areaCodes)for(var e=this.q[d.dialCode][0],f=0;f<d.areaCodes.length;f++){for(var g=d.areaCodes[f],h=1;h<g.length;h++){var i=d.dialCode+g.substr(0,h);this._c(e,i),this._c(d.iso2,i);}this._c(d.iso2,d.dialCode+g);}}}},{key:"_e",value:function(){this.preferredCountries=[];for(var a=0;a<this.d.preferredCountries.length;a++){var b=this.d.preferredCountries[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.preferredCountries.push(c);}}},{key:"_e2",value:function(a,b,c){var d=document.createElement(a);return b&&p(b,function(a,b){return d.setAttribute(a,b)}),c&&c.appendChild(d),d}},{key:"_f",value:function(){this.a.hasAttribute("autocomplete")||this.a.form&&this.a.form.hasAttribute("autocomplete")||this.a.setAttribute("autocomplete","off");var a=this.d,c=a.allowDropdown,d=a.separateDialCode,e=a.showFlags,f=a.customContainer,g=a.hiddenInput,h=a.dropdownContainer,i="iti";c&&(i+=" iti--allow-dropdown"),d&&(i+=" iti--separate-dial-code"),e&&(i+=" iti--show-flags"),f&&(i+=" ".concat(f));var j=this._e2("div",{"class":i});this.a.parentNode.insertBefore(j,this.a);var k=c||e||d;if(k&&(this.k=this._e2("div",{"class":"iti__flag-container"},j)),j.appendChild(this.a),k&&(this.selectedFlag=this._e2("div",b({"class":"iti__selected-flag"},c&&{role:"combobox","aria-haspopup":"listbox","aria-controls":"iti-".concat(this.id,"__country-listbox"),"aria-owns":"iti-".concat(this.id,"__country-listbox"),"aria-expanded":"false","aria-label":"Telephone country code"}),this.k)),e&&(this.l=this._e2("div",{"class":"iti__flag"},this.selectedFlag)),this.selectedFlag&&this.a.disabled&&this.selectedFlag.setAttribute("aria-disabled","true"),d&&(this.t=this._e2("div",{"class":"iti__selected-dial-code"},this.selectedFlag)),c&&(this.a.disabled||this.selectedFlag.setAttribute("tabindex","0"),this.u=this._e2("div",{"class":"iti__arrow"},this.selectedFlag),this.m=this._e2("ul",{"class":"iti__country-list iti__hide",id:"iti-".concat(this.id,"__country-listbox"),role:"listbox","aria-label":"List of countries"}),this.preferredCountries.length&&(this._g(this.preferredCountries,"iti__preferred",!0),this._e2("li",{"class":"iti__divider",role:"separator","aria-disabled":"true"},this.m)),this._g(this.p,"iti__standard"),h?(this.dropdown=this._e2("div",{"class":"iti iti--container"}),this.dropdown.appendChild(this.m)):this.k.appendChild(this.m)),g){var l=g,m=this.a.getAttribute("name");if(m){var n=m.lastIndexOf("[");-1!==n&&(l="".concat(m.substr(0,n),"[").concat(l,"]"));}this.hiddenInput=this._e2("input",{type:"hidden",name:l}),j.appendChild(this.hiddenInput);}}},{key:"_g",value:function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e],g=c?"-preferred":"";d+="<li class='iti__country ".concat(b,"' tabIndex='-1' id='iti-").concat(this.id,"__item-").concat(f.iso2).concat(g,"' role='option' data-dial-code='").concat(f.dialCode,"' data-country-code='").concat(f.iso2,"' aria-selected='false'>"),this.d.showFlags&&(d+="<div class='iti__flag-box'><div class='iti__flag iti__".concat(f.iso2,"'></div></div>")),d+="<span class='iti__country-name'>".concat(f.name,"</span>"),d+="<span class='iti__dial-code'>+".concat(f.dialCode,"</span>"),d+="</li>";}this.m.insertAdjacentHTML("beforeend",d);}},{key:"_h",value:function(){var a=this.a.getAttribute("value"),b=this.a.value,c=a&&"+"===a.charAt(0)&&(!b||"+"!==b.charAt(0)),d=c?a:b,e=this._5(d),f=this._w(d),g=this.d,h=g.initialCountry,i=g.autoInsertDialCode;e&&!f?this._v(d):"auto"!==h&&(h?this._z(h.toLowerCase()):e&&f?this._z("us"):(this.j=this.preferredCountries.length?this.preferredCountries[0].iso2:this.p[0].iso2,d||this._z(this.j)),!d&&i&&(this.a.value="+".concat(this.s.dialCode))),d&&this._u(d);}},{key:"_i",value:function(){this._j(),this.d.autoInsertDialCode&&this._l(),this.d.allowDropdown&&this._i2(),this.hiddenInput&&this._i0();}},{key:"_i0",value:function(){var a=this;this._a14=function(){a.hiddenInput.value=a.getNumber();},this.a.form&&this.a.form.addEventListener("submit",this._a14);}},{key:"_i1",value:function(){for(var a=this.a;a&&"LABEL"!==a.tagName;)a=a.parentNode;return a}},{key:"_i2",value:function(){var a=this;this._a9=function(b){a.m.classList.contains("iti__hide")?a.a.focus():b.preventDefault();};var b=this._i1();b&&b.addEventListener("click",this._a9),this._a10=function(){!a.m.classList.contains("iti__hide")||a.a.disabled||a.a.readOnly||a._n();},this.selectedFlag.addEventListener("click",this._a10),this._a11=function(b){a.m.classList.contains("iti__hide")&&-1!==["ArrowUp","Up","ArrowDown","Down"," ","Enter"].indexOf(b.key)&&(b.preventDefault(),b.stopPropagation(),a._n()),"Tab"===b.key&&a._2();},this.k.addEventListener("keydown",this._a11);}},{key:"_i3",value:function(){var a=this;this.d.utilsScript&&!window.intlTelInputUtils?window.intlTelInputGlobals.documentReady()?window.intlTelInputGlobals.loadUtils(this.d.utilsScript):window.addEventListener("load",function(){window.intlTelInputGlobals.loadUtils(a.d.utilsScript);}):this.i0(),"auto"===this.d.initialCountry?this._i4():this.h();}},{key:"_i4",value:function(){window.intlTelInputGlobals.autoCountry?this.handleAutoCountry():window.intlTelInputGlobals.startedLoadingAutoCountry||(window.intlTelInputGlobals.startedLoadingAutoCountry=!0,"function"==typeof this.d.geoIpLookup&&this.d.geoIpLookup(function(a){window.intlTelInputGlobals.autoCountry=a.toLowerCase(),setTimeout(function(){return q("handleAutoCountry")});},function(){return q("rejectAutoCountryPromise")}));}},{key:"_j",value:function(){var a=this;this._a12=function(){a._v(a.a.value)&&a._m2CountryChange();},this.a.addEventListener("keyup",this._a12),this._a13=function(){setTimeout(a._a12);},this.a.addEventListener("cut",this._a13),this.a.addEventListener("paste",this._a13);}},{key:"_j2",value:function(a){var b=this.a.getAttribute("maxlength");return b&&a.length>b?a.substr(0,b):a}},{key:"_l",value:function(){var a=this;this._a8=function(){a._l2();},this.a.form&&this.a.form.addEventListener("submit",this._a8),this.a.addEventListener("blur",this._a8);}},{key:"_l2",value:function(){if("+"===this.a.value.charAt(0)){var a=this._m(this.a.value);a&&this.s.dialCode!==a||(this.a.value="");}}},{key:"_m",value:function(a){return a.replace(/\D/g,"")}},{key:"_m2",value:function(a){var b=document.createEvent("Event");b.initEvent(a,!0,!0),this.a.dispatchEvent(b);}},{key:"_n",value:function(){this.m.classList.remove("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","true"),this._o(),this.b&&(this._x(this.b,!1),this._3(this.b,!0)),this._p(),this.u.classList.add("iti__arrow--up"),this._m2("open:countrydropdown");}},{key:"_n2",value:function(a,b,c){c&&!a.classList.contains(b)?a.classList.add(b):!c&&a.classList.contains(b)&&a.classList.remove(b);}},{key:"_o",value:function(){var a=this;if(this.d.dropdownContainer&&this.d.dropdownContainer.appendChild(this.dropdown),!this.g){var b=this.a.getBoundingClientRect(),c=window.pageYOffset||document.documentElement.scrollTop,d=b.top+c,e=this.m.offsetHeight,f=d+this.a.offsetHeight+e<c+window.innerHeight,g=d-e>c;if(this._n2(this.m,"iti__country-list--dropup",!f&&g),this.d.dropdownContainer){var h=!f&&g?0:this.a.offsetHeight;this.dropdown.style.top="".concat(d+h,"px"),this.dropdown.style.left="".concat(b.left+document.body.scrollLeft,"px"),this._a4=function(){return a._2()},window.addEventListener("scroll",this._a4);}}}},{key:"_o2",value:function(a){for(var b=a;b&&b!==this.m&&!b.classList.contains("iti__country");)b=b.parentNode;return b===this.m?null:b}},{key:"_p",value:function(){var a=this;this._a0=function(b){var c=a._o2(b.target);c&&a._x(c,!1);},this.m.addEventListener("mouseover",this._a0),this._a1=function(b){var c=a._o2(b.target);c&&a._1(c);},this.m.addEventListener("click",this._a1);var b=!0;this._a2=function(){b||a._2(),b=!1;},document.documentElement.addEventListener("click",this._a2);var c="",d=null;this._a3=function(b){b.preventDefault(),"ArrowUp"===b.key||"Up"===b.key||"ArrowDown"===b.key||"Down"===b.key?a._q(b.key):"Enter"===b.key?a._r():"Escape"===b.key?a._2():/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(b.key)&&(d&&clearTimeout(d),c+=b.key.toLowerCase(),a._s(c),d=setTimeout(function(){c="";},1e3));},document.addEventListener("keydown",this._a3);}},{key:"_q",value:function(a){var b="ArrowUp"===a||"Up"===a?this.c.previousElementSibling:this.c.nextElementSibling;b&&(b.classList.contains("iti__divider")&&(b="ArrowUp"===a||"Up"===a?b.previousElementSibling:b.nextElementSibling),this._x(b,!0));}},{key:"_r",value:function(){this.c&&this._1(this.c);}},{key:"_s",value:function(a){for(var b=0;b<this.p.length;b++)if(this._t(this.p[b].name,a)){var c=this.m.querySelector("#iti-".concat(this.id,"__item-").concat(this.p[b].iso2));this._x(c,!1),this._3(c,!0);break}}},{key:"_t",value:function(a,b){return a.substr(0,b.length).toLowerCase()===b}},{key:"_u",value:function(a){var b=a;if(this.d.formatOnDisplay&&window.intlTelInputUtils&&this.s){var c=this.d.nationalMode||"+"!==b.charAt(0)&&!this.d.separateDialCode,d=intlTelInputUtils.numberFormat,e=d.NATIONAL,f=d.INTERNATIONAL,g=c?e:f;b=intlTelInputUtils.formatNumber(b,this.s.iso2,g);}b=this._7(b),this.a.value=b;}},{key:"_v",value:function(a){var b=a,c=this.s.dialCode,d="1"===c;b&&this.d.nationalMode&&d&&"+"!==b.charAt(0)&&("1"!==b.charAt(0)&&(b="1".concat(b)),b="+".concat(b)),this.d.separateDialCode&&c&&"+"!==b.charAt(0)&&(b="+".concat(c).concat(b));var e=this._5(b,!0),f=this._m(b),g=null;if(e){var h=this.q[this._m(e)],i=-1!==h.indexOf(this.s.iso2)&&f.length<=e.length-1;if(!("1"===c&&this._w(f))&&!i)for(var j=0;j<h.length;j++)if(h[j]){g=h[j];break}}else "+"===b.charAt(0)&&f.length?g="":b&&"+"!==b||(g=this.j);return null!==g&&this._z(g)}},{key:"_w",value:function(a){var b=this._m(a);if("1"===b.charAt(0)){var c=b.substr(1,3);return -1!==o.indexOf(c)}return !1}},{key:"_x",value:function(a,b){var c=this.c;c&&c.classList.remove("iti__highlight"),this.c=a,this.c.classList.add("iti__highlight"),this.selectedFlag.setAttribute("aria-activedescendant",a.getAttribute("id")),b&&this.c.focus();}},{key:"_y",value:function(a,b,c){for(var d=b?i:this.p,e=0;e<d.length;e++)if(d[e].iso2===a)return d[e];if(c)return null;throw new Error("No country data for '".concat(a,"'"))}},{key:"_z",value:function(a){var b=this.s.iso2?this.s:{};if(this.s=a?this._y(a,!1,!1):{},this.s.iso2&&(this.j=this.s.iso2),this.d.showFlags&&this.l.setAttribute("class","iti__flag iti__".concat(a)),this.selectedFlag){var c=a?"".concat(this.s.name,": +").concat(this.s.dialCode):"Unknown";this.selectedFlag.setAttribute("title",c);}if(this.d.separateDialCode){var d=this.s.dialCode?"+".concat(this.s.dialCode):"";this.t.innerHTML=d;var e=this.selectedFlag.offsetWidth||this._z2();this.a.style.paddingLeft="".concat(e+6,"px");}if(this._0(),this.d.allowDropdown){var f=this.b;if(f&&(f.classList.remove("iti__active"),f.setAttribute("aria-selected","false")),a){var g=this.m.querySelector("#iti-".concat(this.id,"__item-").concat(a,"-preferred"))||this.m.querySelector("#iti-".concat(this.id,"__item-").concat(a));g.setAttribute("aria-selected","true"),g.classList.add("iti__active"),this.b=g;}}return b.iso2!==a}},{key:"_z2",value:function(){var a=this.a.parentNode.cloneNode();a.style.visibility="hidden",document.body.appendChild(a);var b=this.k.cloneNode();a.appendChild(b);var c=this.selectedFlag.cloneNode(!0);b.appendChild(c);var d=c.offsetWidth;return a.parentNode.removeChild(a),d}},{key:"_0",value:function(){var a="aggressive"===this.d.autoPlaceholder||!this.e&&"polite"===this.d.autoPlaceholder;if(window.intlTelInputUtils&&a){var b=intlTelInputUtils.numberType[this.d.placeholderNumberType],c=this.s.iso2?intlTelInputUtils.getExampleNumber(this.s.iso2,this.d.nationalMode,b):"";c=this._7(c),"function"==typeof this.d.customPlaceholder&&(c=this.d.customPlaceholder(c,this.s)),this.a.setAttribute("placeholder",c);}}},{key:"_1",value:function(a){var b=this._z(a.getAttribute("data-country-code"));this._2(),this._4(a.getAttribute("data-dial-code")),this.a.focus();var c=this.a.value.length;this.a.setSelectionRange(c,c),b&&this._m2CountryChange();}},{key:"_2",value:function(){this.m.classList.add("iti__hide"),this.selectedFlag.setAttribute("aria-expanded","false"),this.selectedFlag.removeAttribute("aria-activedescendant"),this.u.classList.remove("iti__arrow--up"),document.removeEventListener("keydown",this._a3),document.documentElement.removeEventListener("click",this._a2),this.m.removeEventListener("mouseover",this._a0),this.m.removeEventListener("click",this._a1),this.d.dropdownContainer&&(this.g||window.removeEventListener("scroll",this._a4),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._m2("close:countrydropdown");}},{key:"_3",value:function(a,b){var c=this.m,d=window.pageYOffset||document.documentElement.scrollTop,e=c.offsetHeight,f=c.getBoundingClientRect().top+d,g=f+e,h=a.offsetHeight,i=a.getBoundingClientRect().top+d,j=i+h,k=i-f+c.scrollTop,l=e/2-h/2;if(i<f)b&&(k-=l),c.scrollTop=k;else if(j>g){b&&(k+=l);var m=e-h;c.scrollTop=k-m;}}},{key:"_4",value:function(a){var b,c=this.a.value,d="+".concat(a);if("+"===c.charAt(0)){var e=this._5(c);b=e?c.replace(e,d):d,this.a.value=b;}else this.d.autoInsertDialCode&&(b=c?d+c:d,this.a.value=b);}},{key:"_5",value:function(a,b){var c="";if("+"===a.charAt(0))for(var d="",e=0;e<a.length;e++){var f=a.charAt(e);if(!isNaN(parseInt(f,10))){if(d+=f,b)this.q[d]&&(c=a.substr(0,e+1));else if(this.dialCodes[d]){c=a.substr(0,e+1);break}if(d.length===this.countryCodeMaxLen)break}}return c}},{key:"_6",value:function(){var a=this.a.value.trim(),b=this.s.dialCode,c=this._m(a);return (this.d.separateDialCode&&"+"!==a.charAt(0)&&b&&c?"+".concat(b):"")+a}},{key:"_7",value:function(a){var b=a;if(this.d.separateDialCode){var c=this._5(b);if(c){c="+".concat(this.s.dialCode);var d=" "===b[c.length]||"-"===b[c.length]?c.length+1:c.length;b=b.substr(d);}}return this._j2(b)}},{key:"_m2CountryChange",value:function(){this._m2("countrychange");}},{key:"handleAutoCountry",value:function(){"auto"===this.d.initialCountry&&(this.j=window.intlTelInputGlobals.autoCountry,this.a.value||this.setCountry(this.j),this.h());}},{key:"handleUtils",value:function(){window.intlTelInputUtils&&(this.a.value&&this._u(this.a.value),this._0()),this.i0();}},{key:"destroy",value:function(){var a=this.a.form;if(this.d.allowDropdown){this._2(),
this.selectedFlag.removeEventListener("click",this._a10),this.k.removeEventListener("keydown",this._a11);var b=this._i1();b&&b.removeEventListener("click",this._a9);}this.hiddenInput&&a&&a.removeEventListener("submit",this._a14),this.d.autoInsertDialCode&&(a&&a.removeEventListener("submit",this._a8),this.a.removeEventListener("blur",this._a8)),this.a.removeEventListener("keyup",this._a12),this.a.removeEventListener("cut",this._a13),this.a.removeEventListener("paste",this._a13),this.a.removeAttribute("data-intl-tel-input-id");var c=this.a.parentNode;c.parentNode.insertBefore(this.a,c),c.parentNode.removeChild(c),delete window.intlTelInputGlobals.instances[this.id];}},{key:"getExtension",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getExtension(this._6(),this.s.iso2):""}},{key:"getNumber",value:function(a){if(window.intlTelInputUtils){var b=this.s.iso2;return intlTelInputUtils.formatNumber(this._6(),b,a)}return ""}},{key:"getNumberType",value:function(){return window.intlTelInputUtils?intlTelInputUtils.getNumberType(this._6(),this.s.iso2):-99}},{key:"getSelectedCountryData",value:function(){return this.s}},{key:"getValidationError",value:function(){if(window.intlTelInputUtils){var a=this.s.iso2;return intlTelInputUtils.getValidationError(this._6(),a)}return -99}},{key:"isValidNumber",value:function(){var a=this._6().trim(),b=this.d.nationalMode?this.s.iso2:"";return window.intlTelInputUtils?intlTelInputUtils.isValidNumber(a,b):null}},{key:"setCountry",value:function(a){var b=a.toLowerCase();this.s.iso2!==b&&(this._z(b),this._4(this.s.dialCode),this._m2CountryChange());}},{key:"setNumber",value:function(a){var b=this._v(a);this._u(a),b&&this._m2CountryChange();}},{key:"setPlaceholderNumberType",value:function(a){this.d.placeholderNumberType=a,this._0();}}]),c}();l.getCountryData=function(){return i};var s=function(a,b,c){var d=document.createElement("script");d.onload=function(){q("handleUtils"),b&&b();},d.onerror=function(){q("rejectUtilsScriptPromise"),c&&c();},d.className="iti-load-utils",d.async=!0,d.src=a,document.body.appendChild(d);};return l.loadUtils=function(a){if(!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript){if(window.intlTelInputGlobals.startedLoadingUtilsScript=!0,"undefined"!=typeof Promise)return new Promise(function(b,c){return s(a,b,c)});s(a);}return null},l.defaults=n,l.version="18.1.0",function(a,b){var c=new r(a,b);return c._init(),a.setAttribute("data-intl-tel-input-id",c.id),window.intlTelInputGlobals.instances[c.id]=c,c}}()});

window.contentLoaded = function(b,i){var j=false,k=true,a=b.document,l=a.documentElement,f=a.addEventListener,h=f?'addEventListener':'attachEvent',n=f?'removeEventListener':'detachEvent',g=f?'':'on',c=function(d){if(d.type=='readystatechange'&&a.readyState!='complete')return;(d.type=='load'?b:a)[n](g+d.type,c,false);if(!j&&(j=true))i.call(b,d.type||d);},m=function(){try{l.doScroll('left');}catch(e){setTimeout(m,50);return}c('poll');};if(a.readyState=='complete')i.call(b,'lazy');else {if(!f&&l.doScroll){try{k=!b.frameElement;}catch(e){}if(k)m();}a[h](g+'DOMContentLoaded',c,false);a[h](g+'readystatechange',c,false);b[h](g+'load',c,false);}};

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).LazyLoad=n();}(undefined,(function(){function t(){return (t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}});}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o});}window.dispatchEvent(e);},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",b=function(t,n){return t.getAttribute(g+n)},p=function(t){return b(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i);}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===p(t)},y=function(t){return p(t)===_},I=[l,u,d,f],A=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i));},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n;},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"");},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t);}},x=function(t,n){t&&(t.loadingCount+=n);},z=function(t,n){t&&(t.toLoadCount=n);},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e);},M=function(t,n){t.removeAttribute(n);},R=function(t){return !!t.llOriginalAttrs},T=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n;}},G=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes);}},D=function(t,n){N(t,"sizes",b(t,n.data_sizes)),N(t,"srcset",b(t,n.data_srcset)),N(t,"src",b(t,n.data_src));},V=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes");},j=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n);},F={IMG:function(t,n){j(t,(function(t){T(t),D(t,n);})),T(t),D(t,n);},IFRAME:function(t,n){N(t,"src",b(t,n.data_src));},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",b(t,n.data_src));}));}(t),N(t,"poster",b(t,n.data_poster)),N(t,"src",b(t,n.data_src)),t.load();}},P=function(t,n){var e=F[t.tagName];e&&e(t,n);},S=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),A(n.callback_loading,t,e);},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||A(t.callback_finish,n);},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e;},H=function(t,n,e){t.removeEventListener(n,e);},B=function(t){return !!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i);}delete t.llEvLisnrs;}},K=function(t,n,e){!function(t){delete t.llTempImage;}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1);}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e);},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e);}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),A(e.callback_loaded,n,i),o||$(e,i);}(0,t,n,e),J(i);}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),A(e.callback_error,n,i),o||$(e,i);}(0,t,n,e),J(i);}));},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG");}(t),Q(t,n,e),function(t,n,e){var i=b(t,n.data_bg),o=b(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),S(t,n,e));}(t,n,e),function(t,n,e){var i=b(t,n.data_bg_multi),o=b(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),A(n.callback_applied,t,e);}(t,n,e));}(t,n,e);},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),P(t,n),S(t,n,e);}(t,n,e);},Y=["IMG","IFRAME","VIDEO"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){var o=function(t){return I.indexOf(p(t))>=0}(t);h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e);}(t,e,i),A(e.callback_enter,t,n,i),o||X(t,e,i);}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return p(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){j(t,(function(t){V(t);})),V(t);}(t),function(t){j(t,(function(t){G(t);})),G(t);}(t),w(t,e.class_loading),x(i,-1),m(t),A(e.callback_cancel,t,n,i));}(t,n,e,i),A(e.callback_exit,t,n,i));}(t.target,t,n,e)}));},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return p(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n);}),function(t){return {root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)));}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n);})),n.update();}(t,e);}));}(o,this),this.update(e);};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&function(t,n,e){t.setAttribute("loading","lazy"),Q(t,n,e),P(t,n),h(t,_);}(t,n,e);})),z(e,0);}(a,r,this):(o=a,function(t){t.disconnect();}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n);}));}(n,o)):this.loadAll(a);},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs;})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount;},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n);}));}},rt.load=function(t,n){var e=c(n);X(t,e);},rt.resetStatus=function(t){m(t);},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n);}(rt,window.lazyLoadOptions),rt}));

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// Allow adding hours to a date
Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + h * 60 * 60 * 1000);
    return this;
};

window.contentLoaded(window, function (e) {
    var sizes = [
        { width: 320, suffix: 'small' },
        { width: 480, suffix: 'medium' },
        { width: 800, suffix: 'large' },
        { width: 1200, suffix: 'extra-large' },
        { width: 2000, suffix: 'cover' }
    ];

    var webpImages = document.querySelectorAll('[data-original-src]');
    var pictureEls = document.querySelectorAll('picture');
    var canRemove = Element.prototype.hasOwnProperty('remove');

    // if its IE pretty much
    if(!canRemove){
        // replace pics with images, gracefully
        pictureEls.forEach(function(el, index){
            var thisImg = el.querySelector('source:nth-child(2)');
            el.innerHTML = '';
            el.insertAdjacentHTML('afterend','<img src="'+thisImg.getAttribute('srcset')+'"/>');
        });
    }

    webpImages.forEach(function(el, index){
        var $image = el;
        var originalSrc = $image.getAttribute('data-original-src');

        // if its IE pretty much
        if(!canRemove){
            $image.setAttribute('src', originalSrc);
            return;
        }

        var imagePath = originalSrc.slice(0, originalSrc.lastIndexOf('.'));
        var imageExtension = originalSrc.slice(originalSrc.lastIndexOf('.'));
        var extWithoutDot = imageExtension.replace('.','');

        var srcsetAttr = '';

        sizes.forEach(function(size){
            srcsetAttr += imagePath + '-' + size.suffix + '.webp' + ' ' + size.width + 'w, ';
        });

        var src = imagePath + '-cover.webp';

        // create picture markup
        var imContainer = document.createElement('picture');
        var imOrig = document.createElement('source');
        var imWebp = document.createElement('source');

        // fallback image
        imOrig.setAttribute('data-srcset', originalSrc);
        if(extWithoutDot == 'jpg'){
            extWithoutDot = 'jpeg'; // safari fix
        }
        imOrig.setAttribute('type', 'image/'+extWithoutDot);

        // webp image
        imWebp.setAttribute('data-srcset', srcsetAttr);
        imWebp.setAttribute('type', 'image/webp');

        $image.removeAttribute('data-original-src');
        $image.setAttribute('data-src', src);
        $image.classList.add('lazy');

        imContainer.appendChild(imWebp);
        imContainer.appendChild(imOrig);
        imContainer.appendChild($image.cloneNode());

        $image.insertAdjacentElement('afterend',imContainer);
        $image.remove();
    });

    new LazyLoad();
});

(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else {
		// Browser globals
		root.geoFields = factory(root);
	}
})(typeof self !== "undefined" ? self : undefined, function () {

window.iti = false;

// Got _countries from here: https://github.com/meeDamian/country-emoji
var _initTel = function() {
	// Tel number select: check if there are any tel inputs on the page, if so, replace them with the fancy ones
	// var telInputs = document.querySelectorAll('input[type="tel"]');
	// for (var i = 0; i < telInputs.length; i++) {
	// 	_createTelField(telInputs[i]);
	// }
	const telInput = document.querySelector('[name="phone"]');
	
	if(telInput){
		window.iti = intlTelInput(telInput, {
		    preferredCountries: ['au','us','ca','gb','nz'],
		    initialCountry: localStorage._kkcountry,
		    hiddenInput: 'phone_country_code',
		    autoPlaceholder: 'aggressive',
		    customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
				return "Phone Number... " + selectedCountryPlaceholder;
			},
		    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.1.0/js/utils.min.js'
		});
	}
};

var _initIP = function(){
	var ipField = document.querySelector('[name="inf_custom_IPAddress"]');

	if(ipField){
		ipField.value = localStorage.getItem('_kkip');
	}
};

var _init = function() {
	// check if there is not a country code in session storage already get the country
	if (!localStorage._kkcountry || !localStorage._kkip) {
		// If there is no session variable set, run the get country function
		_getCountry();
	} else {
		// If there is already a country set, set up the tel inputs and country fields
		_initTel();
		_initIP();
	}
};

/**
 * Get user's country/state/IP
 */
// https://pro.ip-api.com/json/?key=xdE0u3qK4coQ9a7&fields=status,message,country,countryCode,query
var _getCountry = function() {

	function requestError() {
		initFields();
	}	
	
	function initFields() {
		_initTel();
		_initIP();
	}

	function request() {
		var url = 'https://pro.ip-api.com/json/?key=xdE0u3qK4coQ9a7&fields=status,message,countryCode,query';
		var xhr = new XMLHttpRequest();
		xhr.onerror = requestError;
		xhr.onreadystatechange = function() {
			if (this.readyState === 4) {
				if(this.status === 200) {
					var response = JSON.parse(this.responseText);
					// If the response fails, do nothing
					if(response.status == 'success') {
						// On success, save to localStorage and initialise fields
						localStorage.setItem('_kkcountry', response.countryCode);
						localStorage.setItem('_kkip', response.query);
						initFields();
					} else {
						// On fail, go to error
						requestError();
					}
					
				} else {
					requestError();
				}
			}
		};
		xhr.open('GET', url);
		xhr.send();
	}
	request();

};


// when the page has loaded, run our init function
window.contentLoaded(window, _init);


// Just return a value to define the module export.
// This example returns an object, but the module
// can return a function as the exported value.
return {
	init: _init
};

});


// geoFields.init();

/**
 * To use the ebook modal, add the button and modal as the next sibling.
 * Add the class .js-ebook-modal-trigger to the button trigger, and the class .js-ebook-modal to the modal window
 */


if(navigator.platform.indexOf('Win') > -1){
    document.body.classList.add('js-modal-windows');
}


// Toggle the modal window class
window.toggleModal = function(modal) {
    // Set the modal parent element to active
    modal.classList.toggle('active');
    document.body.classList.toggle('js-modal-active');
};

window.initModalTriggers = function(){

    // Get all of the trigger buttons
    var modalButtons = document.querySelectorAll('[data-js-modal-trigger]'),
          modalOverlay = document.querySelectorAll('[data-js-modal-id]');


    // Add click event to the buttons
    modalButtons.forEach(function(selected,index) {
        selected.addEventListener('click',function(el) {
            el.preventDefault();

            // On click, find and activate the modal with the matching id to the trigger data attribute
            let targetId = el.target.dataset.jsModalTrigger;
            let targetModal = document.querySelector('[data-js-modal-id='+targetId);

            if(selected.classList.contains('siteswitcher__cancel')){
                var modalClosed = new CustomEvent("modalClosed", { detail: targetId });
                document.dispatchEvent(modalClosed);
            }
            
            toggleModal(targetModal);
        });
    });

    // Add click event to the modal bg to close
    modalOverlay.forEach(function(overlay,index) {
        overlay.addEventListener('click', function(el) {
            if(el.target.classList.contains('js-modal')){
                toggleModal(el.target);
                var modalClosed = new CustomEvent("modalClosed", { detail: overlay.dataset.jsModalId });
                document.dispatchEvent(modalClosed);

                if(typeof window.mainWistiaVideo !== "undefined"){
                    window.mainWistiaVideo.play();
                }
            }
        });

        overlay.querySelectorAll('.js-close').forEach(function(closeButton,index) {
            closeButton.addEventListener('click',function(){
                toggleModal(overlay);
                var modalClosed = new CustomEvent("modalClosed", { detail: overlay.dataset.jsModalId });
                document.dispatchEvent(modalClosed);
            });
        });
    });
};

function initExitIntent(){
    var exitHappened = 0;
    var eiModal = document.querySelector('.exitintent');

    if(eiModal == null){
        return;
    }

    var eiProgressBar = document.querySelector('.c-progress__bar');

    if(eiModal){
        document.addEventListener("mouseout", function(evt){
            if ((evt.toElement === null && evt.relatedTarget === null || (typeof evt.toElement == "undefined" && evt.relatedTarget === null)) && exitHappened < 1) {
                if(eiProgressBar){
                    eiProgressBar.classList.add('c-loading');
                }

                if(typeof window.mainWistiaVideo != "undefined"){
                    window.mainWistiaVideo.pause();
                }

                if(!document.body.classList.contains('js-modal-active')){
                    exitHappened = 1;
                    toggleModal(eiModal);
                }
            }
        });
    }
}

window.contentLoaded(window, function (e) {
    initModalTriggers(false);
    initExitIntent();
});

// If we want 15 minute rotations for the summit, set this to true.

window.contentLoaded(window, function (e) {
    countdownTimer(); 
    getCurrentDay();
    getCurrentMonth();
    getCurrentYear();
    getDayofMonth();
    getSummitDayOfWeek();
    getSummitDay();
    getSummitMonth();
    getSummitYear();
}); 

function countdownTimer(timeOfEvent){
    var summitDate = nextSummitDate();
    var timeOfEvent = summitDate.getTime();
    var buttonCounters = document.querySelectorAll('.timeleft');
    var shortCounter = document.querySelectorAll('.short-counter');

    var interval = setInterval(function () {
        var currentTime = Date.now();
        var timeLeft = timeOfEvent - currentTime;

        if(timeLeft < 1) {
             clearInterval(interval);
             return;
        }

        var secsLeft = timeLeft / 1000;

        var daysLeft = secsLeft / 60 / 60 / 24;
        var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
        var minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
        var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

        daysLeft = Math.floor(daysLeft);
        hoursLeft = Math.floor(hoursLeft);
        minsLeft = Math.floor(minsLeft);
        secsLeft = Math.floor(secsLeft);

        var outputDate = '';

        outputDate += daysLeft + ' Day' + (daysLeft !== 1 ? 's ' : ' ');
        outputDate += hoursLeft + ' Hour' + (hoursLeft !== 1 ? 's ' : ' ');
        outputDate += minsLeft + ' Minute' + (minsLeft !== 1 ? 's ' : '');
        outputDate += secsLeft + ' Second' + (secsLeft !== 1 ? 's ' : '');

        buttonCounters.forEach(function (el, index) {
            el.innerHTML = outputDate;
        });

        var shortOutputDate = '';
        var shortMinuteDate = '';

        shortOutputDate += daysLeft
            ? daysLeft + ' Day' + (daysLeft !== 1 ? 's ' : ' ') + ' and '
            : '';
        shortOutputDate += hoursLeft + ' Hour' + (hoursLeft !== 1 ? 's ' : ' ');

        shortMinuteDate += minsLeft + ' Minute' + (minsLeft !== 1 ? 's ' : ' ');

        shortMinuteDate += secsLeft + ' Second' + (secsLeft !== 1 ? 's ' : ' ');

        shortCounter.forEach(function (el, index) {
            if(el.classList.contains('short-counter--minutes')) {
                el.innerHTML = shortMinuteDate;
            } else {
                el.innerHTML = shortOutputDate;
            }
        });
    }, 1000);
}

function getCurrentDay() {
    var now = new Date();
    var thisDay = now.getDate();
    var dayOutput = document.querySelectorAll('.output-day');

    dayOutput.forEach(function(el, index){
        el.textContent = thisDay + nth(thisDay);
    });
}

function getCurrentMonth() {
    var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var now       = new Date();
    var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
    var monthOutput = document.querySelectorAll('.output-month');

    monthOutput.forEach(function(el, index){
        el.textContent = thisMonth;
    });
}

function getCurrentYear() {
    var now       = new Date();
    var thisYear = now.getFullYear(); 
    var yearOutput = document.querySelectorAll('.output-year');

    yearOutput.forEach(function(el, index){
        el.textContent = thisYear;
    });
}

function getDayofMonth() {
    var now = new Date();
    var thisDay = now.getDate();
    var thisMonth = now.getMonth();
    var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var thisMonth = months[thisMonth];
    var dayOutput = document.querySelectorAll('.output-day-of-month');

    dayOutput.forEach(function(el, index){
        el.textContent = thisDay + nth(thisDay) + " of " + thisMonth;
    });
}

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

// Get the next saturday after today, and if it is already saturday, get the following sunday.
function nextSummitDate() {

    // If we are on the don't wait page - get the selected date passed through the query string as base64
    const urlParams = new URLSearchParams(window.location.search);
    let selectedSummitDate = urlParams.get('da');
    if (selectedSummitDate) {
        return new Date(atob(selectedSummitDate));
    } else {
        var today = new Date();

        {
            // Get the next 15 minute slot
            var minutes = 15;
            for(var i = 0; i <= 60; i += 15) {
               if(i > today.getMinutes()) {
                minutes = i;
                break;
               }
            }
            return new Date(today.getTime() + (minutes - today.getMinutes()) * 60 * 1000);
        }
    }

}

function getSummitDayOfWeek() {
    var nextSummitDay = nextSummitDate();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var day = days[nextSummitDay.getDay()];
    var output = document.querySelectorAll('.summit-weekday');

    output.forEach(function(el, index){
        el.textContent = day;
    });
}

function getSummitDay() {
    var nextSummitDay = nextSummitDate();
    var day = nextSummitDay.getDate();
    var output = document.querySelectorAll('.summit-day-of');
    var output2 = document.querySelectorAll('.summit-day');

    output.forEach(function(el, index){
        el.textContent = day + nth(day) + ' of ';
    });

    output2.forEach(function (el, index) {
        el.textContent = day + nth(day);
    });
}

function getSummitMonth() {
    var nextSummitDay = nextSummitDate();
    var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = months[nextSummitDay.getMonth()];
    var output = document.querySelectorAll('.summit-month');

    output.forEach(function(el, index){
        el.textContent = month;
    });
}

function getSummitYear() {
    var nextSummitDay = nextSummitDate();
    var year = nextSummitDay.getFullYear();
    var output = document.querySelectorAll('.summit-year');

    output.forEach(function(el, index){
        el.textContent = year;
    });
}

// Only load this on the registration page
if (window.location.pathname == '/') {
    function getTimezone() {
        // Get Timezone of current user as a string in GMT format
        var currentTime = new Date();
        var timezone = (currentTime.getTimezoneOffset() / 60) * -1;
        var gmt = 'GMT';
        if (timezone !== 0) {
            gmt += timezone > 0 ? '+' : '';
            gmt += timezone;
        } else if (timezone == 0) {
            gmt += '+0';
        }
        return gmt;
    }

    function getSummitDate() {
        return new Promise(function (resolve, reject) {
            const params = new URLSearchParams({ timezone: getTimezone() });

            var xhr = new XMLHttpRequest();
            xhr.open(
                'GET',
                window.location.origin + '/.netlify/functions/get-summit-times/?' +
                    params.toString()
            );
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function () {
                reject(xhr.statusText);
            };

            xhr.send();
        });
    }

    async function populateDates() {
        // Get the select fields to populate
        var dateSelector = document.querySelectorAll(
            'select[name=schedule]'
        );
        var summitData = JSON.parse(await getSummitDate());

        if (summitData.status == 'success') {
            dateSelector.forEach(function (select) {
                select.querySelectorAll('option')[1].remove();
                // Loop through the dates and create the options in each date selector
                summitData.schedules.forEach(function (date) {
                    var option = document.createElement('option');
                    option.text =
                        date.date + ' (' + summitData.timezone + ')';
                    option.value = date.id;
                    select.add(option);
                });
            });
        }
    }

    function registerForSummit() {
        // grab country coded phone number from form for ajax submit
        var phoneInput = document.querySelector('[name="phone_country_code"]');
        if(phoneInput){
            phoneInput.value = '+'+window.iti.getSelectedCountryData().dialCode;
        }

        var form = document.querySelector('form');
        var formData = new FormData(form);
        var data = [...formData.entries()];
        data.push(['timezone', getTimezone()]);

        var select = document.querySelector('select');
        var selectedDate = select.options[select.selectedIndex].text;
        var selectedDate = btoa(selectedDate);


        var queryString = data
            .map(
                (x) =>
                    `${encodeURIComponent(x[0])}=${encodeURIComponent(
                        x[1]
                    )}`
            )
            .join('&');

        var xhr = new XMLHttpRequest();
        xhr.open(
            'POST',
            window.location.origin + '/.netlify/functions/register-for-summit?' +
                queryString
        );
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
        xhr.onload = function () {
            if (this.status === 200) {
                var response = JSON.parse(xhr.response);
                if (response.data.status == 'success') {
                    dataLayer.push({
                        event: 'gtm.formSubmission',
                        form: 'registration',
                    });
                    if(response.data.user.schedule == "15" || response.data.user.schedule == "16") {
                        window.location.href = response.data.user.live_room_url;
                    } else {
                        window.location.href =
                        'https://summit.selllikecrazybook.com/dont-wait/?da=' +
                        selectedDate +
                        '&live=' +
                        btoa(response.data.user.live_room_url);
                    }
                
                } else {
                    alert(
                        'We were unable to register you for the Summit. Please try again later.'
                    );
                    console.error(response);
                }
            } else {
                alert(
                    'We were unable to register you for the Summit. Please try again later.'
                );
                console.error(response);
            }
        };
        xhr.onerror = function () {
            alert(xhr.statusText);
        };
        xhr.send(JSON.stringify(formData));
    }

    window.contentLoaded(window, function (e) {
        populateDates();

        // Add form handler to the form
        document
            .querySelector('form')
            .addEventListener('submit', function (e) {
                e.preventDefault();
                registerForSummit();
            });
    });
}

if (window.location.pathname == '/dont-wait/') {

    window.contentLoaded(window, function (e) {
        embedCalendarLinks();
    }); 
    function generateCalendarLinks() {
        const urlParams = new URLSearchParams(window.location.search);
        let summitLiveUrl = atob(urlParams.get('live'));

        let eventStart = new Date(window.nextSummitDate());
        let eventEnd = new Date(window.nextSummitDate()).addHours(3);
        console.log(eventStart);

        let eventStartGCalFormat = eventStart.toISOString().replaceAll('-', '').replaceAll(':', '').split('.')[0] + 'Z';
        let eventEndGCalFormat = eventEnd.toISOString().replaceAll('-', '').replaceAll(':', '').split('.')[0] + 'Z';
        let eventStartOutlookFormat = eventStart.toISOString().replace('.000Z','+00:00');
        let eventEndOutlookFormat = eventEnd.toISOString().replace('.000Z','+00:00');


        let eventTitle = 'Sell Like Crazy Summit';
        let eventDescription = 'Don\'t miss this exclusive live event where Sabri Suby will be teaching you how to build a sales funnel that will make you rich. Join us on the day at '+ summitLiveUrl;

        let eventLinkGoogle = 'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=' + encodeURIComponent(eventStartGCalFormat + '/' + encodeURIComponent(eventEndGCalFormat)) + '&details=' + encodeURIComponent(eventDescription) + '&location=Online&text=' + eventTitle;
        let eventLinkOutlook = 'https://outlook.live.com/calendar/0/deeplink/compose?allday=false&body='+ encodeURIComponent(eventDescription) + '&enddt=' + encodeURIComponent(eventEndOutlookFormat) + '&location=Online&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=' + encodeURIComponent(eventStartOutlookFormat) + '&subject=' + encodeURIComponent(eventTitle);
        let eventLinkOffice = 'https://outlook.office.com/calendar/0/deeplink/compose?allday=false&body=' + encodeURIComponent(eventDescription) + '&enddt=' + encodeURIComponent(eventEndOutlookFormat) + '&location=Online&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=' + encodeURIComponent(eventStartOutlookFormat) + '&subject='+encodeURIComponent(eventTitle);
        let eventLinkYahoo = 'https://calendar.yahoo.com/?desc=' + encodeURIComponent(eventDescription) + '&dur=&et=' + encodeURIComponent(eventEndGCalFormat) + '&in_loc=Online&st=' + encodeURIComponent(eventStartGCalFormat) + '&title=' + encodeURIComponent(eventTitle) + '&v=60';

        return {
            google: eventLinkGoogle,
            yahoo: eventLinkYahoo,
            outlook: eventLinkOutlook,
            office: eventLinkOffice
        }
    }
    function embedCalendarLinks() {
        let calendarLinks = generateCalendarLinks();

        Object.entries(calendarLinks).forEach(key => {
            document.querySelector('a[data-calendar="' + key[0] + '"]').href = key[1];
        });
    }

}

//# sourceMappingURL=main.js.map

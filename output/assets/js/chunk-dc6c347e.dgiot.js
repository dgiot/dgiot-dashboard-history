/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 16:08:32
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc6c347e"],{"0269":function(e,t,n){n("1d9e")},"1d9e":function(e,t){(function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){return e.getParam("insertdatetime_dateformat",e.translate("%Y-%m-%d"))},n=function(e){return e.getParam("insertdatetime_timeformat",e.translate("%H:%M:%S"))},r=function(e){return e.getParam("insertdatetime_formats",["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D"])},i=function(e){var t=r(e);return t.length>0?t[0]:n(e)},a=function(e){return e.getParam("insertdatetime_element",!1)},o="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),c="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),l="January February March April May June July August September October November December".split(" "),s=function(e,t){if(e=""+e,e.length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e},m=function(e,t,n){return void 0===n&&(n=new Date),t=t.replace("%D","%m/%d/%Y"),t=t.replace("%r","%I:%M:%S %p"),t=t.replace("%Y",""+n.getFullYear()),t=t.replace("%y",""+n.getYear()),t=t.replace("%m",s(n.getMonth()+1,2)),t=t.replace("%d",s(n.getDate(),2)),t=t.replace("%H",""+s(n.getHours(),2)),t=t.replace("%M",""+s(n.getMinutes(),2)),t=t.replace("%S",""+s(n.getSeconds(),2)),t=t.replace("%I",""+((n.getHours()+11)%12+1)),t=t.replace("%p",n.getHours()<12?"AM":"PM"),t=t.replace("%B",""+e.translate(l[n.getMonth()])),t=t.replace("%b",""+e.translate(c[n.getMonth()])),t=t.replace("%A",""+e.translate(u[n.getDay()])),t=t.replace("%a",""+e.translate(o[n.getDay()])),t=t.replace("%%","%"),t},d=function(e,t,n,r){var i=e.dom.create("time",{datetime:n},r);t.parentNode.insertBefore(i,t),e.dom.remove(t),e.selection.select(i,!0),e.selection.collapse(!1)},f=function(e,t){if(a(e)){var n=m(e,t),r=void 0;r=/%[HMSIp]/.test(t)?m(e,"%Y-%m-%dT%H:%M"):m(e,"%Y-%m-%d");var i=e.dom.getParent(e.selection.getStart(),"time");i?d(e,i,r,n):e.insertContent('<time datetime="'+r+'">'+n+"</time>")}else e.insertContent(m(e,t))},g=function(e){e.addCommand("mceInsertDate",(function(n,r){f(e,null!==r&&void 0!==r?r:t(e))})),e.addCommand("mceInsertTime",(function(t,r){f(e,null!==r&&void 0!==r?r:n(e))}))},p=function(e){var t=e,n=function(){return t},r=function(e){t=e};return{get:n,set:r}},h=tinymce.util.Tools.resolve("tinymce.util.Tools"),v=function(e){var t=r(e),n=p(i(e)),a=function(t){return e.execCommand("mceInsertDate",!1,t)};e.ui.registry.addSplitButton("insertdatetime",{icon:"insert-time",tooltip:"Insert date/time",select:function(e){return e===n.get()},fetch:function(n){n(h.map(t,(function(t){return{type:"choiceitem",text:m(e,t),value:t}})))},onAction:function(e){a(n.get())},onItemAction:function(e,t){n.set(t),a(t)}});var o=function(e){return function(){n.set(e),a(e)}};e.ui.registry.addNestedMenuItem("insertdatetime",{icon:"insert-time",text:"Date/time",getSubmenuItems:function(){return h.map(t,(function(t){return{type:"menuitem",text:m(e,t),onAction:o(t)}}))}})};function b(){e.add("insertdatetime",(function(e){g(e),v(e)}))}b()})()},"7fa5":function(e,t){(function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},t.apply(this,arguments)},n=function(e){var t=typeof e;return null===e?"null":"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t},r=function(e){return function(t){return n(t)===e}},i=function(e){return function(t){return typeof t===e}},a=function(e){return function(t){return e===t}},o=r("string"),u=r("object"),c=r("array"),l=a(null),s=i("boolean"),m=function(e){return null===e||void 0===e},d=function(e){return!m(e)},f=i("function"),g=i("number"),p=function(){},h=function(e){return function(){return e}},v=function(e){return e},b=h(!1),y=h(!0),D=function(){return A},A=function(){var e=function(e){return e()},t=v,n={fold:function(e,t){return e()},isSome:b,isNone:y,getOr:t,getOrThunk:e,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:h(null),getOrUndefined:h(void 0),or:t,orThunk:e,map:D,each:p,bind:D,exists:b,forall:y,filter:function(){return D()},toArray:function(){return[]},toString:h("none()")};return n}(),w=function(e){var t=h(e),n=function(){return i},r=function(t){return t(e)},i={fold:function(t,n){return n(e)},isSome:y,isNone:b,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return w(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?i:A},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return i},S=function(e){return null===e||void 0===e?A:w(e)},T={some:w,none:D,from:S},I=Object.keys,C=Object.hasOwnProperty,x=function(e,t){for(var n=I(e),r=0,i=n.length;r<i;r++){var a=n[r],o=e[a];t(o,a)}},M=function(e){return function(t,n){e[n]=t}},U=function(e,t,n,r){var i={};return x(e,(function(e,i){(t(e,i)?n:r)(e,i)})),i},N=function(e,t){var n={};return U(e,t,M(n),p),n},O=function(e,t){return C.call(e,t)},P=function(e,t){return O(e,t)&&void 0!==e[t]&&null!==e[t]},E=Array.prototype.push,k=function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!c(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);E.apply(t,e[n])}return t},L=function(e,t){return t>=0&&t<e.length?T.some(e[t]):T.none()},_=function(e){return L(e,0)},H=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n],n);if(r.isSome())return r}return T.none()};"undefined"!==typeof window?window:Function("return this;")();var z=function(e,t,n){if(!(o(n)||s(n)||g(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},R=function(e,t,n){z(e.dom,t,n)},B=function(e,t){e.dom.removeAttribute(t)},j=function(e,t){var n=t||document,r=n.createElement("div");if(r.innerHTML=e,!r.hasChildNodes()||r.childNodes.length>1)throw console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return W(r.childNodes[0])},F=function(e,t){var n=t||document,r=n.createElement(e);return W(r)},J=function(e,t){var n=t||document,r=n.createTextNode(e);return W(r)},W=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined");return{dom:e}},Y=function(e,t,n){return T.from(e.dom.elementFromPoint(t,n)).map(W)},G={fromHtml:j,fromTag:F,fromText:J,fromDom:W,fromPoint:Y},V=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),$=tinymce.util.Tools.resolve("tinymce.util.Promise"),K=tinymce.util.Tools.resolve("tinymce.util.URI"),X=tinymce.util.Tools.resolve("tinymce.util.XHR"),Z=function(e){return e.getParam("image_dimensions",!0,"boolean")},q=function(e){return e.getParam("image_advtab",!1,"boolean")},Q=function(e){return e.getParam("image_uploadtab",!0,"boolean")},ee=function(e){return e.getParam("image_prepend_url","","string")},te=function(e){return e.getParam("image_class_list")},ne=function(e){return e.getParam("image_description",!0,"boolean")},re=function(e){return e.getParam("image_title",!1,"boolean")},ie=function(e){return e.getParam("image_caption",!1,"boolean")},ae=function(e){return e.getParam("image_list",!1)},oe=function(e){return d(e.getParam("images_upload_url"))},ue=function(e){return d(e.getParam("images_upload_handler"))},ce=function(e){return e.getParam("a11y_advanced_options",!1,"boolean")},le=function(e){return e.getParam("automatic_uploads",!0,"boolean")},se=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},me=function(e){return new $((function(t){var n=document.createElement("img"),r=function(e){n.onload=n.onerror=null,n.parentNode&&n.parentNode.removeChild(n),t(e)};n.onload=function(){var e=se(n.width,n.clientWidth),t=se(n.height,n.clientHeight),i={width:e,height:t};r($.resolve(i))},n.onerror=function(){r($.reject("Failed to get image dimensions for: "+e))};var i=n.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",document.body.appendChild(n),n.src=e}))},de=function(e){return e&&(e=e.replace(/px$/,"")),e},fe=function(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e},ge=function(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},pe=function(e,t){var n=ae(e);o(n)?X.send({url:n,success:function(e){t(JSON.parse(e))}}):f(n)?n(t):t(n)},he=function(e,t,n){var r=function(){n.onload=n.onerror=null,e.selection&&(e.selection.select(n),e.nodeChanged())};n.onload=function(){t.width||t.height||!Z(e)||e.dom.setAttribs(n,{width:String(n.clientWidth),height:String(n.clientHeight)}),r()},n.onerror=r},ve=function(e){return new $((function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(){n(r.error.message)},r.readAsDataURL(e)}))},be=function(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))},ye=function(e,t){return K.isDomSafe(t,"img",e.settings)},De=V.DOM,Ae=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?de(e.style.marginLeft):""},we=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?de(e.style.marginTop):""},Se=function(e){return e.style.borderWidth?de(e.style.borderWidth):""},Te=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},Ie=function(e,t){return e.style[t]?e.style[t]:""},Ce=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},xe=function(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)},Me=function(e){var t=De.create("figure",{class:"image"});De.insertAfter(t,e),t.appendChild(e),t.appendChild(De.create("figcaption",{contentEditable:"true"},"Caption")),t.contentEditable="false"},Ue=function(e){var t=e.parentNode;De.insertAfter(e,t),De.remove(t)},Ne=function(e){Ce(e)?Ue(e):Me(e)},Oe=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");r.length>0?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},Pe=function(e,t){return function(e,n,r){e.style[n]?(e.style[n]=fe(r),Oe(e,t)):xe(e,n,r)}},Ee=function(e,t){return e.style[t]?de(e.style[t]):Te(e,t)},ke=function(e,t){var n=fe(t);e.style.marginLeft=n,e.style.marginRight=n},Le=function(e,t){var n=fe(t);e.style.marginTop=n,e.style.marginBottom=n},_e=function(e,t){var n=fe(t);e.style.borderWidth=n},He=function(e,t){e.style.borderStyle=t},ze=function(e){return Ie(e,"borderStyle")},Re=function(e){return"FIGURE"===e.nodeName},Be=function(e){return"IMG"===e.nodeName},je=function(e){return 0===De.getAttrib(e,"alt").length&&"presentation"===De.getAttrib(e,"role")},Fe=function(e){return je(e)?"":Te(e,"alt")},Je=function(){return{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}},We=function(e,t){var n=document.createElement("img");return xe(n,"style",t.style),(Ae(n)||""!==t.hspace)&&ke(n,t.hspace),(we(n)||""!==t.vspace)&&Le(n,t.vspace),(Se(n)||""!==t.border)&&_e(n,t.border),(ze(n)||""!==t.borderStyle)&&He(n,t.borderStyle),e(n.getAttribute("style"))},Ye=function(e,n){var r=document.createElement("img");if(Ze(e,t(t({},n),{caption:!1}),r),$e(r,n.alt,n.isDecorative),n.caption){var i=De.create("figure",{class:"image"});return i.appendChild(r),i.appendChild(De.create("figcaption",{contentEditable:"true"},"Caption")),i.contentEditable="false",i}return r},Ge=function(e,t){return{src:Te(t,"src"),alt:Fe(t),title:Te(t,"title"),width:Ee(t,"width"),height:Ee(t,"height"),class:Te(t,"class"),style:e(Te(t,"style")),caption:Ce(t),hspace:Ae(t),vspace:we(t),border:Se(t),borderStyle:Ie(t,"borderStyle"),isDecorative:je(t)}},Ve=function(e,t,n,r,i){n[r]!==t[r]&&i(e,r,n[r])},$e=function(e,t,n){if(n){De.setAttrib(e,"role","presentation");var r=G.fromDom(e);R(r,"alt","")}else{if(l(t)){r=G.fromDom(e);B(r,"alt")}else{r=G.fromDom(e);R(r,"alt",t)}"presentation"===De.getAttrib(e,"role")&&De.setAttrib(e,"role","")}},Ke=function(e,t,n){n.alt===t.alt&&n.isDecorative===t.isDecorative||$e(e,n.alt,n.isDecorative)},Xe=function(e,t){return function(n,r,i){e(n,i),Oe(n,t)}},Ze=function(e,t,n){var r=Ge(e,n);Ve(n,r,t,"caption",(function(e,t,n){return Ne(e)})),Ve(n,r,t,"src",xe),Ve(n,r,t,"title",xe),Ve(n,r,t,"width",Pe("width",e)),Ve(n,r,t,"height",Pe("height",e)),Ve(n,r,t,"class",xe),Ve(n,r,t,"style",Xe((function(e,t){return xe(e,"style",t)}),e)),Ve(n,r,t,"hspace",Xe(ke,e)),Ve(n,r,t,"vspace",Xe(Le,e)),Ve(n,r,t,"border",Xe(_e,e)),Ve(n,r,t,"borderStyle",Xe(He,e)),Ke(n,r,t)},qe=function(e,t){var n=e.dom.styles.parse(t),r=ge(n),i=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(i)},Qe=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||be(t))?null:t},et=function(e,t){var n=e.dom,r=N(e.schema.getTextBlockElements(),(function(t,n){return!e.schema.isValidChild(n,"figure")})),i=n.getParent(t.parentNode,(function(e){return P(r,e.nodeName)}),e.getBody());return i?n.split(i,t):t},tt=function(e){var t=Qe(e);return t?Ge((function(t){return qe(e,t)}),t):Je()},nt=function(e,t){var n=Ye((function(t){return qe(e,t)}),t);e.dom.setAttrib(n,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(n.outerHTML);var r=e.dom.select('*[data-mce-id="__mcenew"]')[0];if(e.dom.setAttrib(r,"data-mce-id",null),Re(r)){var i=et(e,r);e.selection.select(i)}else e.selection.select(r)},rt=function(e,t){e.dom.setAttrib(t,"src",t.getAttribute("src"))},it=function(e,t){if(t){var n=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t;e.dom.remove(n),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}},at=function(e,t){var n=Qe(e);if(Ze((function(t){return qe(e,t)}),t,n),rt(e,n),Re(n.parentNode)){var r=n.parentNode;et(e,r),e.selection.select(n.parentNode)}else e.selection.select(n),he(e,t,n)},ot=function(e,n){var r=n.src;return t(t({},n),{src:ye(e,r)?r:""})},ut=function(e,n){var r=Qe(e);if(r){var i=Ge((function(t){return qe(e,t)}),r),a=t(t({},i),n),o=ot(e,a);a.src?at(e,o):it(e,r)}else n.src&&nt(e,t(t({},Je()),n))},ct=function(e,t){var n=u(e)&&u(t);return n?st(e,t):t},lt=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(0===t.length)throw new Error("Can't merge zero objects");for(var r={},i=0;i<t.length;i++){var a=t[i];for(var o in a)O(a,o)&&(r[o]=e(r[o],a[o]))}return r}},st=lt(ct),mt=function(e){return e.length>0},dt=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),ft=tinymce.util.Tools.resolve("tinymce.util.Tools"),gt=function(e){return o(e.value)?e.value:""},pt=function(e){return o(e.text)?e.text:o(e.title)?e.title:""},ht=function(e,t){var n=[];return ft.each(e,(function(e){var r=pt(e);if(void 0!==e.menu){var i=ht(e.menu,t);n.push({text:r,items:i})}else{var a=t(e);n.push({text:r,value:a})}})),n},vt=function(e){return void 0===e&&(e=gt),function(t){return t?T.from(t).map((function(t){return ht(t,e)})):T.none()}},bt=function(e){return vt(gt)(e)},yt=function(e){return O(e,"items")},Dt=function(e,t){return H(e,(function(e){return yt(e)?Dt(e.items,t):e.value===t?T.some(e):T.none()}))},At=function(e,t){return e.bind((function(e){return Dt(e,t)}))},wt={sanitizer:vt,sanitize:bt,findEntry:At},St=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Tt={makeTab:St},It=function(e){var t=wt.sanitizer((function(t){return e.convertURL(t.value||t.url,"src")})),n=new $((function(n){pe(e,(function(e){n(t(e).map((function(e){return k([[{text:"None",value:""}],e])})))}))})),r=wt.sanitize(te(e)),i=q(e),a=Q(e),u=oe(e),c=ue(e),l=tt(e),s=ne(e),m=re(e),d=Z(e),f=ie(e),g=ce(e),p=le(e),h=T.some(ee(e)).filter((function(e){return o(e)&&e.length>0}));return n.then((function(e){return{image:l,imageList:e,classList:r,hasAdvTab:i,hasUploadTab:a,hasUploadUrl:u,hasUploadHandler:c,hasDescription:s,hasImageTitle:m,hasDimensions:d,hasImageCaption:f,prependURL:h,hasAccessibilityOptions:g,automaticUploads:p}}))},Ct=function(e){var n={name:"src",type:"urlinput",filetype:"image",label:"Source"},r=e.imageList.map((function(e){return{name:"images",type:"listbox",label:"Image list",items:e}})),i={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},a={name:"title",type:"input",label:"Image title"},o={name:"dimensions",type:"sizeinput"},u={type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]},c=e.classList.map((function(e){return{name:"classes",type:"listbox",label:"Class",items:e}})),l={type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]},s=function(e){return e?{type:"grid",columns:2}:{type:"panel"}};return k([[n],r.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[u]:[],e.hasDescription?[i]:[],e.hasImageTitle?[a]:[],e.hasDimensions?[o]:[],[t(t({},s(e.classList.isSome()&&e.hasImageCaption)),{items:k([c.toArray(),e.hasImageCaption?[l]:[]])})]])},xt=function(e){return{title:"General",name:"general",items:Ct(e)}},Mt={makeTab:xt,makeItems:Ct},Ut=function(e){var t=[{type:"dropzone",name:"fileinput"}];return{title:"Upload",name:"upload",items:t}},Nt={makeTab:Ut},Ot=function(e){return{prevImage:wt.findEntry(e.imageList,e.image.src),prevAlt:e.image.alt,open:!0}},Pt=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}},Et=function(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}},kt=function(e,t){return/^(?:[a-zA-Z]+:)?\/\//.test(t)?T.none():e.prependURL.bind((function(e){return t.substring(0,e.length)!==e?T.some(e+t):T.none()}))},Lt=function(e,t){var n=t.getData();kt(e,n.src.value).each((function(e){t.setData({src:{value:e,meta:n.src.meta}})}))},_t=function(e,t,n){e.hasDescription&&o(n.alt)&&(t.alt=n.alt),e.hasAccessibilityOptions&&(t.isDecorative=n.isDecorative||t.isDecorative||!1),e.hasImageTitle&&o(n.title)&&(t.title=n.title),e.hasDimensions&&(o(n.width)&&(t.dimensions.width=n.width),o(n.height)&&(t.dimensions.height=n.height)),o(n.class)&&wt.findEntry(e.classList,n.class).each((function(e){t.classes=e.value})),e.hasImageCaption&&s(n.caption)&&(t.caption=n.caption),e.hasAdvTab&&(o(n.style)&&(t.style=n.style),o(n.vspace)&&(t.vspace=n.vspace),o(n.border)&&(t.border=n.border),o(n.hspace)&&(t.hspace=n.hspace),o(n.borderstyle)&&(t.borderstyle=n.borderstyle))},Ht=function(e,t){var n=t.getData(),r=n.src.meta;if(void 0!==r){var i=st({},n);_t(e,i,r),t.setData(i)}},zt=function(e,t,n,r){var i=r.getData(),a=i.src.value,o=i.src.meta||{};o.width||o.height||!t.hasDimensions||(mt(a)?e.imageSize(a).then((function(e){n.open&&r.setData({dimensions:e})})).catch((function(e){return console.error(e)})):r.setData({dimensions:{width:"",height:""}}))},Rt=function(e,t,n){var r=n.getData(),i=wt.findEntry(e.imageList,r.src.value);t.prevImage=i,n.setData({images:i.map((function(e){return e.value})).getOr("")})},Bt=function(e,t,n,r){Lt(t,r),Ht(t,r),zt(e,t,n,r),Rt(t,n,r)},jt=function(e,t,n,r){var i=r.getData(),a=wt.findEntry(t.imageList,i.images);a.each((function(e){var t=""===i.alt||n.prevImage.map((function(e){return e.text===i.alt})).getOr(!1);t?""===e.value?r.setData({src:e,alt:n.prevAlt}):r.setData({src:e,alt:e.text}):r.setData({src:e})})),n.prevImage=a,Bt(e,t,n,r)},Ft=function(e){var t=e["margin-top"]&&e["margin-bottom"]&&e["margin-top"]===e["margin-bottom"];return t?de(String(e["margin-top"])):""},Jt=function(e){var t=e["margin-right"]&&e["margin-left"]&&e["margin-right"]===e["margin-left"];return t?de(String(e["margin-right"])):""},Wt=function(e){return e["border-width"]?de(String(e["border-width"])):""},Yt=function(e){return e["border-style"]?String(e["border-style"]):""},Gt=function(e,t,n){return t(e(t(n)))},Vt=function(e,t,n){var r=ge(e(n.style)),i=st({},n);return i.vspace=Ft(r),i.hspace=Jt(r),i.border=Wt(r),i.borderstyle=Yt(r),i.style=Gt(e,t,r),i},$t=function(e,t){var n=t.getData(),r=Vt(e.parseStyle,e.serializeStyle,n);t.setData(r)},Kt=function(e,t,n){var r=st(Pt(t.image),n.getData()),i=We(e.normalizeCss,Et(r,!1));n.setData({style:i})},Xt=function(e,t,n,r){var i=r.getData();r.block("Uploading image"),_(i.fileinput).fold((function(){r.unblock()}),(function(i){var a=URL.createObjectURL(i),o=function(){r.unblock(),URL.revokeObjectURL(a)},u=function(i){r.setData({src:{value:i,meta:{}}}),r.showTab("general"),Bt(e,t,n,r)};ve(i).then((function(n){var c=e.createBlobCache(i,a,n);t.automaticUploads?e.uploadImage(c).then((function(e){u(e.url),o()})).catch((function(t){o(),e.alertErr(t)})):(e.addToBlobCache(c),u(c.blobUri()),r.unblock())}))}))},Zt=function(e,t,n){return function(r,i){"src"===i.name?Bt(e,t,n,r):"images"===i.name?jt(e,t,n,r):"alt"===i.name?n.prevAlt=r.getData().alt:"style"===i.name?$t(e,r):"vspace"===i.name||"hspace"===i.name||"border"===i.name||"borderstyle"===i.name?Kt(e,t,r):"fileinput"===i.name?Xt(e,t,n,r):"isDecorative"===i.name&&(r.getData().isDecorative?r.disable("alt"):r.enable("alt"))}},qt=function(e){return function(){e.open=!1}},Qt=function(e){if(e.hasAdvTab||e.hasUploadUrl||e.hasUploadHandler){var t={type:"tabpanel",tabs:k([[Mt.makeTab(e)],e.hasAdvTab?[Tt.makeTab(e)]:[],e.hasUploadTab&&(e.hasUploadUrl||e.hasUploadHandler)?[Nt.makeTab(e)]:[]])};return t}var n={type:"panel",items:Mt.makeItems(e)};return n},en=function(e){return function(t){var n=Ot(t);return{title:"Insert/Edit Image",size:"normal",body:Qt(t),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Pt(t.image),onSubmit:e.onSubmit(t),onChange:Zt(e,t,n),onClose:qt(n)}}},tn=function(e){return function(t){return function(n){var r=st(Pt(t.image),n.getData());e.execCommand("mceUpdateImage",!1,Et(r,t.hasAccessibilityOptions)),e.editorUpload.uploadImagesAuto(),n.close()}}},nn=function(e){return function(t){return ye(e,t)?me(e.documentBaseURI.toAbsolute(t)).then((function(e){return{width:String(e.width),height:String(e.height)}})):$.resolve({width:"",height:""})}},rn=function(e){return function(t,n,r){return e.editorUpload.blobCache.create({blob:t,blobUri:n,name:t.name?t.name.replace(/\.[^\.]+$/,""):null,filename:t.name,base64:r.split(",")[1]})}},an=function(e){return function(t){e.editorUpload.blobCache.add(t)}},on=function(e){return function(t){e.windowManager.alert(t)}},un=function(e){return function(t){return qe(e,t)}},cn=function(e){return function(t){return e.dom.parseStyle(t)}},ln=function(e){return function(t,n){return e.dom.serializeStyle(t,n)}},sn=function(e){return function(t){return dt(e).upload([t],!1).then((function(e){return 0===e.length?$.reject("Failed to upload image"):!1===e[0].status?$.reject(e[0].error.message):e[0]}))}},mn=function(e){var t={onSubmit:tn(e),imageSize:nn(e),addToBlobCache:an(e),createBlobCache:rn(e),alertErr:on(e),normalizeCss:un(e),parseStyle:cn(e),serializeStyle:ln(e),uploadImage:sn(e)},n=function(){It(e).then(en(t)).then(e.windowManager.open)};return{open:n}},dn=function(e){e.addCommand("mceImage",mn(e).open),e.addCommand("mceUpdateImage",(function(t,n){e.undoManager.transact((function(){return ut(e,n)}))}))},fn=function(e){var t=e.attr("class");return t&&/\bimage\b/.test(t)},gn=function(e){return function(t){var n=t.length,r=function(t){t.attr("contenteditable",e?"true":null)};while(n--){var i=t[n];fn(i)&&(i.attr("contenteditable",e?"false":null),ft.each(i.getAll("figcaption"),r))}}},pn=function(e){e.on("PreInit",(function(){e.parser.addNodeFilter("figure",gn(!0)),e.serializer.addNodeFilter("figure",gn(!1))}))},hn=function(e){e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:mn(e).open,onSetup:function(t){return t.setActive(d(Qe(e))),e.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",t.setActive).unbind}}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:mn(e).open}),e.ui.registry.addContextMenu("image",{update:function(e){return Re(e)||Be(e)&&!be(e)?["image"]:[]}})};function vn(){e.add("image",(function(e){pn(e),hn(e),dn(e)}))}vn()})()},"8e0d":function(e,t,n){n("7fa5")}}]);
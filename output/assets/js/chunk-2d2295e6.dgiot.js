/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  Time: 2021-12-31 08:52:52
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2295e6"],{dcc4:function(e,n,t){"use strict";t.r(n),t.d(n,"setupMode",(function(){return Ve}));var r,i,o,a,s,u,c,d,f,g,l,h,p,v,m,_,w,y,b,k,C,E,x,I,A,S,T=t("475a"),R=12e4,M=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return n._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>R&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=T["editor"].createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then((function(n){e=n})).then((function(e){return n._worker.withSyncedResources(t)})).then((function(n){return e}))},e}();(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(r||(r={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(i||(i={})),function(e){function n(e,n){return e===Number.MAX_VALUE&&(e=i.MAX_VALUE),n===Number.MAX_VALUE&&(n=i.MAX_VALUE),{line:e,character:n}}function t(e){var n=e;return fe.objectLiteral(n)&&fe.uinteger(n.line)&&fe.uinteger(n.character)}e.create=n,e.is=t}(o||(o={})),function(e){function n(e,n,t,r){if(fe.uinteger(e)&&fe.uinteger(n)&&fe.uinteger(t)&&fe.uinteger(r))return{start:o.create(e,n),end:o.create(t,r)};if(o.is(e)&&o.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+r+"]")}function t(e){var n=e;return fe.objectLiteral(n)&&o.is(n.start)&&o.is(n.end)}e.create=n,e.is=t}(a||(a={})),function(e){function n(e,n){return{uri:e,range:n}}function t(e){var n=e;return fe.defined(n)&&a.is(n.range)&&(fe.string(n.uri)||fe.undefined(n.uri))}e.create=n,e.is=t}(s||(s={})),function(e){function n(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}}function t(e){var n=e;return fe.defined(n)&&a.is(n.targetRange)&&fe.string(n.targetUri)&&(a.is(n.targetSelectionRange)||fe.undefined(n.targetSelectionRange))&&(a.is(n.originSelectionRange)||fe.undefined(n.originSelectionRange))}e.create=n,e.is=t}(u||(u={})),function(e){function n(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}}function t(e){var n=e;return fe.numberRange(n.red,0,1)&&fe.numberRange(n.green,0,1)&&fe.numberRange(n.blue,0,1)&&fe.numberRange(n.alpha,0,1)}e.create=n,e.is=t}(c||(c={})),function(e){function n(e,n){return{range:e,color:n}}function t(e){var n=e;return a.is(n.range)&&c.is(n.color)}e.create=n,e.is=t}(d||(d={})),function(e){function n(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}}function t(e){var n=e;return fe.string(n.label)&&(fe.undefined(n.textEdit)||y.is(n))&&(fe.undefined(n.additionalTextEdits)||fe.typedArray(n.additionalTextEdits,y.is))}e.create=n,e.is=t}(f||(f={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(g||(g={})),function(e){function n(e,n,t,r,i){var o={startLine:e,endLine:n};return fe.defined(t)&&(o.startCharacter=t),fe.defined(r)&&(o.endCharacter=r),fe.defined(i)&&(o.kind=i),o}function t(e){var n=e;return fe.uinteger(n.startLine)&&fe.uinteger(n.startLine)&&(fe.undefined(n.startCharacter)||fe.uinteger(n.startCharacter))&&(fe.undefined(n.endCharacter)||fe.uinteger(n.endCharacter))&&(fe.undefined(n.kind)||fe.string(n.kind))}e.create=n,e.is=t}(l||(l={})),function(e){function n(e,n){return{location:e,message:n}}function t(e){var n=e;return fe.defined(n)&&s.is(n.location)&&fe.string(n.message)}e.create=n,e.is=t}(h||(h={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(p||(p={})),function(e){e.Unnecessary=1,e.Deprecated=2}(v||(v={})),function(e){function n(e){var n=e;return void 0!==n&&null!==n&&fe.string(n.href)}e.is=n}(m||(m={})),function(e){function n(e,n,t,r,i,o){var a={range:e,message:n};return fe.defined(t)&&(a.severity=t),fe.defined(r)&&(a.code=r),fe.defined(i)&&(a.source=i),fe.defined(o)&&(a.relatedInformation=o),a}function t(e){var n,t=e;return fe.defined(t)&&a.is(t.range)&&fe.string(t.message)&&(fe.number(t.severity)||fe.undefined(t.severity))&&(fe.integer(t.code)||fe.string(t.code)||fe.undefined(t.code))&&(fe.undefined(t.codeDescription)||fe.string(null===(n=t.codeDescription)||void 0===n?void 0:n.href))&&(fe.string(t.source)||fe.undefined(t.source))&&(fe.undefined(t.relatedInformation)||fe.typedArray(t.relatedInformation,h.is))}e.create=n,e.is=t}(_||(_={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return fe.defined(t)&&t.length>0&&(i.arguments=t),i}function t(e){var n=e;return fe.defined(n)&&fe.string(n.title)&&fe.string(n.command)}e.create=n,e.is=t}(w||(w={})),function(e){function n(e,n){return{range:e,newText:n}}function t(e,n){return{range:{start:e,end:e},newText:n}}function r(e){return{range:e,newText:""}}function i(e){var n=e;return fe.objectLiteral(n)&&fe.string(n.newText)&&a.is(n.range)}e.replace=n,e.insert=t,e.del=r,e.is=i}(y||(y={})),function(e){function n(e,n,t){var r={label:e};return void 0!==n&&(r.needsConfirmation=n),void 0!==t&&(r.description=t),r}function t(e){var n=e;return void 0!==n&&fe.objectLiteral(n)&&fe.string(n.label)&&(fe.boolean(n.needsConfirmation)||void 0===n.needsConfirmation)&&(fe.string(n.description)||void 0===n.description)}e.create=n,e.is=t}(b||(b={})),function(e){function n(e){var n=e;return"string"===typeof n}e.is=n}(k||(k={})),function(e){function n(e,n,t){return{range:e,newText:n,annotationId:t}}function t(e,n,t){return{range:{start:e,end:e},newText:n,annotationId:t}}function r(e,n){return{range:e,newText:"",annotationId:n}}function i(e){var n=e;return y.is(n)&&(b.is(n.annotationId)||k.is(n.annotationId))}e.replace=n,e.insert=t,e.del=r,e.is=i}(C||(C={})),function(e){function n(e,n){return{textDocument:e,edits:n}}function t(e){var n=e;return fe.defined(n)&&L.is(n.textDocument)&&Array.isArray(n.edits)}e.create=n,e.is=t}(E||(E={})),function(e){function n(e,n,t){var r={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(r.options=n),void 0!==t&&(r.annotationId=t),r}function t(e){var n=e;return n&&"create"===n.kind&&fe.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||fe.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||fe.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||k.is(n.annotationId))}e.create=n,e.is=t}(x||(x={})),function(e){function n(e,n,t,r){var i={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(i.options=t),void 0!==r&&(i.annotationId=r),i}function t(e){var n=e;return n&&"rename"===n.kind&&fe.string(n.oldUri)&&fe.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||fe.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||fe.boolean(n.options.ignoreIfExists)))&&(void 0===n.annotationId||k.is(n.annotationId))}e.create=n,e.is=t}(I||(I={})),function(e){function n(e,n,t){var r={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(r.options=n),void 0!==t&&(r.annotationId=t),r}function t(e){var n=e;return n&&"delete"===n.kind&&fe.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||fe.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||fe.boolean(n.options.ignoreIfNotExists)))&&(void 0===n.annotationId||k.is(n.annotationId))}e.create=n,e.is=t}(A||(A={})),function(e){function n(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every((function(e){return fe.string(e.kind)?x.is(e)||I.is(e)||A.is(e):E.is(e)})))}e.is=n}(S||(S={}));var D,P,L,F,j,N,O,U,W,V,H,K,z,X,B,J,$,q,Q,G,Y,Z,ee,ne,te,re,ie,oe,ae,se,ue=function(){function e(e,n){this.edits=e,this.changeAnnotations=n}return e.prototype.insert=function(e,n,t){var r,i;if(void 0===t?r=y.insert(e,n):k.is(t)?(i=t,r=C.insert(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=C.insert(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,n,t){var r,i;if(void 0===t?r=y.replace(e,n):k.is(t)?(i=t,r=C.replace(e,n,t)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(t),r=C.replace(e,n,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,n){var t,r;if(void 0===n?t=y.del(e):k.is(n)?(r=n,t=C.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(n),t=C.del(e,r)),this.edits.push(t),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ce=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,n){var t;if(k.is(e)?t=e:(t=this.nextId(),n=e),void 0!==this._annotations[t])throw new Error("Id "+t+" is already in use.");if(void 0===n)throw new Error("No annotation provided for id "+t);return this._annotations[t]=n,this._size++,t},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var n=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ce(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(E.is(e)){var t=new ue(e.edits,n._changeAnnotations);n._textEditChanges[e.textDocument.uri]=t}}))):e.changes&&Object.keys(e.changes).forEach((function(t){var r=new ue(e.changes[t]);n._textEditChanges[t]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(L.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n={uri:e.uri,version:e.version},t=this._textEditChanges[n.uri];if(!t){var r=[],i={textDocument:n,edits:r};this._workspaceEdit.documentChanges.push(i),t=new ue(r,this._changeAnnotations),this._textEditChanges[n.uri]=t}return t}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");t=this._textEditChanges[e];if(!t){r=[];this._workspaceEdit.changes[e]=r,t=new ue(r),this._textEditChanges[e]=t}return t},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ce,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(b.is(n)||k.is(n)?r=n:t=n,void 0===r?i=x.create(e,t):(o=k.is(r)?r:this._changeAnnotations.manage(r),i=x.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,n,t,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(b.is(t)||k.is(t)?i=t:r=t,void 0===i?o=I.create(e,n,r):(a=k.is(i)?i:this._changeAnnotations.manage(i),o=I.create(e,n,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,n,t){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(b.is(n)||k.is(n)?r=n:t=n,void 0===r?i=A.create(e,t):(o=k.is(r)?r:this._changeAnnotations.manage(r),i=A.create(e,t,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function n(e){return{uri:e}}function t(e){var n=e;return fe.defined(n)&&fe.string(n.uri)}e.create=n,e.is=t})(D||(D={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return fe.defined(n)&&fe.string(n.uri)&&fe.integer(n.version)}e.create=n,e.is=t}(P||(P={})),function(e){function n(e,n){return{uri:e,version:n}}function t(e){var n=e;return fe.defined(n)&&fe.string(n.uri)&&(null===n.version||fe.integer(n.version))}e.create=n,e.is=t}(L||(L={})),function(e){function n(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}}function t(e){var n=e;return fe.defined(n)&&fe.string(n.uri)&&fe.string(n.languageId)&&fe.integer(n.version)&&fe.string(n.text)}e.create=n,e.is=t}(F||(F={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(j||(j={})),function(e){function n(n){var t=n;return t===e.PlainText||t===e.Markdown}e.is=n}(j||(j={})),function(e){function n(e){var n=e;return fe.objectLiteral(e)&&j.is(n.kind)&&fe.string(n.value)}e.is=n}(N||(N={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(O||(O={})),function(e){e.PlainText=1,e.Snippet=2}(U||(U={})),function(e){e.Deprecated=1}(W||(W={})),function(e){function n(e,n,t){return{newText:e,insert:n,replace:t}}function t(e){var n=e;return n&&fe.string(n.newText)&&a.is(n.insert)&&a.is(n.replace)}e.create=n,e.is=t}(V||(V={})),function(e){e.asIs=1,e.adjustIndentation=2}(H||(H={})),function(e){function n(e){return{label:e}}e.create=n}(K||(K={})),function(e){function n(e,n){return{items:e||[],isIncomplete:!!n}}e.create=n}(z||(z={})),function(e){function n(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function t(e){var n=e;return fe.string(n)||fe.objectLiteral(n)&&fe.string(n.language)&&fe.string(n.value)}e.fromPlainText=n,e.is=t}(X||(X={})),function(e){function n(e){var n=e;return!!n&&fe.objectLiteral(n)&&(N.is(n.contents)||X.is(n.contents)||fe.typedArray(n.contents,X.is))&&(void 0===e.range||a.is(e.range))}e.is=n}(B||(B={})),function(e){function n(e,n){return n?{label:e,documentation:n}:{label:e}}e.create=n}(J||(J={})),function(e){function n(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return fe.defined(n)&&(i.documentation=n),fe.defined(t)?i.parameters=t:i.parameters=[],i}e.create=n}($||($={})),function(e){e.Text=1,e.Read=2,e.Write=3}(q||(q={})),function(e){function n(e,n){var t={range:e};return fe.number(n)&&(t.kind=n),t}e.create=n}(Q||(Q={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(G||(G={})),function(e){e.Deprecated=1}(Y||(Y={})),function(e){function n(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}e.create=n}(Z||(Z={})),function(e){function n(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function t(e){var n=e;return n&&fe.string(n.name)&&fe.number(n.kind)&&a.is(n.range)&&a.is(n.selectionRange)&&(void 0===n.detail||fe.string(n.detail))&&(void 0===n.deprecated||fe.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))&&(void 0===n.tags||Array.isArray(n.tags))}e.create=n,e.is=t}(ee||(ee={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(ne||(ne={})),function(e){function n(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t}function t(e){var n=e;return fe.defined(n)&&fe.typedArray(n.diagnostics,_.is)&&(void 0===n.only||fe.typedArray(n.only,fe.string))}e.create=n,e.is=t}(te||(te={})),function(e){function n(e,n,t){var r={title:e},i=!0;return"string"===typeof n?(i=!1,r.kind=n):w.is(n)?r.command=n:r.edit=n,i&&void 0!==t&&(r.kind=t),r}function t(e){var n=e;return n&&fe.string(n.title)&&(void 0===n.diagnostics||fe.typedArray(n.diagnostics,_.is))&&(void 0===n.kind||fe.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||w.is(n.command))&&(void 0===n.isPreferred||fe.boolean(n.isPreferred))&&(void 0===n.edit||S.is(n.edit))}e.create=n,e.is=t}(re||(re={})),function(e){function n(e,n){var t={range:e};return fe.defined(n)&&(t.data=n),t}function t(e){var n=e;return fe.defined(n)&&a.is(n.range)&&(fe.undefined(n.command)||w.is(n.command))}e.create=n,e.is=t}(ie||(ie={})),function(e){function n(e,n){return{tabSize:e,insertSpaces:n}}function t(e){var n=e;return fe.defined(n)&&fe.uinteger(n.tabSize)&&fe.boolean(n.insertSpaces)}e.create=n,e.is=t}(oe||(oe={})),function(e){function n(e,n,t){return{range:e,target:n,data:t}}function t(e){var n=e;return fe.defined(n)&&a.is(n.range)&&(fe.undefined(n.target)||fe.string(n.target))}e.create=n,e.is=t}(ae||(ae={})),function(e){function n(e,n){return{range:e,parent:n}}function t(n){var t=n;return void 0!==t&&a.is(t.range)&&(void 0===t.parent||e.is(t.parent))}e.create=n,e.is=t}(se||(se={}));var de;(function(e){function n(e,n,t,r){return new ge(e,n,t,r)}function t(e){var n=e;return!!(fe.defined(n)&&fe.string(n.uri)&&(fe.undefined(n.languageId)||fe.string(n.languageId))&&fe.uinteger(n.lineCount)&&fe.func(n.getText)&&fe.func(n.positionAt)&&fe.func(n.offsetAt))}function r(e,n){for(var t=e.getText(),r=i(n,(function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t})),o=t.length,a=r.length-1;a>=0;a--){var s=r[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");t=t.substring(0,u)+s.newText+t.substring(c,t.length),o=u}return t}function i(e,n){if(e.length<=1)return e;var t=e.length/2|0,r=e.slice(0,t),o=e.slice(t);i(r,n),i(o,n);var a=0,s=0,u=0;while(a<r.length&&s<o.length){var c=n(r[a],o[s]);e[u++]=c<=0?r[a++]:o[s++]}while(a<r.length)e[u++]=r[a++];while(s<o.length)e[u++]=o[s++];return e}e.create=n,e.is=t,e.applyEdits=r})(de||(de={}));var fe,ge=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,r=n.length;if(0===r)return o.create(0,e);while(t<r){var i=Math.floor((t+r)/2);n[i]>e?r=i:t=i+1}var a=t-1;return o.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();(function(e){var n=Object.prototype.toString;function t(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===n.call(e)}function a(e){return"[object Number]"===n.call(e)}function s(e,t,r){return"[object Number]"===n.call(e)&&t<=e&&e<=r}function u(e){return"[object Number]"===n.call(e)&&-2147483648<=e&&e<=2147483647}function c(e){return"[object Number]"===n.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===n.call(e)}function f(e){return null!==e&&"object"===typeof e}function g(e,n){return Array.isArray(e)&&e.every(n)}e.defined=t,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.numberRange=s,e.integer=u,e.uinteger=c,e.func=d,e.objectLiteral=f,e.typedArray=g})(fe||(fe={}));var le=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getLanguageId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(n),n=window.setTimeout((function(){return r._doValidate(e.uri,t)}),500)})),r._doValidate(e.uri,t))},o=function(e){T["editor"].setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(T["editor"].onDidCreateModel(i)),this._disposables.push(T["editor"].onWillDisposeModel(o)),this._disposables.push(T["editor"].onDidChangeModelLanguage((function(e){o(e.model),i(e.model)}))),t.onDidChange((function(e){T["editor"].getModels().forEach((function(e){e.getLanguageId()===r._languageId&&(o(e),i(e))}))})),this._disposables.push({dispose:function(){for(var e in r._listener)r._listener[e].dispose()}}),T["editor"].getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(n){return n.doValidation(e.toString())})).then((function(t){var r=t.map((function(n){return pe(e,n)})),i=T["editor"].getModel(e);i&&i.getLanguageId()===n&&T["editor"].setModelMarkers(i,n,r)})).then(void 0,(function(e){console.error(e)}))},e}();function he(e){switch(e){case p.Error:return T["MarkerSeverity"].Error;case p.Warning:return T["MarkerSeverity"].Warning;case p.Information:return T["MarkerSeverity"].Info;case p.Hint:return T["MarkerSeverity"].Hint;default:return T["MarkerSeverity"].Info}}function pe(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:he(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}function ve(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function me(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function _e(e){if(e)return new T["Range"](e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function we(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function ye(e){var n=T["languages"].CompletionItemKind;switch(e){case O.Text:return n.Text;case O.Method:return n.Method;case O.Function:return n.Function;case O.Constructor:return n.Constructor;case O.Field:return n.Field;case O.Variable:return n.Variable;case O.Class:return n.Class;case O.Interface:return n.Interface;case O.Module:return n.Module;case O.Property:return n.Property;case O.Unit:return n.Unit;case O.Value:return n.Value;case O.Enum:return n.Enum;case O.Keyword:return n.Keyword;case O.Snippet:return n.Snippet;case O.Color:return n.Color;case O.File:return n.File;case O.Reference:return n.Reference}return n.Property}function be(e){if(e)return{range:_e(e.range),text:e.newText}}function ke(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Ce=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return["/","-",":"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doComplete(i.toString(),ve(n))})).then((function(t){if(t){var r=e.getWordUntilPosition(n),i=new T["Range"](n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map((function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:ke(e.command),range:i,kind:ye(e.kind)};return e.textEdit&&(we(e.textEdit)?n.range={insert:_e(e.textEdit.insert),replace:_e(e.textEdit.replace)}:n.range=_e(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(be)),e.insertTextFormat===U.Snippet&&(n.insertTextRules=T["languages"].CompletionItemInsertTextRule.InsertAsSnippet),n}));return{isIncomplete:t.isIncomplete,suggestions:o}}}))},e}();function Ee(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function xe(e){return"string"===typeof e?{value:e}:Ee(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Ie(e){if(e)return Array.isArray(e)?e.map(xe):[xe(e)]}var Ae=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),ve(n))})).then((function(e){if(e)return{range:_e(e.range),contents:Ie(e.contents)}}))},e}();function Se(e){switch(e){case q.Read:return T["languages"].DocumentHighlightKind.Read;case q.Write:return T["languages"].DocumentHighlightKind.Write;case q.Text:return T["languages"].DocumentHighlightKind.Text}return T["languages"].DocumentHighlightKind.Text}var Te=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),ve(n))})).then((function(e){if(e)return e.map((function(e){return{range:_e(e.range),kind:Se(e.kind)}}))}))},e}();function Re(e){return{uri:T["Uri"].parse(e.uri),range:_e(e.range)}}var Me=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),ve(n))})).then((function(e){if(e)return[Re(e)]}))},e}(),De=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),ve(n))})).then((function(e){if(e)return e.map(Re)}))},e}();function Pe(e){if(e&&e.changes){var n=[];for(var t in e.changes)for(var r=T["Uri"].parse(t),i=0,o=e.changes[t];i<o.length;i++){var a=o[i];n.push({resource:r,edit:{range:_e(a.range),text:a.newText}})}return{edits:n}}}var Le=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,n,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),ve(n),t)})).then((function(e){return Pe(e)}))},e}();function Fe(e){var n=T["languages"].SymbolKind;switch(e){case G.File:return n.Array;case G.Module:return n.Module;case G.Namespace:return n.Namespace;case G.Package:return n.Package;case G.Class:return n.Class;case G.Method:return n.Method;case G.Property:return n.Property;case G.Field:return n.Field;case G.Constructor:return n.Constructor;case G.Enum:return n.Enum;case G.Interface:return n.Interface;case G.Function:return n.Function;case G.Variable:return n.Variable;case G.Constant:return n.Constant;case G.String:return n.String;case G.Number:return n.Number;case G.Boolean:return n.Boolean;case G.Array:return n.Array}return n.Function}var je=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentSymbols(t.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:Fe(e.kind),tags:[],range:_e(e.location.range),selectionRange:_e(e.location.range)}}))}))},e}(),Ne=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return this._worker(t).then((function(e){return e.findDocumentColors(t.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:_e(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),n.color,me(n.range))})).then((function(e){if(e)return e.map((function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=be(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(be)),n}))}))},e}(),Oe=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getFoldingRanges(r.toString(),n)})).then((function(e){if(e)return e.map((function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=Ue(e.kind)),n}))}))},e}();function Ue(e){switch(e){case g.Comment:return T["languages"].FoldingRangeKind.Comment;case g.Imports:return T["languages"].FoldingRangeKind.Imports;case g.Region:return T["languages"].FoldingRangeKind.Region}}var We=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,n,t){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),n.map(ve))})).then((function(e){if(e)return e.map((function(e){var n=[];while(e)n.push({range:_e(e.range)}),e=e.parent;return n}))}))},e}();function Ve(e){var n=[],t=[],r=new M(e);n.push(r);var i=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.getLanguageServiceWorker.apply(r,e)};function o(){var n=e.languageId,r=e.modeConfiguration;Ke(t),r.completionItems&&t.push(T["languages"].registerCompletionItemProvider(n,new Ce(i))),r.hovers&&t.push(T["languages"].registerHoverProvider(n,new Ae(i))),r.documentHighlights&&t.push(T["languages"].registerDocumentHighlightProvider(n,new Te(i))),r.definitions&&t.push(T["languages"].registerDefinitionProvider(n,new Me(i))),r.references&&t.push(T["languages"].registerReferenceProvider(n,new De(i))),r.documentSymbols&&t.push(T["languages"].registerDocumentSymbolProvider(n,new je(i))),r.rename&&t.push(T["languages"].registerRenameProvider(n,new Le(i))),r.colors&&t.push(T["languages"].registerColorProvider(n,new Ne(i))),r.foldingRanges&&t.push(T["languages"].registerFoldingRangeProvider(n,new Oe(i))),r.diagnostics&&t.push(new le(n,i,e)),r.selectionRanges&&t.push(T["languages"].registerSelectionRangeProvider(n,new We(i)))}return o(),n.push(He(t)),He(n)}function He(e){return{dispose:function(){return Ke(e)}}}function Ke(e){while(e.length)e.pop().dispose()}}}]);
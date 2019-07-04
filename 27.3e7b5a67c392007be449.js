(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/support/FeatureSet":1406,"esri/layers/KMLLayer":1420,"esri/layers/support/kmlUtils":1714,"esri/layers/support/KMLSublayer":2362})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[27,106],{1406:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1),t(2),t(42),t(84),t(26),t(9),t(14),t(0),t(39),t(71),t(548)],void 0===(n=function(e,r,t,o,n,i,s,l,a,u,p,y,f){var c=new s.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),d=function(e){function r(r){var t=e.call(this,r)||this;return t.displayFieldName=null,t.exceededTransferLimit=!1,t.features=[],t.fields=null,t.geometryType=null,t.hasM=!1,t.hasZ=!1,t.queryGeometry=null,t.spatialReference=null,t}return o(r,e),r.prototype.readFeatures=function(e,r){for(var t=p.fromJSON(r.spatialReference),o=[],n=0;n<e.length;n++){var s=e[n],l=i.fromJSON(s),u=s.geometry&&s.geometry.spatialReference;a.isSome(l.geometry)&&!u&&(l.geometry.spatialReference=t),o.push(l)}return o},r.prototype.writeGeometryType=function(e,r,t,o){if(e)c.write(e,r,t,o);else{var n=this.features;if(n)for(var i=0,s=n;i<s.length;i++){var l=s[i];if(l&&a.isSome(l.geometry))return void c.write(l.geometry.type,r,t,o)}}},r.prototype.writeSpatialReference=function(e,r,t,o){if(e)r.spatialReference=e.toJSON();else{var n=this.features;if(n)for(var i=0,s=n;i<s.length;i++){var l=s[i];l&&a.isSome(l.geometry)&&l.geometry.spatialReference&&(r.spatialReference=l.geometry.spatialReference.toJSON())}}},r.prototype.toJSON=function(e){var r=this.write(null);if(r.features&&Array.isArray(e)&&e.length>0)for(var t=0;t<r.features.length;t++){var o=r.features[t];if(o.geometry){var n=e&&e[t];o.geometry=n&&n.toJSON()||o.geometry}}return r},r.prototype.quantize=function(e){for(var r=e.scale,t=r[0],o=r[1],n=e.translate,i=n[0],s=n[1],l=this.features,u=this._getQuantizationFunction(this.geometryType,function(e){return Math.round((e-i)/t)},function(e){return Math.round((s-e)/o)}),p=0,y=l.length;p<y;p++)u(a.expect(l[p].geometry))||(l.splice(p,1),p--,y--);return this.transform=e,this},r.prototype.unquantize=function(){var e=this,r=e.geometryType,t=e.features,o=e.transform;if(!o)return this;for(var n=o.translate,i=n[0],s=n[1],l=o.scale,u=l[0],p=l[1],y=this._getHydrationFunction(r,function(e){return e*u+i},function(e){return s-e*p}),f=0,c=t;f<c.length;f++){var d=c[f].geometry;a.isSome(d)&&y(d)}return this},r.prototype._quantizePoints=function(e,r,t){for(var o,n,i=[],s=0,l=e.length;s<l;s++){var a=e[s];if(s>0){var u=r(a[0]),p=t(a[1]);u===o&&p===n||(i.push([u-o,p-n]),o=u,n=p)}else o=r(a[0]),n=t(a[1]),i.push([o,n])}return i.length>0?i:null},r.prototype._getQuantizationFunction=function(e,r,t){var o=this;return"point"===e?function(e){return e.x=r(e.x),e.y=t(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=y.isPolygon(e)?e.rings:e.paths,i=[],s=0,l=n.length;s<l;s++){var a=n[s],u=o._quantizePoints(a,r,t);u&&i.push(u)}return i.length>0?(y.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var n;return(n=o._quantizePoints(e.points,r,t)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:void 0},r.prototype._getHydrationFunction=function(e,r,t){return"point"===e?function(e){e.x=r(e.x),e.y=t(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var o,n,i=y.isPolygon(e)?e.rings:e.paths,s=0,l=i.length;s<l;s++)for(var a=i[s],u=0,p=a.length;u<p;u++){var f=a[u];u>0?(o+=f[0],n+=f[1]):(o=f[0],n=f[1]),f[0]=r(o),f[1]=t(n)}}:"extent"===e?function(e){e.xmin=r(e.xmin),e.ymin=t(e.ymin),e.xmax=r(e.xmax),e.ymax=t(e.ymax)}:"multipoint"===e?function(e){for(var o,n,i=e.points,s=0,l=i.length;s<l;s++){var a=i[s];s>0?(o+=a[0],n+=a[1]):(o=a[0],n=a[1]),a[0]=r(o),a[1]=t(n)}}:void 0},t([u.property({type:String,json:{write:!0}})],r.prototype,"displayFieldName",void 0),t([u.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],r.prototype,"exceededTransferLimit",void 0),t([u.property({type:[i],json:{write:!0}})],r.prototype,"features",void 0),t([u.reader("features")],r.prototype,"readFeatures",null),t([u.property({type:[f],json:{write:!0}})],r.prototype,"fields",void 0),t([u.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:c.read}}})],r.prototype,"geometryType",void 0),t([u.writer("geometryType")],r.prototype,"writeGeometryType",null),t([u.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],r.prototype,"hasM",void 0),t([u.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],r.prototype,"hasZ",void 0),t([u.property({types:n.geometryTypes,json:{read:y.fromJSON,write:!0}})],r.prototype,"queryGeometry",void 0),t([u.property({type:p,json:{write:!0}})],r.prototype,"spatialReference",void 0),t([u.writer("spatialReference")],r.prototype,"writeSpatialReference",null),t([u.property({json:{write:!0}})],r.prototype,"transform",void 0),t([u.subclass("esri.tasks.support.FeatureSet")],r)}(u.declared(l));return d.prototype.toJSON.isDefaultToJSON=!0,d||(d={}),d}.apply(null,o))||(e.exports=n)},1420:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(7),t(2),t(1),t(10),t(12),t(29),t(212),t(15),t(14),t(8),t(0),t(39),t(118),t(258),t(257),t(558),t(259),t(2362),t(1714)],void 0===(n=function(e,r,o,n,i,s,l,a,u,p,y,f,c,d,h,v,b,m,g,w,S){return function(e){function r(r,t){var o=e.call(this)||this;return o._visibleFolders=[],o.allSublayers=new u({root:o,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),o.outSpatialReference=d.WGS84,o.path=null,o.operationalLayerType="KML",o.sublayers=null,o.type="kml",o.url=null,o.watch("sublayers",function(e,r){r&&r.forEach(function(e){e.parent=null,e.layer=null}),e&&e.forEach(function(e){e.parent=o,e.layer=o})},!0),o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){return S.sublayersFromJSON(w,r,t,this._visibleFolders)},r.prototype.writeSublayers=function(e,r,t,o){for(var n=[],i=e.toArray();i.length;){var s=i[0];s.networkLink||(s.visible&&n.push(s.id),s.sublayers&&i.push.apply(i,s.sublayers.toArray())),i.shift()}r.visibleFolders=n},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[],t=function(e){e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(function(){return r._fetchService(t)})),this.when()},r.prototype.importLayerViewModule=function(e){return l(this,void 0,void 0,function(){return s(this,function(r){switch(e.type){case"2d":return[2,f.create(function(e){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(75)]).then(function(){var r=[t(2450)];e.apply(null,r)}.bind(this)).catch(t.oe)})];case"3d":return[2,f.reject(new p("kml-layer:view-not-supported","KMLLayer is only supported in 2D"))]}return[2]})})},r.prototype._fetchService=function(e){return l(this,void 0,void 0,function(){var r,t,o=this;return s(this,function(n){switch(n.label){case 0:return[4,f.resolve().then(function(){return o.resourceInfo?{ssl:!1,data:o.resourceInfo}:S.fetchService(o.url,o.outSpatialReference,o.refreshInterval,e)})];case 1:return r=n.sent(),(t=S.parseKML(r.data))&&this.read(t,{origin:"service"}),[2]}})})},i([c.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([c.property({type:d})],r.prototype,"outSpatialReference",void 0),i([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),i([c.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([c.property({type:["KML"]})],r.prototype,"operationalLayerType",void 0),i([c.property({type:a.ofType(w),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),i([c.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),i([c.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),i([c.writer("sublayers")],r.prototype,"writeSublayers",null),i([c.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([c.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),i([c.property()],r.prototype,"url",void 0),i([c.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),i([c.subclass("esri.layers.KMLLayer")],r)}(c.declared(h,v,b,m,g))}.apply(null,o))||(e.exports=n)},1714:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(12),t(7),t(97),t(354),t(48),t(13),t(356),t(1406)],void 0===(n=function(e,r,t,o,n,i,s,l,a,u,p){function y(e,r,t){t.forEach(function(t){e.set(t.attributes[r],t)})}Object.defineProperty(r,"__esModule",{value:!0});var f={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=function(e){var r=e.folders.slice(),t=new Map,o=new Map,n=new Map,i=new Map,s=new Map,l={esriGeometryPoint:o,esriGeometryPolyline:n,esriGeometryPolygon:i};return e.featureCollection.layers.forEach(function(e){var r=a.clone(e);r.featureSet.features=[];var s=e.featureSet.geometryType;t.set(s,r);var l=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?y(o,l,e.featureSet.features):"esriGeometryPolyline"===s?y(n,l,e.featureSet.features):"esriGeometryPolygon"===s&&y(i,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){s.set(e.id,e)}),e.folders.forEach(function(t){t.networkLinkIds.forEach(function(o){var n=function(e,r,t){var o=function(e,r){var t;return r.some(function(r){return r.id===e&&(t=r,!0)}),t}(e,t);return o&&(o.parentFolderId=r,o.networkLink=o),o}(o,t.id,e.networkLinks);n&&r.push(n)})}),r.forEach(function(e){e.featureInfos&&(e.points=a.clone(t.get("esriGeometryPoint")),e.polylines=a.clone(t.get("esriGeometryPolyline")),e.polygons=a.clone(t.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=l[r.type].get(r.id);t&&e[f[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var o=s.get(r.id);o&&e.mapImages.push(o)}}))}),{folders:e.folders,sublayers:r}},r.fetchService=function(e,r,t,o){var n=i.kmlServiceUrl;return l(n,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:o})},r.sublayersFromJSON=function(e,r,t,o){void 0===t&&(t=null),void 0===o&&(o=[]);var n=[],i={},s=r.sublayers,l=r.folders.map(function(e){return e.id});return s.forEach(function(r){var s=new e;if(t?s.read(r,t):s.read(r),o.length&&l.indexOf(s.id)>-1&&(s.visible=-1!==o.indexOf(s.id)),i[r.id]=s,null!=r.parentFolderId&&-1!==r.parentFolderId){var a=i[r.parentFolderId];a.sublayers||(a.sublayers=[]),a.sublayers.unshift(s)}else n.unshift(s)}),n},r.getGraphics=function(e){return o(this,void 0,void 0,function(){var r,o,n,i,l,a,y,f,c,d;return t(this,function(t){switch(t.label){case 0:r=p.fromJSON(e.featureSet),o=r.features,n=e.layerDefinition,i=u.fromJSON(n.drawingInfo.renderer),l=s.fromJSON(e.popupInfo),a=[],y=0,f=o,t.label=1;case 1:return y<f.length?(c=f[y],[4,i.getSymbolAsync(c)]):[3,4];case 2:d=t.sent(),c.symbol=d,c.popupTemplate=l,c.visible=!!c.attributes.visibility,a.push(c),t.label=3;case 3:return y++,[3,1];case 4:return[2,a]}})})}}.apply(null,o))||(e.exports=n)},2362:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(1),t(119),t(29),t(9),t(135),t(14),t(28),t(0),t(27),t(1714)],void 0===(n=function(e,r,t,o,n,i,s,l,a,u,p,y,f){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r}var n;return t(r,e),n=r,r.prototype.initialize=function(){var e=this;u.whenOnce(this,"networkLink").then(function(r){return u.whenTrueOnce(e,"visible")}).then(function(){return e.load()})},r.prototype.load=function(e){var r=this;if(this.networkLink){var t=a.isSome(e)?e.signal:null,o=this._fetchService(this._get("networkLink").href,t).then(function(e){var t=y.default(i.ofType(n),f.sublayersFromJSON(n,e));r.sublayers?r.sublayers.addMany(t):r.sublayers=t,r.layer&&r.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(o),this.when()}},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(r){return r.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r.layer}),this._sublayersHandles=[e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r.layer}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return y.default(i.ofType(n),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},r.prototype._fetchService=function(e,r){return f.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then(function(e){return f.parseKML(e.data)})},o([p.property()],r.prototype,"description",void 0),o([p.property()],r.prototype,"id",void 0),o([p.property({value:null})],r.prototype,"layer",null),o([p.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),o([p.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),o([p.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),o([p.cast("sublayers")],r.prototype,"castSublayers",null),o([p.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),o([p.property({value:!0})],r.prototype,"visible",null),o([p.reader("visible",["visibility"])],r.prototype,"readVisible",null),n=o([p.subclass("esri.layers.support.KMLSublayer")],r)}(p.declared(s,l))}.apply(null,o))||(e.exports=n)}}]);
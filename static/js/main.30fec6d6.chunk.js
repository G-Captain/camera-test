(this["webpackJsonpcamera-test"]=this["webpackJsonpcamera-test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/mapucze.620d59e7.jpg"},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(12),s=n.n(o),c=(n(20),n(3)),h=n(4),l=n(6),r=n(5),d=n(2),u=n(7),g=n(13),v=n.n(g),w=(n(21),a.a.PureComponent,{windowFocused:!1,mouseX:null,mouseY:null,initialize:function(){this.windowFocusCallbackHandler=this.windowFocusCallback.bind(this),window.addEventListener("focus",this.windowFocusCallbackHandler),this.windowBlurCallbackHandler=this.windowBlurCallback.bind(this),window.addEventListener("blur",this.windowBlurCallbackHandler),this.windowMouseMoveCallbackHandler=this.windowMouseMoveCallback.bind(this),window.addEventListener("mousemove",this.windowMouseMoveCallbackHandler)},dispose:function(e){window.removeEventListener("focus",this.windowFocusCallbackHandler),window.removeEventListener("blur",this.windowBlurCallbackHandler),window.removeEventListener("mousemove",this.windowMouseMoveCallbackHandler)},windowBlurCallback:function(){this.windowFocused=!1},windowFocusCallback:function(){this.windowFocused=!0},windowMouseMoveCallback:function(e){this.mouseX=e.pageX,this.mouseY=e.pageY},getMouseX:function(){return this.mouseX},getMouseY:function(){return this.mouseY},isWindowFocused:function(){return this.windowFocused}}),m=(n(22),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={info:""},n.x=0,n.y=0,n.width=0,n.height=0,n.angle=0,n.invertMode=!1,n.imageElement=null,n.lineWidth=5,n.strokeStyle="#ff0000",n.shadowColor="#ff0000",n.mousedown=!1,n.modifiedImage=!1,n.canvasElementReference=a.a.createRef(),n}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.reloadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props&&this.reloadImage()}},{key:"reloadImage",value:function(){var e=this,t=new Image;t.src=this.props.src,this.imageElement=t,t.onload=function(){window.devicePixelRatio;e.canvasElementReference.current.width=t.width,console.log("TCL: ImageCanvas -> image.onload -> this.props.boundWidth",e.props.boundWidth),e.canvasElementReference.current.height=t.height,console.log("TCL: ImageCanvas -> image.onload -> this.props.boundHeight",e.props.boundHeight),e.width=t.width,e.height=t.height,console.log(t.width,t.height),e.modifiedImage=!1,e.setState({info:t.width+" "+t.height}),e.canvasContext=e.canvasElementReference.current.getContext("2d"),e.props.onRender&&e.props.onRender(e.state.info)}}},{key:"setX",value:function(e){this.x=e}},{key:"setY",value:function(e){this.y=e}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"setWidth",value:function(e){this.width=e}},{key:"setHeight",value:function(e){this.height=e}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"center",value:function(){this.centerX(),this.centerY()}},{key:"centerX",value:function(){var e=(this.props.boundWidth-this.getWidth())/2;this.setX(e)}},{key:"centerY",value:function(){var e=(this.props.boundHeight-this.getHeight())/2;this.setY(e)}},{key:"scale",value:function(e){}},{key:"setXWithBounds",value:function(e){e=Math.min(e,0),e=Math.max(e,this.props.boundWidth-this.getWidth()),this.setX(e)}},{key:"setYWithBounds",value:function(e){e=Math.min(e,0),e=Math.max(e,this.props.boundHeight-this.getHeight()),this.setY(e)}},{key:"redraw",value:function(){this.canvasContext.clearRect(0,0,this.canvasContext.canvas.width,this.canvasContext.canvas.height),this.canvasContext.save();var e=window.devicePixelRatio,t=this.angle*Math.PI/180,n=(this.angle+90)*Math.PI/180,i=Math.abs(Math.cos(t)*this.width)+Math.abs(Math.sin(t)*this.height),a=Math.abs(Math.cos(t)*this.height)+Math.abs(Math.sin(t)*this.width),o=Math.cos(t)*this.x+Math.sin(t)*this.y,s=Math.cos(n)*this.x+Math.sin(n)*this.y,c=0,h=0;0===this.angle&&(c=o,h=s),90===this.angle&&(c=o,h=s-a),180===this.angle&&(c=o-i,h=s-a),270===this.angle&&(c=o-i,h=s),this.canvasContext.rotate(this.angle*Math.PI/180),this.canvasContext.translate(c,h);var l=+getComputedStyle(this.canvasContext.canvas).getPropertyValue("width").slice(0,-2);console.log("TCL: ImageCanvas -> redraw -> this.canvasContext",this.canvasContext);var r=+getComputedStyle(this.canvasContext.canvas).getPropertyValue("height").slice(0,-2);console.log("TCL: ImageCanvas -> redraw -> style_height style_width",r,l),console.log(window),this.canvasContext.drawImage(this.imageElement,0,0,this.imageElement.width,this.imageElement.height,0,0,this.imageElement.width*e,e*this.imageElement.height),this.canvasElementReference.current.style.height=2*this.props.boundHeight,this.canvasElementReference.current.style.width=this.props.boundWidth,this.canvasContext.scale(2,0,0,2,0,0),console.log("TCL: ImageCanvas -> redraw -> this.imageElement.width/window.innerWidth,0,0, this.imageElement.height/window.innerHeight,0,0",this.imageElement.width/window.innerWidth,0,0,this.imageElement.height/window.innerHeight,0,0),!0===this.invertMode&&(this.canvasContext.globalCompositeOperation="difference",this.canvasContext.fillStyle="white",this.canvasContext.fillRect(0,0,i,a)),console.log("TCL: ImageCanvas -> redraw -> this.canvasContext.backingStorePixelRatio",this.canvasContext.backingStorePixelRatio)}},{key:"fitToBounds",value:function(){var e=this.props.padding||0,t=(this.props.boundWidth-e)/this.imageElement.width,n=(this.props.boundHeight-e)/this.imageElement.height,i=Math.min(1,t,n);this.scale(i)}},{key:"isZoomOutAvailable",value:function(){return this.getWidth()>this.props.boundWidth||this.getHeight()>this.props.boundHeight}},{key:"rotate",value:function(e){this.angle+=e,this.angle>270&&(this.angle=0),this.angle<0&&(this.angle=270);var t=this.width,n=this.height;this.width=n,this.height=t,this.center()}},{key:"rotateRight",value:function(){this.rotate(90)}},{key:"rotateLeft",value:function(){this.rotate(-90)}},{key:"zoom",value:function(e,t){if(e<1&&!1===this.isZoomOutAvailable())return!1;this.scale(e);var n=e-1;if(this.getWidth()>this.props.boundWidth&&!0===t){var i=this.getX(),a=i-(w.getMouseX()-i)*n;this.setXWithBounds(a)}else this.centerX();if(this.getHeight()>this.props.boundHeight&&!0===t){var o=this.getY(),s=o-(w.getMouseY()-o)*n;this.setYWithBounds(s)}else this.centerY()}},{key:"toggleInvertMode",value:function(){this.invertMode=!this.invertMode}},{key:"handleDrawingStart",value:function(e){var t=this.getMosuePositionOnCanvas(e);this.canvasContext.beginPath(),this.canvasContext.moveTo(t.x,t.y),this.canvasContext.save(),this.canvasContext.lineWidth=this.lineWidth,this.canvasContext.strokeStyle=this.strokeStyle,this.canvasContext.shadowColor=null,this.canvasContext.shadowBlur=null,this.canvasContext.fill(),this.mousedown=!0}},{key:"handleDrawingInProgress",value:function(e){if(this.mousedown){var t=this.getMosuePositionOnCanvas(e);this.canvasContext.lineTo(t.x,t.y),this.canvasContext.stroke()}}},{key:"handleDrawingEnd",value:function(){this.mousedown&&(this.canvasContext.shadowColor=this.shadowColor,this.canvasContext.shadowBlur=this.lineWidth/4,this.canvasContext.stroke()),this.modifiedImage=!0,this.mousedown=!1}},{key:"getMosuePositionOnCanvas",value:function(e){var t=e.clientX||e.touches[0].clientX,n=e.clientY||e.touches[0].clientY,i=e.target;return{x:t-i.offsetLeft,y:n-i.offsetTop}}},{key:"getModifiedImage",value:function(){if(!0===this.modifiedImage)return this.canvasElementReference.current.toDataURL("image/jpeg",.92)}},{key:"render",value:function(){return a.a.createElement("canvas",{draggable:"false",className:"image-canvas",ref:this.canvasElementReference})}}]),t}(a.a.PureComponent)),f=(n(23),function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={windowHeight:window.innerHeight,windowWidth:window.innerWidth,image:n(24)},console.log("TCL: TicketPhotoPreview -> constructor -> this.props.image",i.props.image),i.imageCanvasRenderCallback=i.imageCanvasRenderCallback.bind(Object(d.a)(i)),i.imageCanvasReference=a.a.createRef(),i}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.windowTouchStartCallback=this.windowTouchStartCallback.bind(this),window.addEventListener("touchstart",this.windowTouchStartCallback),this.windowTouchMoveCallback=this.windowTouchMoveCallback.bind(this),window.addEventListener("touchmove",this.windowTouchMoveCallback),this.windowTouchEndCallback=this.windowTouchEndCallback.bind(this),window.addEventListener("touchend",this.windowTouchEndCallback),this.orientationChangedCallback=this.orientationChangedCallback.bind(this),window.addEventListener("resize",this.orientationChangedCallback)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("touchstart",this.windowTouchStartCallback),window.removeEventListener("touchmove",this.windowTouchMoveCallback),window.removeEventListener("touchend",this.windowTouchEndCallback),window.removeEventListener("resize",this.orientationChangedCallback)}},{key:"orientationChangedCallback",value:function(){this.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}},{key:"imageCanvasRenderCallback",value:function(e){this.imageCanvasReference.current.fitToBounds(),this.imageCanvasReference.current.center(),this.imageCanvasReference.current.redraw(),this.props.setInfo(e,this.state.windowWidth,this.state.windowHeight)}},{key:"windowTouchStartCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingStart(e)}},{key:"windowTouchMoveCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingInProgress(e)}},{key:"windowTouchEndCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingEnd(),this.props.modifiedImage(this.imageCanvasReference.current.getModifiedImage())}},{key:"render",value:function(){return a.a.createElement("div",{className:"ticket-photo-preview-image-canvas-container"},a.a.createElement(m,{ref:this.imageCanvasReference,src:this.state.image,boundWidth:this.state.windowWidth,boundHeight:this.state.windowHeight,onRender:this.imageCanvasRenderCallback}))}}]),t}(a.a.PureComponent)),k=n(14),C=(n(30),a.a.PureComponent,n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={isLoading:!1,isProcessing:!1,image:null,isPaintModeEnabled:!1,ticketAttachmentTypes:[],selectedTicketAttachmentType:null,info:""},n.cancelButtonClickCallback=n.cancelButtonClickCallback.bind(Object(d.a)(n)),n.captureButtonClickCallback=n.captureButtonClickCallback.bind(Object(d.a)(n)),n.sendButtonClickCallback=n.sendButtonClickCallback.bind(Object(d.a)(n)),n.togglePaintModeButtonClickCallback=n.togglePaintModeButtonClickCallback.bind(Object(d.a)(n)),n.dismissButtonClickCallback=n.dismissButtonClickCallback.bind(Object(d.a)(n)),n.ticketPhotoPreviewGetModifiedImageCallback=n.ticketPhotoPreviewGetModifiedImageCallback.bind(Object(d.a)(n)),n.ticketPhotoTypeDialogTriggerSelectCallback=n.ticketPhotoTypeDialogTriggerSelectCallback.bind(Object(d.a)(n)),n.infoCallback=n.infoCallback.bind(Object(d.a)(n)),n.webcamImageReference=a.a.createRef(),n}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadTicketAttachmentTypes()}},{key:"componentWillUnmount",value:function(){this.createTicketCarImageCancelable&&this.createTicketCarImageCancelable.cancel(),this.getImageTicketAttachmentTypesCancelable&&this.getImageTicketAttachmentTypesCancelable.cancel()}},{key:"infoCallback",value:function(e,t,n){this.setState({info:e+" "+t+" "+n})}},{key:"loadTicketAttachmentTypes",value:function(){}},{key:"ticketPhotoTypeDialogTriggerSelectCallback",value:function(e){this.setState({selectedTicketAttachmentType:e}),localStorage.setItem("ticketPhotoPickerTicketAttachmentTypeId",e.id)}},{key:"ticketPhotoPreviewGetModifiedImageCallback",value:function(e){this.setState({image:e})}},{key:"cancelButtonClickCallback",value:function(e){this.props.onCancel()}},{key:"captureButtonClickCallback",value:function(){this.setState({image:this.webcamImageReference.current.getScreenshot()})}},{key:"dismissButtonClickCallback",value:function(){this.setState({image:null})}},{key:"togglePaintModeButtonClickCallback",value:function(){this.setState({isPaintModeEnabled:!this.state.isPaintModeEnabled})}},{key:"sendButtonClickCallback",value:function(){this.setState({isProcessing:!0,isPaintModeEnabled:!1})}},{key:"render",value:function(){return a.a.createElement(i.Fragment,null,!1===this.state.isLoading&&!1===this.state.isProcessing&&a.a.createElement(i.Fragment,null,a.a.createElement("div",{className:"ticket-photo-picker-header-container"},a.a.createElement("div",{className:"ticket-photo-picker-header"},"VER 21 DPI: ",window.devicePixelRatio," ",this.state.info)),a.a.createElement(i.Fragment,null,a.a.createElement(f,{image:this.state.image,paintMode:this.state.isPaintModeEnabled,modifiedImage:this.ticketPhotoPreviewGetModifiedImageCallback,setInfo:this.infoCallback}))))}}]),t}(a.a.PureComponent)),b=(n(32),n(8)),p=n(9);b.b.add(p.b,p.c,p.a);var y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(C,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/camera-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/camera-test","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.30fec6d6.chunk.js.map
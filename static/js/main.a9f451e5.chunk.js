(this["webpackJsonpcamera-test"]=this["webpackJsonpcamera-test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/mapucze.620d59e7.jpg"},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(12),s=n.n(o),c=(n(20),n(3)),l=n(4),r=n(6),h=n(5),d=n(2),u=n(7),g=n(13),m=n.n(g),v=(n(21),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(h.a)(t).call(this,e))).videoConstraints={facingMode:"environment",width:{ideal:1280}},n.webcamReference=a.a.createRef(),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getScreenshot",value:function(){return this.webcamReference.current.getScreenshot()}},{key:"render",value:function(){return a.a.createElement(m.a,{ref:this.webcamReference,className:"webcam-image-camera",screenshotFormat:"image/jpeg",minScreenshotWidth:1280,audio:!1,videoConstraints:this.videoConstraints})}}]),t}(a.a.PureComponent)),f=(n(22),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={info:""},n.x=0,n.y=0,n.width=0,n.height=0,n.angle=0,n.invertMode=!1,n.imageElement=null,n.lineWidth=5,n.strokeStyle="#ff0000",n.shadowColor="#ff0000",n.mousedown=!1,n.modifiedImage=!1,n.canvasElementReference=a.a.createRef(),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.reloadImage()}},{key:"componentDidUpdate",value:function(e){e.src!==this.props&&this.reloadImage()}},{key:"reloadImage",value:function(){var e=this,t=new Image;t.src=this.props.src,this.imageElement=t,t.onload=function(){window.devicePixelRatio;e.canvasElementReference.current.width=t.width,console.log("TCL: ImageCanvas -> image.onload -> this.canvasElementReference",e.canvasElementReference),e.canvasElementReference.current.height=t.height,e.width=t.width,e.height=t.height,console.log(t.width,t.height),e.modifiedImage=!1,e.setState({info:t.width+" "+t.height}),e.canvasContext=e.canvasElementReference.current.getContext("2d"),e.props.onRender&&e.props.onRender(e.state.info)}}},{key:"setX",value:function(e){this.x=e}},{key:"setY",value:function(e){this.y=e}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"setWidth",value:function(e){}},{key:"setHeight",value:function(e){}},{key:"getWidth",value:function(){return this.width}},{key:"getHeight",value:function(){return this.height}},{key:"center",value:function(){this.centerX(),this.centerY()}},{key:"centerX",value:function(){var e=(this.props.boundWidth-this.getWidth())/2;this.setX(e)}},{key:"centerY",value:function(){var e=(this.props.boundHeight-this.getHeight())/2;this.setY(e)}},{key:"scale",value:function(e){}},{key:"setXWithBounds",value:function(e){e=Math.min(e,0),e=Math.max(e,this.props.boundWidth-this.getWidth()),this.setX(e)}},{key:"setYWithBounds",value:function(e){e=Math.min(e,0),e=Math.max(e,this.props.boundHeight-this.getHeight()),this.setY(e)}},{key:"redraw",value:function(){this.canvasContext.clearRect(0,0,this.canvasContext.canvas.width,this.canvasContext.canvas.height),this.canvasContext.save();window.devicePixelRatio;var e=this.angle*Math.PI/180,t=(this.angle+90)*Math.PI/180,n=Math.abs(Math.cos(e)*this.width)+Math.abs(Math.sin(e)*this.height);console.log("TCL: ImageCanvas -> redraw -> relativeWidth",n);var i=Math.abs(Math.cos(e)*this.height)+Math.abs(Math.sin(e)*this.width);console.log("TCL: ImageCanvas -> redraw -> relativeHeight",i);var a=Math.cos(e)*this.x+Math.sin(e)*this.y,o=Math.cos(t)*this.x+Math.sin(t)*this.y;0===this.angle&&a,90===this.angle&&a,180===this.angle&&a-n,270===this.angle&&a-n,this.canvasContext.rotate(this.angle*Math.PI/180);getComputedStyle(this.canvasContext.canvas).getPropertyValue("width").slice(0,-2),getComputedStyle(this.canvasContext.canvas).getPropertyValue("height").slice(0,-2);console.log(window),this.canvasContext.drawImage(this.imageElement,0,0,this.imageElement.width,this.imageElement.height,0,0,this.imageElement.width,this.imageElement.height),console.log("TCL: ImageCanvas -> redraw -> this.width, this.height",this);var s=this.imageElement.width/this.props.boundWidth,c=this.imageElement.height/this.props.boundHeight;Math.max(c,s);c>s?(this.canvasElementReference.current.style.width=this.imageElement.width/c+"px",this.canvasElementReference.current.style.height=this.props.boundHeight+"px"):(this.canvasElementReference.current.style.width=this.props.boundWidth+"px",this.canvasElementReference.current.style.height=this.imageElement.height/s+"px"),console.log("TCL: ImageCanvas -> redraw -> this.canvasElementReference.current.style.width",this.canvasElementReference.current.style.width),console.log("TCL: ImageCanvas -> redraw -> this.canvasElementReference.current.style.height",this.canvasElementReference.current.style.height),!0===this.invertMode&&(this.canvasContext.globalCompositeOperation="difference",this.canvasContext.fillStyle="white",this.canvasContext.fillRect(0,0,n,i))}},{key:"fitToBounds",value:function(){var e=this.props.padding||0,t=(this.props.boundWidth-e)/this.imageElement.width,n=(this.props.boundHeight-e)/this.imageElement.height;Math.min(1,t,n)}},{key:"isZoomOutAvailable",value:function(){return this.getWidth()>this.props.boundWidth||this.getHeight()>this.props.boundHeight}},{key:"rotate",value:function(e){this.angle+=e,this.angle>270&&(this.angle=0),this.angle<0&&(this.angle=270);var t=this.width,n=this.height;this.width=n,this.height=t,this.center()}},{key:"rotateRight",value:function(){this.rotate(90)}},{key:"rotateLeft",value:function(){this.rotate(-90)}},{key:"zoom",value:function(e,t){}},{key:"toggleInvertMode",value:function(){this.invertMode=!this.invertMode}},{key:"handleDrawingStart",value:function(e){var t=this.getMosuePositionOnCanvas(e);this.canvasContext.beginPath(),this.canvasContext.moveTo(t.x,t.y),this.canvasContext.save(),this.canvasContext.lineWidth=this.lineWidth,this.canvasContext.strokeStyle=this.strokeStyle,this.canvasContext.shadowColor=null,this.canvasContext.shadowBlur=null,this.canvasContext.fill(),this.mousedown=!0}},{key:"handleDrawingInProgress",value:function(e){if(this.mousedown){var t=this.getMosuePositionOnCanvas(e);this.canvasContext.lineTo(t.x,t.y),this.canvasContext.stroke()}}},{key:"handleDrawingEnd",value:function(){this.mousedown&&(this.canvasContext.shadowColor=this.shadowColor,this.canvasContext.shadowBlur=this.lineWidth/4,this.canvasContext.stroke()),this.modifiedImage=!0,this.mousedown=!1}},{key:"getMosuePositionOnCanvas",value:function(e){var t=e.clientX||e.touches[0].clientX,n=e.clientY||e.touches[0].clientY,i=e.target;return{x:t-i.offsetLeft,y:n-i.offsetTop}}},{key:"getModifiedImage",value:function(){if(!0===this.modifiedImage)return this.canvasElementReference.current.toDataURL("image/jpeg",.92)}},{key:"render",value:function(){return a.a.createElement("canvas",{draggable:"false",className:"image-canvas",ref:this.canvasElementReference})}}]),t}(a.a.PureComponent)),k=(n(23),function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={windowHeight:window.innerHeight,windowWidth:window.innerWidth,image:n(24)},console.log("TCL: TicketPhotoPreview -> constructor -> this.props.image",i.props.image),i.imageCanvasRenderCallback=i.imageCanvasRenderCallback.bind(Object(d.a)(i)),i.imageCanvasReference=a.a.createRef(),i}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.windowTouchStartCallback=this.windowTouchStartCallback.bind(this),window.addEventListener("touchstart",this.windowTouchStartCallback),this.windowTouchMoveCallback=this.windowTouchMoveCallback.bind(this),window.addEventListener("touchmove",this.windowTouchMoveCallback),this.windowTouchEndCallback=this.windowTouchEndCallback.bind(this),window.addEventListener("touchend",this.windowTouchEndCallback),this.orientationChangedCallback=this.orientationChangedCallback.bind(this),window.addEventListener("resize",this.orientationChangedCallback)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("touchstart",this.windowTouchStartCallback),window.removeEventListener("touchmove",this.windowTouchMoveCallback),window.removeEventListener("touchend",this.windowTouchEndCallback),window.removeEventListener("resize",this.orientationChangedCallback)}},{key:"orientationChangedCallback",value:function(){this.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})}},{key:"imageCanvasRenderCallback",value:function(e){this.imageCanvasReference.current.fitToBounds(),this.imageCanvasReference.current.center(),this.imageCanvasReference.current.redraw(),this.props.setInfo(e,this.state.windowWidth,this.state.windowHeight)}},{key:"windowTouchStartCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingStart(e)}},{key:"windowTouchMoveCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingInProgress(e)}},{key:"windowTouchEndCallback",value:function(e){if(!0!==this.props.paintMode)return!1;this.imageCanvasReference.current.handleDrawingEnd(),this.props.modifiedImage(this.imageCanvasReference.current.getModifiedImage())}},{key:"render",value:function(){return a.a.createElement("div",{className:"ticket-photo-preview-image-canvas-container"},a.a.createElement(f,{ref:this.imageCanvasReference,src:this.props.image,boundWidth:this.state.windowWidth,boundHeight:this.state.windowHeight,onRender:this.imageCanvasRenderCallback}))}}]),t}(a.a.PureComponent)),C=n(14),w=(n(30),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(h.a)(t).call(this,e))).buttonClickCallbackHandler=function(e){return n.buttonClickCallback(e)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"buttonClickCallback",value:function(e){this.props.onClick&&this.props.onClick(e,this.props.index)}},{key:"render",value:function(){return a.a.createElement("button",{className:"icon-button "+(this.props.additionalClass?this.props.additionalClass:""),onClick:this.buttonClickCallbackHandler},a.a.createElement(C.a,{icon:this.props.iconKey,size:this.props.size?this.props.size:"1x"}))}}]),t}(a.a.PureComponent)),b=(n(31),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(r.a)(this,Object(h.a)(t).call(this,e))).state={isLoading:!1,isProcessing:!1,image:null,isPaintModeEnabled:!1,ticketAttachmentTypes:[],selectedTicketAttachmentType:null,info:""},n.cancelButtonClickCallback=n.cancelButtonClickCallback.bind(Object(d.a)(n)),n.captureButtonClickCallback=n.captureButtonClickCallback.bind(Object(d.a)(n)),n.sendButtonClickCallback=n.sendButtonClickCallback.bind(Object(d.a)(n)),n.togglePaintModeButtonClickCallback=n.togglePaintModeButtonClickCallback.bind(Object(d.a)(n)),n.dismissButtonClickCallback=n.dismissButtonClickCallback.bind(Object(d.a)(n)),n.ticketPhotoPreviewGetModifiedImageCallback=n.ticketPhotoPreviewGetModifiedImageCallback.bind(Object(d.a)(n)),n.ticketPhotoTypeDialogTriggerSelectCallback=n.ticketPhotoTypeDialogTriggerSelectCallback.bind(Object(d.a)(n)),n.infoCallback=n.infoCallback.bind(Object(d.a)(n)),n.webcamImageReference=a.a.createRef(),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadTicketAttachmentTypes()}},{key:"componentWillUnmount",value:function(){this.createTicketCarImageCancelable&&this.createTicketCarImageCancelable.cancel(),this.getImageTicketAttachmentTypesCancelable&&this.getImageTicketAttachmentTypesCancelable.cancel()}},{key:"infoCallback",value:function(e,t,n){this.setState({info:e+" "+t+" "+n})}},{key:"loadTicketAttachmentTypes",value:function(){}},{key:"ticketPhotoTypeDialogTriggerSelectCallback",value:function(e){this.setState({selectedTicketAttachmentType:e}),localStorage.setItem("ticketPhotoPickerTicketAttachmentTypeId",e.id)}},{key:"ticketPhotoPreviewGetModifiedImageCallback",value:function(e){this.setState({image:e})}},{key:"cancelButtonClickCallback",value:function(e){this.props.onCancel()}},{key:"captureButtonClickCallback",value:function(){this.setState({image:this.webcamImageReference.current.getScreenshot()})}},{key:"dismissButtonClickCallback",value:function(){this.setState({image:null})}},{key:"togglePaintModeButtonClickCallback",value:function(){this.setState({isPaintModeEnabled:!this.state.isPaintModeEnabled})}},{key:"sendButtonClickCallback",value:function(){this.setState({isProcessing:!0,isPaintModeEnabled:!1})}},{key:"render",value:function(){return a.a.createElement(i.Fragment,null,!1===this.state.isLoading&&!1===this.state.isProcessing&&a.a.createElement(i.Fragment,null,a.a.createElement("div",{className:"ticket-photo-picker-header-container"},a.a.createElement("div",{className:"ticket-photo-picker-header"},"VER 25 DPI: ",window.devicePixelRatio," ",this.state.info)),null!==this.state.image&&a.a.createElement(i.Fragment,null,a.a.createElement(k,{image:this.state.image,paintMode:this.state.isPaintModeEnabled,modifiedImage:this.ticketPhotoPreviewGetModifiedImageCallback,setInfo:this.infoCallback}),a.a.createElement(w,{iconKey:"arrow-left",additionalClass:"fixed-button left-bottom-element",onClick:this.dismissButtonClickCallback})),a.a.createElement("div",{className:null!==this.state.image?"hidden":""},a.a.createElement(v,{ref:this.webcamImageReference}),a.a.createElement(w,{iconKey:"times",additionalClass:"fixed-button left-bottom-element",onClick:this.cancelButtonClickCallback}),a.a.createElement(w,{iconKey:"camera",additionalClass:"fixed-button center-bottom-element",onClick:this.captureButtonClickCallback}))))}}]),t}(a.a.PureComponent)),p=(n(32),n(8)),y=n(9);p.b.add(y.b,y.c,y.a);var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(a.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/camera-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/camera-test","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.a9f451e5.chunk.js.map
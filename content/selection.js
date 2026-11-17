let t=null,n=null,c=0,a=0,l=!1,u=window.devicePixelRatio||1;function h(){t=document.createElement("div"),t.id="__stalt_selection_overlay__",t.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    z-index: 2147483647; cursor: crosshair;
    background: rgba(0,0,0,0.25);
    user-select: none; -webkit-user-select: none;
  `,t.addEventListener("mousedown",p),t.addEventListener("mousemove",m),t.addEventListener("mouseup",x),t.addEventListener("keydown",M),document.body.appendChild(t),t.focus()}function f(e,i,s,o){n&&n.remove(),n=document.createElement("div"),n.id="__stalt_selection_box__",n.style.cssText=`
    position: fixed; top: ${i}px; left: ${e}px;
    width: ${s}px; height: ${o}px;
    border: 2px solid #fafafa;
    border-radius: 2px;
    z-index: 2147483648;
    pointer-events: none;
    box-shadow: 0 0 0 9999px rgba(0,0,0,0.4);
    background: transparent;
  `,document.body.appendChild(n)}function d(){t&&(t.remove(),t=null),n&&(n.remove(),n=null),l=!1}function p(e){l=!0,c=e.clientX,a=e.clientY,e.preventDefault()}function m(e){if(!l)return;const i=Math.min(c,e.clientX),s=Math.min(a,e.clientY),o=Math.abs(e.clientX-c),r=Math.abs(e.clientY-a);f(i,s,o,r)}function x(e){if(!l)return;l=!1;const i=Math.min(c,e.clientX),s=Math.min(a,e.clientY),o=Math.abs(e.clientX-c),r=Math.abs(e.clientY-a);if(d(),o<5||r<5){chrome.runtime.sendMessage({type:"selection-cancelled"});return}chrome.runtime.sendMessage({type:"selection-result",x:Math.round(i),y:Math.round(s),width:Math.round(o),height:Math.round(r),devicePixelRatio:u})}function M(e){e.key==="Escape"&&(d(),chrome.runtime.sendMessage({type:"selection-cancelled"}))}h();

import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let a=null,d=null;n.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(a=t,n.disabled=!1)}};u("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",minDate:"today"});u(s,q);function r(e){return String(e).padStart(2,"0")}function i({days:e,hours:t,minutes:o,seconds:c}){p.textContent=r(e),S.textContent=r(t),D.textContent=r(o),b.textContent=r(c)}function C(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}n.addEventListener("click",()=>{a&&(n.disabled=!0,s.disabled=!0,d=setInterval(()=>{const t=a-new Date;if(t<=0){clearInterval(d),i({days:0,hours:0,minutes:0,seconds:0}),s.disabled=!1,l.success({title:"Success",message:"Countdown finished!"});return}const o=C(t);i(o)},1e3))});
//# sourceMappingURL=1-timer.js.map

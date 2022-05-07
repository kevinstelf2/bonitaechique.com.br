!function(){"use strict";var e=(e,t,n)=>{let s;return function(){const o=arguments,a=this,r=()=>{s=null,n||e.apply(a,o)},i=n&&!s;clearTimeout(s),s=setTimeout(r,t),i&&e.apply(a,o)}};function t(e){if(["Space","Enter","Tab"].includes[e.code]||!document.querySelector("body").classList.contains("menu-is-open"))return;const t=document.querySelector(":focus"),n=e.shiftKey&&"Tab"===e.code;if("nav-toggle"===t.getAttribute("id")){if(n)return;setTimeout((function(){document.querySelectorAll("ul.primary-menu li:first-child a")[0].focus()}),10)}}!function(){function t(e){var t=window.getComputedStyle(document.body,":before").getPropertyValue("content");if(t&&-1!==t.indexOf(e))return!0}"object"!=typeof window.TenUp&&(window.TenUp={}),TenUp.navigation=function(n,s){var o,a={target:"#primary-nav",toggle:"#js-menu-toggle",sub_menu_open:"hover"};for(o=0;o<a.length;o+=1)void 0===n[o]&&(n[o]=a[o]);var r=document.querySelector(n.target);if(r){var i,u,c,l=r.getAttribute("id"),d=document.querySelector(n.toggle),m=d.getAttribute("aria-controls"),f=n.sub_menu_open,v=r.querySelector(".current-menu-item"),p=r.querySelectorAll(".menu-item > a"),g=p.length,h=r.querySelectorAll(".menu-item-has-children"),y=h.length,b=e((function(e){t("has-offscreen-nav")?T():function(){var e,t,n;if(!document.body.classList.contains("has-full-nav")){for(r.removeAttribute("aria-hidden"),c=0;c<y;c+=1)"click"!==f&&(h[c].removeEventListener("click",A),h[c].addEventListener("focusin",k),r.classList.remove("uses-click"));if("click"!==f)for(t=(e=document.querySelectorAll(".child-has-focus")).length,n=0;n<t;n+=1)e[n].classList.remove("child-has-focus"),e[n].querySelector(".submenu-is-open").classList.remove("submenu-is-open"),e[n].querySelector(".sub-menu").setAttribute("aria-hidden","true");d.removeEventListener("click",E),document.body.classList.add("has-full-nav"),document.body.classList.remove("has-offscreen-nav")}}()}),100);for(t("has-offscreen-nav")&&T(),m||d.setAttribute("aria-controls",l),v&&v.querySelector("a").setAttribute("aria-current","page"),window.addEventListener("resize",b),document.addEventListener("mouseup",w),document.addEventListener("keyup",w),c=0;c<y;c+=1)if(h[c].querySelector("a").setAttribute("aria-haspopup","true"),h[c].querySelector(".sub-menu").setAttribute("aria-hidden","true"),h[c].querySelector(".sub-menu").setAttribute("aria-label","Submenu"),t("has-offscreen-nav")||"click"===f){h[c].addEventListener("click",A);for(var L=h[c].querySelectorAll("svg"),S=0;S<L.length;S+=1)L[S].addEventListener("click",A),L[S].addEventListener("keypress",(e=>{["Space","Enter"].includes(e.code)&&A(e)})),L[S].setAttribute("tabindex","0");r.classList.add("click"===f?"uses-click":"uses-hover")}else"click"!==f&&t("has-full-nav")&&(h[c].addEventListener("mouseover",k),h[c].addEventListener("mouseout",(function(){var e,t=r.querySelectorAll(".submenu-is-open"),n=t.length;if(n)for(e=0;e<n;e+=1)N(t[e])})),h[c].addEventListener("focusin",k),h[c].querySelectorAll(".sub-menu").forEach((e=>{e.addEventListener("mouseover",(t=>{e.parentElement.classList.add("child-has-focus"),e.previousElementSibling.classList.add("submenu-is-open")}),!1)})));"function"==typeof s&&s.call()}function E(e){e.preventDefault(),document.body.classList.contains("menu-is-open")?(r.setAttribute("aria-hidden","true"),d.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-is-open")):(r.setAttribute("aria-hidden","false"),d.setAttribute("aria-expanded","true"),r.querySelectorAll("a")[0].focus(),document.body.classList.add("menu-is-open"))}function A(e){if(i=e.currentTarget,"svg"===(u=e.target).tagName||"path"===u.tagName)u=i.closest(".menu-item > a");else if(console.log(u.previousSibling.previousSibling.href),goFrontend.isMobile){if("A"===u.tagName)return;if("UL"===u.tagName){let e=u.previousSibling.previousSibling.href;if(null!==e)return void(window.location.href=e)}}if(u.getAttribute("aria-haspopup")){e.preventDefault(),e.stopPropagation();var n,s=u.parentNode,o=s.querySelector(".sub-menu"),a=(r.querySelectorAll(".child-has-focus").length,r.querySelectorAll(".child-has-focus > a.submenu-is-open")),c=a.length;if(t("has-full-nav")&&c>0)for(n=0;n<c;n+=1)s.parentNode===r&&N(a[n]);"A"!==e.target.nodeName&&"A"!==u.tagName||!u.classList.contains("submenu-is-open")?(function(){var e,t=r.querySelectorAll(".submenu-is-open");if(t.length)for(e=0;e<t.length;e+=1)N(t[e])}(),_(u),o.querySelectorAll("a")[0].focus()):N(u)}}function q(){r.setAttribute("aria-hidden","true"),d.setAttribute("aria-expanded","false"),document.body.classList.remove("menu-is-open")}function k(e){e.currentTarget;var n,s=e.target,o=s.parentNode,a=(o.querySelector(".sub-menu"),r.querySelectorAll(".child-has-focus > a.submenu-is-open")),i=a.length;if(t("has-full-nav")&&i>0)for(n=0;n<i;n+=1)o.parentNode===r&&N(a[n]);_(s)}function w(e){var t,n=r.querySelectorAll(".submenu-is-open"),s=n.length;if("keyup"===e.type&&27==e.keyCode){if(s){for(t=0;t<n.length;t+=1)N(n[t]);"click"===f&&n[0].focus()}}else if("mouseup"===e.type&&!r.contains(e.target)&&r.querySelector(".submenu-is-open")&&s)for(t=0;t<n.length;t+=1)N(n[t])}function N(e){e&&e.classList&&(e.classList.remove("submenu-is-open"),e.parentNode.classList.remove("child-has-focus")),e&&e.parentNode&&e.parentNode.querySelector(".sub-menu")&&e.parentNode.querySelector(".sub-menu").setAttribute("aria-hidden","true")}function _(e){e.classList.add("submenu-is-open"),e.parentNode.classList.add("child-has-focus"),e.parentNode.querySelector(".sub-menu")&&e.parentNode.querySelector(".sub-menu").setAttribute("aria-hidden","false")}function T(){if(!document.body.classList.contains("has-offscreen-nav")){for(document.body.classList.contains("menu-is-open")?(r.setAttribute("aria-hidden","false"),d.setAttribute("aria-expanded","true")):(r.setAttribute("aria-hidden","true"),d.setAttribute("aria-expanded","false")),c=0;c<y;c++){for(var e=h[c].querySelectorAll("svg"),t=0;t<e.length;t+=1)e[t].addEventListener("click",A);h[c].removeEventListener("focusin",k)}for(c=0;c<g;c++)p[c].hash&&"/"===p[c].pathname&&p[c].addEventListener("click",q);d.addEventListener("click",E),document.body.classList.add("has-offscreen-nav"),document.body.classList.remove("has-full-nav")}}}}();var n=()=>{TenUp&&TenUp.navigation({target:"#header__navigation",toggle:"#nav-toggle",sub_menu_open:goFrontend.openMenuOnHover?"hover":"click"}),document.addEventListener("keydown",t)};function s(e){if(9!==e.keyCode||!document.querySelector(".site-search.active"))return;const t=document.activeElement;document.activeElement.classList.contains("search-form__input")&&e.shiftKey&&setTimeout((function(){t.parentElement.getElementsByClassName("search-input__button").item(0).focus()}),10),document.activeElement.classList.contains("search-input__button")&&!e.shiftKey&&setTimeout((function(){t.parentElement.getElementsByClassName("search-form__input").item(0).focus()}),10)}var o=()=>{if(!document.getElementById("header__search-toggle"))return;const e=e=>{const t=e,n=document.querySelector(t.dataset.toggleTarget);n.classList.contains("show-modal")?(n.classList.remove("active"),setTimeout((()=>{n.classList.remove("show-modal"),t.focus()}),250)):(n.classList.add("show-modal"),setTimeout((()=>{if(n.classList.add("active"),t.dataset.setFocus){const e=document.querySelector(t.dataset.setFocus);if(e){const t=e.value;e.value="",e.focus(),e.value=t}}}),10))};document.querySelectorAll("*[data-toggle-target]").forEach((t=>{t.addEventListener("click",(n=>{n.preventDefault(),e(t)}))})),document.addEventListener("keyup",(t=>{27===t.keyCode&&(t.preventDefault(),document.querySelectorAll(".search-modal.active").forEach((t=>{e(document.querySelector('*[data-toggle-target="'+t.dataset.modalTargetString+'"]'))})))})),document.addEventListener("click",(t=>{const n=t.target,s=document.querySelector(".search-modal.active");n===s&&e(document.querySelector('*[data-toggle-target="'+s.dataset.modalTargetString+'"]'))})),document.addEventListener("keydown",s)};const a=document.getElementById("header__cart-toggle"),r=document.getElementById("site-overlay"),i=document.getElementById("site-nav--cart"),u=document.getElementById("site-close-handle"),c=()=>{i.classList.toggle("active"),r.classList.toggle("active"),document.body.classList.toggle("sidebar-move")};n(),o(),null!==a&&null!==r&&null!==u&&(document.body.classList.add("has-woo-cart-slideout"),a.addEventListener("click",(function(e){e.preventDefault(),c()})),r.addEventListener("click",c),u.addEventListener("click",c)),document.addEventListener("DOMContentLoaded",(function(){const t="undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.navMenusPreview.NavMenuInstancePartial,s=e((()=>{document.body.classList.remove("has-offscreen-nav"),n(),o()}),1e3);t&&wp.customize.selectiveRefresh.bind("partial-content-rendered",(function(e){e&&"null"!==e.container[0].parentNode&&"header_variation"===e.partial.id&&s()}))}))}();
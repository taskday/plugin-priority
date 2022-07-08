(function(u){typeof define=="function"&&define.amd?define(u):u()})(function(){"use strict";var u=(e,r)=>{const a=e.__vccOpts||e;for(const[n,i]of r)a[n]=i;return a};const v=window.Vue.computed,f=window.Vue.defineComponent,_=window.Components.useField,D=window.Components.VDropdown,C=window.Components.VDropdownButton,x=window.Components.VDropdownItems,B=window.Components.VDropdownItem,h=f({props:{readonly:{type:Boolean,default:!1},value:{type:String,required:!1}},components:{VDropdown:D,VDropdownButton:C,VDropdownItems:x,VDropdownItem:B},setup(e){const{state:r,onChange:a}=_(),n=[{value:0,name:"No priority"},{value:1,name:"Low"},{value:2,name:"Medium"},{value:3,name:"High"},{value:4,name:"Urgent!"}],i=v(()=>{var t,w;return e.readonly?(t=n.find(d=>d.value==e.value))!=null?t:n[0]:(w=n.find(d=>d.value==r.value))!=null?w:n[0]});function V(t){r.value=`${t.value}`,a()}return{current:i,options:n,update:V}}}),l=window.Vue.toDisplayString,m=window.Vue.normalizeClass,k=window.Vue.createElementVNode,o=window.Vue.openBlock,g=window.Vue.createElementBlock,I=window.Vue.createTextVNode,s=window.Vue.resolveComponent,c=window.Vue.withCtx,y=window.Vue.createVNode,N=window.Vue.renderList,$=window.Vue.Fragment,b=window.Vue.createBlock,E={key:0};function F(e,r,a,n,i,V){const t=s("VDropdownButton"),w=s("VDropdownItem"),d=s("VDropdownItems"),S=s("VDropdown");return o(),g("span",null,[e.readonly?(o(),g("span",E,[k("span",{class:m({"bg-gray-100 dark:bg-gray-400 text-gray-600 dark:text-gray-400 dark:bg-opacity-20":e.current.value==0,"bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-400 dark:bg-opacity-20":e.current.value==1,"bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-400 dark:bg-opacity-20":e.current.value==2,"bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-400 dark:bg-opacity-20":e.current.value==3,"bg-red-100 dark:bg-red-400 text-red-600 dark:text-red-400 dark:bg-opacity-20":e.current.value==4})},l(e.current.name),3)])):(o(),b(S,{key:1},{default:c(()=>[y(t,{class:m([{"bg-gray-100 dark:bg-gray-400 text-gray-600 dark:text-gray-400 dark:bg-opacity-20":e.current.value==0,"bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-400 dark:bg-opacity-20":e.current.value==1,"bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-400 dark:bg-opacity-20":e.current.value==2,"bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-400 dark:bg-opacity-20":e.current.value==3,"bg-red-100 dark:bg-red-400 text-red-600 dark:text-red-400 dark:bg-opacity-20":e.current.value==4},"rounded transition font-medium h-full text-sm whitespace-nowrap px-4 flex items-center justify-center"])},{default:c(()=>[I(l(e.current.name),1)]),_:1},8,["class"]),y(d,null,{default:c(()=>[(o(!0),g($,null,N(e.options,p=>(o(),b(w,{onClick:z=>e.update(p),key:p.value},{default:c(()=>[k("span",null,l(p.value)+" - "+l(p.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}))])}var L=u(h,[["render",F]]);document.addEventListener("taskday:init",()=>{taskday.register("priority",{field:L})})});

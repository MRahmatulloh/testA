var d=Object.defineProperty;var C=(a,s,h)=>s in a?d(a,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[s]=h;var t=(a,s,h)=>(C(a,typeof s!="symbol"?s+"":s,h),h);class f{constructor({model:s,http:h,hasSoftDelete:c,showFilter:p,actions:l,extraActions:i,selectionActions:o,gridHiddenFields:n,gridRowAttributes:r}){t(this,"model");t(this,"http");t(this,"hasSoftDelete");t(this,"showFilter");t(this,"actions");t(this,"extraActions");t(this,"selectionActions");t(this,"gridHiddenFields");t(this,"gridRowAttributes");this.model=s,this.http=h,this.hasSoftDelete=c!=null?c:!1,this.showFilter=p!=null?p:!0,this.actions=l!=null?l:["show","update","delete","restore"],this.extraActions=i!=null?i:{},this.selectionActions=o!=null?o:[],this.gridHiddenFields=n!=null?n:[],this.gridRowAttributes=r!=null?r:function(e){return{}}}}class u{constructor({model:s,http:h,titleField:c}){t(this,"model");t(this,"http");t(this,"titleField");this.model=s,this.http=h,this.titleField=c}}class _{constructor({model:s,http:h,method:c,redirectPath:p,beforeSubmit:l,afterSubmit:i}){t(this,"model");t(this,"http");t(this,"method");t(this,"redirectPath");t(this,"beforeSubmit");t(this,"afterSubmit");this.model=s,this.http=h,this.method=c!=null?c:"POST",this.redirectPath=p,this.beforeSubmit=l!=null?l:function(o,n){},this.afterSubmit=i!=null?i:function(o,n,r){toastr.success(o.__("\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430"))}}}class U{constructor({model:s,http:h,method:c,titleField:p,redirectPath:l,beforeSubmit:i,afterSubmit:o}){t(this,"model");t(this,"http");t(this,"method");t(this,"titleField");t(this,"redirectPath");t(this,"beforeSubmit");t(this,"afterSubmit");this.model=s,this.http=h,this.method=c!=null?c:"PUT",this.titleField=p,this.redirectPath=l,this.beforeSubmit=i!=null?i:function(n,r){},this.afterSubmit=o!=null?o:function(n,r,e){toastr.success(n.__("\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430"))}}}export{_ as C,f as I,u as S,U};

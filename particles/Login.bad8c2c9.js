import{o as u,a as h,b as e,t as a,h as m,e as i,i as c}from"./index_prod.8b652d5e.js";import{P as b}from"./page.9e32eb01.js";import{M as _,i as r,a as n}from"./ComponentResolver.3d0a1e32.js";import{_ as l}from"./Input.0c243d28.js";var p=new _({form:{username:{type:r.text,size:n.xl,attributes:{autofocus:!0}},password:{type:r.text,size:n.xl,attributes:{type:"password"}}}});const f={key:0,class:"login-page"},g={class:"login-box"},y={class:"login-logo"},w={class:"card"},v={class:"card-body login-card-body"},S={type:"submit",class:"btn btn-primary btn-block mt-4"},T={data(){return{page:new b({context:this,title:this.__("\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F")}),inputs:p.prepareInputs(this,p.form),isReady:!1}},created(){localStorage.getItem("auth_username")?this.booted.helpers.http.send(this,{method:"GET",path:"user/profile"}).then(s=>{s.statusType==="success"?this.$router.push({path:"/"+this.booted.locale}):this.isReady=!0}):this.isReady=!0},methods:{submit(s){let t=new FormData(s.target);this.booted.helpers.http.send(this,{method:"POST",path:"../auth/login",body:t}).then(o=>{o.statusType==="success"&&this.$router.push({path:"/"+this.booted.locale}).then(()=>{this.booted.helpers.user.login(this,t.get("username"),t.get("password"))})})}}},D=Object.assign(T,{name:"Login",setup(s){return(t,o)=>t.isReady?(u(),h("div",f,[e("div",g,[e("div",y,[e("b",null,a(t.page.title),1)]),e("div",w,[e("div",v,[e("form",{onSubmit:o[0]||(o[0]=m((...d)=>t.submit&&t.submit(...d),["prevent"]))},[i(l,{item:t.inputs.username},null,8,["item"]),i(l,{item:t.inputs.password},null,8,["item"]),e("button",S,a(t.__("\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),1)],32)])])])])):c("",!0)}});export{D as default};

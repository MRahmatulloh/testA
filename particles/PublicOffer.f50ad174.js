import{P as s}from"./page.9e32eb01.js";import{U as r}from"./config.cf290669.js";import{M as n,i as p,a}from"./ComponentResolver.336f7de8.js";import{P as m}from"./PageTitle.8edc512f.js";import{B as c}from"./Accordion.e5bd82ea.js";import{_ as f}from"./Update.71eae450.js";import{o as _,a as l,e,w as u,F as d}from"./index_prod.33107c65.js";import"./Input.867376fb.js";var h=new n({form:{\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:{information_description:{type:p.textEditor,options:{isLocalized:!0,size:a.xl},size:a.xl}}}});const g={data(){return{page:new s({context:this,title:this.__("\u0421\u0435\u043A\u0446\u0438\u044F: :name",{name:this.__("\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430")})}),config:new r({model:h,http:{path:"section/public_offer"},redirectPath:"section/section/public_offer",afterSubmit:(t,o,i)=>{toastr.success(t.__("\u0421\u0435\u043A\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430")),t.booted.components.app.childKey++}})}}},C=Object.assign(g,{name:"PublicOffer",setup(t){return(o,i)=>(_(),l(d,null,[e(m,{text:o.page.title},{default:u(()=>[e(c)]),_:1},8,["text"]),e(f)],64))}});export{C as default};

import{P as i}from"./page.9e32eb01.js";import{I as m}from"./config.cf290669.js";import{M as d,v as e,i as a,a as t}from"./ComponentResolver.ed939823.js";import{P as n}from"./PageTitle.0e094796.js";import{_ as o}from"./Index.3e1ae4de.js";import{o as p,a as l,e as s,F as u}from"./index_prod.8930dbb5.js";import"./Input.7ebd18be.js";import"./Value.ef06df75.js";var _=new d({list:{id:{value:"card_number",type:e.text},session_date:{value:"date",type:e.text},card_number:{value:"card_number",type:e.text},dealer:{value:"user.dealer",type:e.text}},filters:{date_from:{name:"date[0]",value:"date->0",type:a.datetime,attributes:{type:"datetime"},size:t.sm},date_to:{name:"date[1]",value:"date->1",type:a.datetime,attributes:{type:"datetime"},size:t.sm},card_number:{type:e.text,size:t.sm,attributes:{type:"number"}},"user.dealer":{type:a.text,size:t.sm}}});const c={data(){return{page:new i({context:this,title:this.__("\u0414\u0435\u0442\u0430\u043B\u0438 \u0441\u0435\u0441\u0441\u0438\u0438")}),config:new m({model:_,http:{path:"user/session/details",query:{}},actions:[],gridHiddenFields:["id"]})}}},F=Object.assign(c,{name:"Details",setup(f){return(r,y)=>(p(),l(u,null,[s(n,{text:r.page.title},null,8,["text"]),s(o)],64))}});export{F as default};

import{_ as o}from"./Accordion.e5bd82ea.js";import{o as r,c as s}from"./index_prod.33107c65.js";const i={data(){return{model:this.booted.components.current.config.model,itemGroups:{}}},created(){this.booted.components.current.page.init();for(let e in this.model.form)this.itemGroups[e]=this.model.prepareInputs(this,this.model.form[e])}},a=Object.assign(i,{name:"Create",setup(e){return(t,m)=>(r(),s(o,{itemGroups:t.itemGroups},null,8,["itemGroups"]))}});export{a as _};

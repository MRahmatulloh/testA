var D=Object.defineProperty,q=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(t,e,i)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,y=(t,e)=>{for(var i in e||(e={}))T.call(e,i)&&w(t,i,e[i]);if(k)for(var i of k(e))P.call(e,i)&&w(t,i,e[i]);return t},x=(t,e)=>q(t,Y(e));import{a as z,i as d,_ as S}from"./ComponentResolver.336f7de8.js";import{_ as m,o as n,a as r,t as _,F as b,j as v,k as A,i as f,b as l,r as I,c as u,e as g,d as M,m as c,w as L}from"./index_prod.33107c65.js";const H={props:{text:{type:String,required:!0}}},U={class:"input-hint text-secondary mt-1"};function E(t,e,i,s,o,a){return n(),r("div",U,_(i.text),1)}var O=m(H,[["render",E]]);const R={},B={class:"input-error text-danger mt-1 d-none"};function V(t,e,i,s,o,a){return n(),r("div",B)}var j=m(R,[["render",V]]);const F={key:0,class:"row"},N=["for","innerHTML"],Z=M(" | "),G=["src"],J={key:1,class:"input-wrapper form-group"},K=["for","innerHTML"],Q={props:{item:{type:Object,required:!0}},data(){return{inputAttrs:{},extraAttrs:typeof this.item.attributes=="function"?this.item.attributes(this):this.item.attributes}},created(){this.inputAttrs={name:this.item.name,"data-error-key":this.item.name.replaceAll("[",".").replaceAll("]",""),value:this.item.value,id:this.item.id,class:"form-control"},this.item.options.isLocalized&&(this.inputAttrs.name+="[:locale]",this.inputAttrs["data-error-key"]+=".:locale",this.inputAttrs.id+="-:locale"),this.item.options.isMultiple&&(this.inputAttrs.name+="[]",this.inputAttrs["data-error-key"]+=".*")}},W=Object.assign(Q,{name:"Main",setup(t){return(e,i)=>(n(),r("div",{class:A(t.item.size)},[t.item.options.isLocalized?(n(),r("div",F,[(n(!0),r(b,null,v(e.booted.languages.all,s=>{var o,a;return n(),r("div",{class:A("input-wrapper form-group "+((o=t.item.options.size)!=null?o:z.md))},[t.item.label?(n(),r("label",{key:0,for:e.inputAttrs.id.replace(":locale",s.code),innerHTML:t.item.label},null,8,N)):f("",!0),Z,l("img",{src:(a=s.image)==null?void 0:a.w_30,class:"align-text-bottom ml-1"},null,8,G),I(e.$slots,"default",{inputAttrs:y({name:e.inputAttrs.name.replace(":locale",s.code),"data-error-key":e.inputAttrs["data-error-key"].replace(":locale",s.code),value:e.inputAttrs.value?e.inputAttrs.value[s.code]:"",id:e.inputAttrs.id.replace(":locale",s.code),class:e.inputAttrs.class},e.extraAttrs)}),t.item.hint?(n(),u(O,{key:1,text:t.item.hint},null,8,["text"])):f("",!0),g(j)],2)}),256))])):(n(),r("div",J,[t.item.label?(n(),r("label",{key:0,for:e.inputAttrs.id,innerHTML:t.item.label},null,8,K)):f("",!0),I(e.$slots,"default",{inputAttrs:y(y({},e.inputAttrs),e.extraAttrs)}),t.item.hint?(n(),u(O,{key:1,text:t.item.hint},null,8,["text"])):f("",!0),g(j)]))],2))}}),X={props:{item:{type:Object,required:!0}},mounted(){$("#"+this.item.id).daterangepicker({autoUpdateInput:!1,singleDatePicker:!0,showDropdowns:!0,autoApply:!0,minYear:1901,maxYear:parseInt(moment().format("YYYY"))+10,locale:{format:"DD.MM.YYYY",firstDay:1}}).on("apply.daterangepicker",function(t,e){let i=e.startDate.format(e.locale.format);$(this).val(i)})}},tt={type:"text"};function et(t,e,i,s,o,a){return n(),r("input",tt)}var it=m(X,[["render",et]]);const st={props:{item:{type:Object,required:!0}},mounted(){$("#"+this.item.id).daterangepicker({autoUpdateInput:!1,singleDatePicker:!0,showDropdowns:!0,autoApply:!0,minYear:1901,maxYear:parseInt(moment().format("YYYY"))+10,timePicker:!0,timePicker24Hour:!0,locale:{format:"DD.MM.YYYY HH:mm",firstDay:1}}).on("apply.daterangepicker",function(t,e){let i=e.startDate.format(e.locale.format);$(this).val(i)})}},nt={type:"text"};function ot(t,e,i,s,o,a){return n(),r("input",nt)}var at=m(st,[["render",ot]]);const rt={props:{item:{type:Object,required:!0}},data(){var t;return{options:this.item.options,items:[],fileInputOptions:{initialPreviewAsData:!0,showCaption:!1,showUpload:!1,showRemove:!1,showDelete:!1,showCancel:!1,showClose:!1,browseOnZoneClick:!0,overwriteInitial:(t=this.item.options.override)!=null?t:!1,browseClass:"btn btn-primary btn-block",browseIcon:'<i class="fas fa-folder-open"></i>',removeClass:"btn btn-danger btn-block float-right mt-1 mb-2",removeIcon:'<i class="fas fa-trash-alt"></i>',fileActionSettings:{showDrag:!1,dragClass:"text-primary",dragIcon:'<i class="fas fa-arrows-alt"></i>',zoomClass:"btn btn-info",zoomIcon:'<i class="fas fa-search-plus"></i>',downloadClass:"btn btn-primary pull-left",downloadIcon:'<i class="fas fa-cloud-download-alt"></i>',removeClass:"btn btn-danger",removeIcon:'<i class="fas fa-trash-alt"></i>'},previewZoomButtonIcons:{prev:'<i class="fas fa-caret-left"></i>',next:'<i class="fas fa-caret-right"></i>',toggleheader:'<i class="far fa-window-maximize"></i>',fullscreen:'<i class="fas fa-compress"></i>',borderless:'<i class="fas fa-arrows-alt"></i>',close:'<i class="fas fa-times"></i>'},ajaxDeleteSettings:{type:"DELETE",headers:this.booted.config.http.headers}}}},mounted(){this.collectItems();let t={actions:'{drag}<div class="file-actions"><div class="file-footer-buttons">{zoom} {download} {delete}</div></div>'};this.options.deleteUrl||(t.actions=t.actions.replace("{delete}","")),this.fileInputOptions.layoutTemplates=t,this.fileInputOptions.initialPreview=this.items.map((e,i)=>e.previewUrl),this.fileInputOptions.initialPreviewConfig=this.items,$("#"+this.item.id).fileinput(this.fileInputOptions),$("#"+this.item.id).on("filedeleted",(e,i)=>{this.options.isMultiple&&(this.item.value.splice(i,1),this.collectItems(),this.fileInputOptions.initialPreview=this.items.map((s,o)=>s.previewUrl),this.fileInputOptions.initialPreviewConfig=this.items,$("#"+this.item.id).fileinput("destroy").fileinput(this.fileInputOptions))})},methods:{collectItems(){var i;let t=[],e=this.item.value;if(!!e){this.options.isMultiple||(e=[e]);for(let s in e){let o=e[s],a=this.options.deleteUrl;a&&(a=a.replace(":id",this.$route.params.id).replace(":index",s));let p=this.options.download?o[this.options.download]:o,h=this.booted.helpers.file.info(p);t[s]={key:s,caption:this.__("\u0424\u0430\u0439\u043B \u2116:index",{index:parseInt(s)+1}),type:(i=h.type)!=null?i:"html",filetype:h.mimeType,previewUrl:this.options.preview?o[this.options.preview]:o,downloadUrl:p,url:this.booted.config.http.url+"/"+a}}this.items=t}}}},lt=["multiple"];function dt(t,e,i,s,o,a){return n(),r("input",{type:"file",multiple:o.options.isMultiple},null,8,lt)}var ut=m(rt,[["render",dt]]);const ct={props:{item:{type:Object,required:!0}}},mt=["name","value"];function pt(t,e,i,s,o,a){return n(),r("input",{type:"hidden",name:i.item.name,value:i.item.value},null,8,mt)}var ht=m(ct,[["render",pt]]);const ft={props:{item:{type:Object,required:!0}},mounted(){intlTelInput(document.getElementById(this.item.id),{preferredCountries:[],onlyCountries:["gb","ru","uz"],initialCountry:"uz",customContainer:"w-100",nationalMode:!1,autoPlaceholder:"off",autoHideDialCode:!0})}},yt={type:"text"};function bt(t,e,i,s,o,a){return n(),r("input",yt)}var $t=m(ft,[["render",bt]]);const vt={inheritAttrs:!1,props:{item:{type:Object,required:!0}},data(){return{value:this.item.options.isBoolean?this.item.value?1:0:this.item.value,options:this.item.options,items:{}}},created(){this.items=typeof this.options.items=="function"?this.options.items(this):this.options.items}},_t=["value"],gt={key:0},kt=["value"];function wt(t,e,i,s,o,a){return n(),r("select",c(t.$attrs,{value:o.value}),[o.options.withPrompt?(n(),r("option",gt)):f("",!0),(n(!0),r(b,null,v(o.items,(p,h)=>(n(),r("option",{value:h},_(p),9,kt))),256))],16,_t)}var xt=m(vt,[["render",wt]]);const At={props:{item:{type:Object,required:!0}},data(){return{options:this.item.options,items:{},field:null,isLocalized:!1}},created(){var e;this.options.field.includes(":locale")?(this.isLocalized=!0,this.field=this.options.field.replace(".:locale","")):this.field=this.options.field;let t=this.item.value;if(!(t==null||t.length===0))if(this.options.initValue)if(this.options.isMultiple)for(let i in t)this.items[t[i]]=this.options.initValue[i];else this.items[t]=this.options.initValue;else{let i=(e=this.options.query)!=null?e:{};if(typeof i=="function"&&(i=i(this,this.item)),i["show[]"]="with-deleted",typeof t=="object")for(let s in t)i["filter[id]["+s+"]"]=t[s];else i["filter[id]"]=t;this.booted.helpers.http.send(this,{method:"GET",path:this.options.path,query:i}).then(s=>{if(s.statusType==="success")for(let o in s.data.data){let a=s.data.data[o];this.isLocalized?this.items[a.id]=a[this.field][this.booted.locale]:this.items[a.id]=a[this.field]}})}},mounted(){$("#"+this.item.id).select2({allowClear:!0,placeholder:"",ajax:{headers:this.booted.config.http.headers,url:()=>{var i;let t=new URL(this.booted.config.http.url+"/"+this.options.path),e=(i=this.options.query)!=null?i:{};typeof e=="function"&&(e=e(this,this.item));for(let s in e)t.searchParams.append(s,e[s]);return t},dataType:"json",delay:300,data:t=>{let e={};return e.page=t.page,e["filter["+this.field+"]"]=t.term,e},processResults:(t,e)=>{let i=t.data.map(s=>({id:s.id,text:this.isLocalized?s[this.field][this.booted.locale]:s[this.field]}));return{results:i,pagination:{more:i.length>0}}}}})}},It=["multiple"],Ot={key:0},jt=["value"];function Ct(t,e,i,s,o,a){return n(),r("select",{multiple:o.options.isMultiple},[o.options.withPrompt?(n(),r("option",Ot)):f("",!0),(n(!0),r(b,null,v(o.items,(p,h)=>(n(),r("option",{value:h,selected:""},_(p),9,jt))),256))],8,It)}var Dt=m(At,[["render",Ct]]);const qt={inheritAttrs:!1,props:{item:{type:Object,required:!0}},data(){return{items:{}}},created(){this.items=this.item.value.reduce((t,e,i)=>x(y({},t),{[e]:this.item.value[i]}),{})},mounted(){$("#"+this.item.id).select2({allowClear:!0,placeholder:"",tags:!0,createTag:t=>({id:t.term,text:t.term,newTag:!0})})}},Yt=["name"],Tt=["value"];function Pt(t,e,i,s,o,a){return n(),r("select",c({multiple:!0},t.$attrs,{name:i.item.name+"[]"}),[(n(!0),r(b,null,v(o.items,(p,h)=>(n(),r("option",{value:h,selected:""},_(p),9,Tt))),256))],16,Yt)}var zt=m(qt,[["render",Pt]]);const St={inheritAttrs:!1,props:{item:{type:Object,required:!0}},mounted(){$("#"+this.item.id).bootstrapSwitch("state",$("#"+this.item.id).prop("checked"))}},Mt={class:"mt-1"},Lt=["name"],Ht=["checked"];function Ut(t,e,i,s,o,a){return n(),r("div",Mt,[l("input",{type:"hidden",name:i.item.name,value:"0"},null,8,Lt),l("input",c({type:"checkbox"},t.$attrs,{value:"1",checked:i.item.value==1,"data-bootstrap-switch":"","data-on-text":"<i class='fas fa-check'></i>","data-off-text":"<i class='fas fa-times'></i>","data-on-color":"success","data-off-color":"danger"}),null,16,Ht)])}var Et=m(St,[["render",Ut]]);const Rt={props:{item:{type:Object,required:!0}}},Bt={type:"text"};function Vt(t,e,i,s,o,a){return n(),r("input",Bt)}var Ft=m(Rt,[["render",Vt]]);const Nt={props:{item:{type:Object,required:!0}}},Zt={rows:"5"};function Gt(t,e,i,s,o,a){return n(),r("textarea",Zt)}var Jt=m(Nt,[["render",Gt]]);const Kt={props:{item:{type:Object,required:!0}},data(){return{pluginOptions:{language:this.booted.locale,height:"500px",relative_urls:!1,convert_urls:!1,paste_data_images:!0,verify_html:!1,forced_root_block:"div",table_style_by_css:!0,font_size_formats:"8px 10px 12px 14px 16px 18px 24px 36px 48px",menubar:!1,plugins:["advlist autolink lists link charmap anchor","searchreplace visualblocks code fullscreen","table","media image"].join(" "),toolbar:[["undo redo","fontsize styles","removeformat bold italic underline strikethrough superscript subscript","forecolor backcolor"].join("|"),["outdent indent","alignleft aligncenter alignright alignjustify","bullist numlist table","link anchor image media charmap","searchreplace visualblocks code fullscreen"].join("|")],file_picker_callback:(t,e,i)=>{let s=document.createElement("input");s.setAttribute("type","file"),s.onchange=()=>{let o=s.files[0],a=new FileReader;a.onload=()=>{let p=new FormData;p.append("file",o,o.name),this.booted.helpers.http.send(this,{method:"POST",path:"storage/upload/media",body:p}).then(h=>{h.statusType==="success"&&t(h.data.absolute)})},a.readAsDataURL(o)},s.click()},images_upload_handler:(t,e)=>new Promise((i,s)=>{let o=new FormData;o.append("file",t.blob(),t.filename()),this.booted.helpers.http.send(this,{method:"POST",path:"storage/upload/media",body:o}).then(a=>{a.statusType==="success"&&i(a.data.absolute)})}),setup:function(t){t.on("change",function(){tinymce.triggerSave()})}}}},mounted(){if(this.item.options.isLocalized)for(let t in this.booted.languages.all)tinymce.init(y({selector:"#"+this.item.id+"-"+t},this.pluginOptions));else tinymce.init(y({selector:"#"+this.item.id},this.pluginOptions))}};function Qt(t,e,i,s,o,a){return n(),r("textarea")}var Wt=m(Kt,[["render",Qt]]);const Xt={props:{item:{type:Object,required:!0}},mounted(){$("#"+this.item.id).daterangepicker({autoUpdateInput:!1,singleDatePicker:!0,showDropdowns:!0,autoApply:!0,minYear:1901,maxYear:parseInt(moment().format("YYYY"))+10,timePicker:!0,timePicker24Hour:!0,locale:{format:"HH:mm"}}).on("show.daterangepicker",function(t,e){e.container.find(".calendar-table").hide()}).on("apply.daterangepicker",function(t,e){let i=e.startDate.format(e.locale.format);$(this).val(i)})}},te={type:"text"};function ee(t,e,i,s,o,a){return n(),r("input",te)}var ie=m(Xt,[["render",ee]]);const se=["id"],ne={class:"card card-info mb-3"},oe={class:"card-header d-flex align-items-center justify-content-between"},ae={class:"card-title w-100"},re={class:"btn-group"},le=l("i",{class:"fas fa-arrows-alt"},null,-1),de=[le],ue=l("i",{class:"fas fa-edit"},null,-1),ce=[ue],me={class:"card-body"},pe={class:"table-responsive"},he={class:"table table-bordered table-striped table-hover"},fe=["data-key"],ye={class:"align-middle",style:{width:"50px"}},be=l("div",{class:"btn btn-primary table-sorter"},[l("i",{class:"fas fa-arrows-alt"})],-1),$e={class:"inputs row"},ve={style:{width:"50px"}},_e=l("i",{class:"fas fa-times"},null,-1),ge=[_e],ke={colspan:"3"},we=l("i",{class:"fas fa-plus"},null,-1),xe=[we],Ae={inheritAttrs:!1,props:{item:{type:Object,required:!0}},data(){return{model:this.booted.components.current.config.model,fields:this.item.options.fields,items:[]}},created(){for(let t in this.item.value)this.items[t]={id:{name:this.item.name+"["+t+"][id]",value:this.item.value[t].id,type:d.hidden},fields:this.model.prepareRelationsInputs(this,this.fields,this.item.value[t],this.item.name,t)}},mounted(){$("#"+this.item.id+" tbody").sortable({handle:".table-sorter",placeholder:"sortable-placeholder",start:function(t,e){e.placeholder.height(e.helper.outerHeight())}})},methods:{add(){let t=this.booted.helpers.string.uniqueId();this.items.push({id:{name:this.item.name+"["+t+"][id]",value:0,type:d.hidden},fields:this.model.prepareRelationsInputs(this,this.fields,{},this.item.name,t)})},remove(t){$(t.target).closest("tr").remove()},toggleSort(t){$("#"+this.item.id+" .btn-sort-toggler").toggleClass("d-none"),$("#"+this.item.id+" .inputs").each(function(){let e=$(this).children().not(":first");t?e.addClass("d-none"):e.removeClass("d-none")})}}},Ie=Object.assign(Ae,{name:"Relations",setup(t){return(e,i)=>(n(),r("div",{class:"col-12",id:t.item.id},[l("div",ne,[l("div",oe,[l("h3",ae,_(t.item.label),1),l("div",re,[l("button",{type:"button",class:"btn btn-light btn-sort-toggler",onClick:i[0]||(i[0]=s=>e.toggleSort(!0))},de),l("button",{type:"button",class:"btn btn-light btn-sort-toggler d-none",onClick:i[1]||(i[1]=s=>e.toggleSort(!1))},ce)])]),l("div",me,[l("div",pe,[l("table",he,[l("tbody",null,[(n(!0),r(b,null,v(e.items,(s,o)=>(n(),r("tr",{"data-key":o,class:"crud-relation"},[l("td",ye,[be,g(C,{item:s.id},null,8,["item"])]),l("td",null,[l("div",$e,[(n(!0),r(b,null,v(s.fields,a=>(n(),u(C,{item:a},null,8,["item"]))),256))])]),l("td",ve,[l("button",{type:"button",onClick:i[2]||(i[2]=(...a)=>e.remove&&e.remove(...a)),class:"btn btn-danger"},ge)])],8,fe))),256))]),l("tfoot",null,[l("tr",null,[l("td",ke,[l("button",{type:"button",onClick:i[3]||(i[3]=(...s)=>e.add&&e.add(...s)),class:"btn btn-success btn-block"},xe)])])])])])])])],8,se))}}),Oe={props:{item:{type:Object,required:!0}},created(){this.item.id="el-"+this.booted.helpers.string.uniqueId()}},C=Object.assign(Oe,{name:"Input",setup(t){return(e,i)=>t.item.type!==d.hidden&&t.item.type!==d.relations&&t.item.type!==d.component?(n(),u(W,{key:0,item:t.item},{default:L(s=>[t.item.type===d.date?(n(),u(it,c({key:0,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.datetime?(n(),u(at,c({key:1,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.file?(n(),u(ut,c({key:2,set:delete s.inputAttrs.value,item:t.item},s.inputAttrs),null,16,["set","item"])):t.item.type===d.phone?(n(),u($t,c({key:3,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.select?(n(),u(xt,c({key:4,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.select2Ajax?(n(),u(Dt,c({key:5,set:delete s.inputAttrs.value,item:t.item},s.inputAttrs),null,16,["set","item"])):t.item.type===d.select2Array?(n(),u(zt,c({key:6,set:delete s.inputAttrs.value,item:t.item},s.inputAttrs),null,16,["set","item"])):t.item.type===d.switcher?(n(),u(Et,c({key:7,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.text?(n(),u(Ft,c({key:8,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.textarea?(n(),u(Jt,c({key:9,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.textEditor?(n(),u(Wt,c({key:10,item:t.item},s.inputAttrs),null,16,["item"])):t.item.type===d.time?(n(),u(ie,c({key:11,item:t.item},s.inputAttrs),null,16,["item"])):f("",!0)]),_:1},8,["item"])):t.item.type===d.component?(n(),u(S,{key:1,resolve:t.item.options.resolve(e.booted.components.current,t.item)},null,8,["resolve"])):t.item.type===d.hidden?(n(),u(ht,{key:2,item:t.item},null,8,["item"])):t.item.type===d.relations?(n(),u(Ie,{key:3,item:t.item},null,8,["item"])):f("",!0)}});export{C as _};

import{M as a,v as e,i as t,a as o}from"./ComponentResolver.3718ba93.js";var l=new a({list:{id:{type:e.text},fio:{type:e.text},card_number:{type:e.text},role:{type:e.httpSelectNew,options:{items:r=>r.booted.helpers.iterator.get(r.booted.enums.user.user_role,"*.label"),path:"user/user/:id/set-role",element:"role"}},role_raw:{value:"role",type:e.text},phone:{type:e.text},dealer:{type:e.text},min_sum:{type:e.text},can_bron:{type:e.httpSwitcher,options:{path:"user/user/:id/switch-booking"}},worker_info:{label:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",type:e.worker,options:{path:"user/worker?filter[card_number]=:value"}},created_at:{type:e.text}},filters:{id:{value:(r,s)=>{var p;return Object.values((p=s.id)!=null?p:{})},type:t.select2Array,size:o.xl},fio:{type:t.text},dealer:{type:t.text},card_number:{type:t.text,attributes:{type:"number"}},phone:{type:t.text},role:{type:t.select,options:{items:r=>r.booted.helpers.iterator.get(r.booted.enums.user.role,"*.label"),withPrompt:!0}}},sortings:["id","username"],show:{id:{type:e.text},username:{type:e.text},card_number:{type:e.text},role:{value:(r,s)=>r.booted.enums.user.role[s.role].label,type:e.text},min_sum:{type:e.text},can_bron:{type:e.httpSwitcher,options:{path:"user/user/:id/switch-booking"}},created_at:{type:e.text},updated_at:{type:e.text}},form:{\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:{username:{type:t.text,size:o.md},role:{type:t.select,options:{items:r=>r.booted.helpers.iterator.get(r.booted.enums.user.role,"*.label")},size:o.md},phone:{type:t.phone,size:o.md},fio:{type:t.text},dealer:{type:t.text},min_sum:{type:t.text},can_bron:{type:t.select,options:{items:{1:"\u0414\u0430",0:"\u041D\u0435\u0442"}}},new_password:{type:t.text,attributes:{type:"password"}},new_password_confirmation:{type:t.text,attributes:{type:"password"}}}}});export{l as m};

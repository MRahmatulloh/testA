import{M as s,v as t,i as r,a as o}from"./ComponentResolver.3daddf24.js";var l=new s({list:{id:{type:t.text},card_number:{type:t.text},role:{type:t.httpSelectNew,options:{items:e=>e.booted.helpers.iterator.get(e.booted.enums.user.worker_role,"*.label"),path:"user/worker/:id/set-role",element:"role"}},phone:{type:t.text},created_at:{type:t.text}},filters:{card_number:{type:t.text,attributes:{type:"number"}},phone:{type:t.text},role:{type:r.select,options:{items:e=>e.booted.helpers.iterator.get(e.booted.enums.user.worker_role,"*.label"),withPrompt:!0}}},form:{\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:{card_number:{type:t.text,size:o.sm,attributes:{type:"number"}},role:{type:r.select,options:{items:e=>e.booted.helpers.iterator.get(e.booted.enums.user.user_role,"*.label")},size:o.sm},phone:{type:r.phone,size:o.sm}}}});export{l as m};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e46743d"],{1618:function(e,l,a){"use strict";a.r(l);a("7ba9");var t=a("eae5"),o=a.n(t),u=(a("8ac7"),a("e661")),n=a.n(u),c=(a("7f17"),a("6573")),r=a.n(c),b=(a("0769"),a("31b0")),i=a.n(b),d=a("1da1"),s=(a("96cf"),a("4de4"),a("c740"),a("a434"),a("7a23")),v=a("6605"),f=a("47e2"),p=a("394a"),g=function(e){return Object(s["pushScopeId"])("data-v-0c47dc86"),e=e(),Object(s["popScopeId"])(),e},m={class:"product"},O={class:"main"},j={class:"box-card"},h=g((function(){return Object(s["createElementVNode"])("i",{class:"el-input__icon el-icon-search"},null,-1)})),V={class:"value"},N=["onClick"],w=["onClick"],y={class:"saveInfo"},C={class:"dialog-footer"},k=Object(s["defineComponent"])({__name:"product",setup:function(e){var l=Object(f["b"])(),a=l.t,t=Object(v["d"])(),u=Object(s["ref"])(!1),c=Object(s["ref"])([]),b=Object(s["ref"])({data:[]}),g=Object(s["ref"])({}),k=function(e,l){var a=e?c.value.filter(S(e)):c.value;l(a)},x=function(){T.value.resetFields(),u.value=!1},_=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,null===(l=T.value)||void 0===l?void 0:l.validate((function(e){console.log(e,"vaild"),e&&(console.log(g.value,"form."),u.value=!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){return function(l){return 0===l.value.toLowerCase().indexOf(e.toLowerCase())}},D=function(e,l){var a=z.value.filter((function(l){return l.value===e.isFree}));return a.length>0?a[0].label:"--"},$=function(){return[{sku:"xbz",productName:"adcvvaa",skuAlias:"assd"},{sku:"xbz2",productName:"2ad2adcvvaa",skuAlias:"assd"},{sku:"xbz3",productName:"3ad2adcvvaa",skuAlias:"assd"}]},B=function(e){console.log(e,"item"),b.value.state=e.sku;var l={};l.sku=e.sku,l.productName=e.productName,l.skuAlias=e.skuAlias,l.isFree="1",b.value.data.push(l),console.log(b.value.data,"formModel.value.data111")},E=function(e){u.value=!0,T.value.resetFields(),g.value=e},A=function(e){var l=b.value.data.findIndex((function(l){return l.sku===e.sku}));i.a.confirm(a("deleteChange"),a("deleteTips"),{distinguishCancelAndClose:!0,confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),customClass:"message-box",center:!0}).then((function(){b.value.data.splice(l,1),r()({type:"success",message:a("deleteSuccessful")})})).catch((function(e){r()({type:"info",message:a("cancel"===e?"deleteFailed":"canceled")})}))};Object(s["onMounted"])((function(){c.value=$()}));var F=Object(s["computed"])((function(){return p["E"]})),U=Object(s["computed"])((function(){return p["y"]})),z=Object(s["computed"])((function(){return p["t"]})),q=Object(s["ref"])(),T=Object(s["ref"])(),I=Object(s["reactive"])({state:[{required:!0,trigger:"change"}]}),P=Object(s["reactive"])({productionDate:[{required:!0,trigger:"change"}]}),L=function(){var e;null===(e=q.value)||void 0===e||e.resetFields(),t.push({name:"eorderWarehouse"})},M=function(){var e;null===(e=q.value)||void 0===e||e.validate((function(e){e&&(console.log(b.value.data,"formModel"),t.push({name:"eorderShipping"}))}))};return function(e,l){var a=Object(s["resolveComponent"])("el-form-item"),t=Object(s["resolveComponent"])("el-table-column"),c=Object(s["resolveComponent"])("el-option"),r=Object(s["resolveComponent"])("el-select"),i=Object(s["resolveComponent"])("el-input"),d=Object(s["resolveComponent"])("el-table"),v=Object(s["resolveComponent"])("el-button"),f=Object(s["resolveComponent"])("el-date-picker"),p=Object(s["resolveComponent"])("el-dialog");return Object(s["openBlock"])(),Object(s["createElementBlock"])("div",m,[Object(s["createElementVNode"])("div",O,[Object(s["createElementVNode"])("div",j,[Object(s["createVNode"])(Object(s["unref"])(n.a),{model:b.value,"status-icon":"",rules:I,ref_key:"formRef",ref:q,"label-width":"100px","label-position":"top",class:"demo-formModel"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(a,{class:"editInput",prop:"state",placeholder:e.$t("statePlaceholder"),label:e.$t("selectOutOprder")},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(Object(s["unref"])(o.a),{modelValue:b.value.state,"onUpdate:modelValue":l[0]||(l[0]=function(e){return b.value.state=e}),"fetch-suggestions":k,"popper-class":"my-autocomplete",onSelect:B},{prefix:Object(s["withCtx"])((function(){return[h]})),default:Object(s["withCtx"])((function(l){var a=l.item;return[Object(s["createElementVNode"])("div",V,[Object(s["createElementVNode"])("div",null,Object(s["toDisplayString"])(e.$t("sku"))+" "+Object(s["toDisplayString"])(e.$t(":"))+" "+Object(s["toDisplayString"])(a.sku),1),Object(s["createElementVNode"])("div",null,Object(s["toDisplayString"])(e.$t("productName"))+" "+Object(s["toDisplayString"])(e.$t(":"))+Object(s["toDisplayString"])(a.productName),1),Object(s["createElementVNode"])("div",null,Object(s["toDisplayString"])(e.$t("skuAlias"))+" "+Object(s["toDisplayString"])(e.$t(":"))+Object(s["toDisplayString"])(a.skuAlias),1)])]})),_:1},8,["modelValue"])]})),_:1},8,["placeholder","label"]),b.value.data.length>0?(Object(s["openBlock"])(),Object(s["createBlock"])(a,{key:0,class:"editInput"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(d,{class:"warehouse-table",size:"mini",data:b.value.data,modelValue:b.value.data,"onUpdate:modelValue":l[1]||(l[1]=function(e){return b.value.data=e}),style:{width:"100%"}},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(t,{width:"50",prop:"sku",label:e.$t("sku")},null,8,["label"]),Object(s["createVNode"])(t,{width:"100",prop:"productName",label:e.$t("productName")},null,8,["label"]),Object(s["createVNode"])(t,{width:"100",prop:"unit",label:e.$t("unit")},{default:Object(s["withCtx"])((function(e){return[Object(s["createVNode"])(r,{size:"small",modelValue:e.row.unit,"onUpdate:modelValue":function(l){return e.row.unit=l}},{default:Object(s["withCtx"])((function(){return[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(Object(s["unref"])(F),(function(e){return Object(s["openBlock"])(),Object(s["createBlock"])(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(t,{width:"130",prop:"qty",label:e.$t("qty")},{default:Object(s["withCtx"])((function(e){return[Object(s["createVNode"])(i,{size:"small",modelValue:e.row.qty,"onUpdate:modelValue":function(l){return e.row.qty=l}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(t,{formatter:D,width:"130",prop:"isFree",label:e.$t("isFree")},null,8,["label"]),Object(s["createVNode"])(t,{width:"170"},{default:Object(s["withCtx"])((function(l){return[Object(s["createElementVNode"])("div",{style:{color:"#2d8ced"},onClick:function(e){return E(l.row)}},Object(s["toDisplayString"])(e.$t("addBatch")),9,N)]})),_:1}),Object(s["createVNode"])(t,null,{default:Object(s["withCtx"])((function(e){return[Object(s["createElementVNode"])("i",{class:"el-icon-error",onClick:function(l){return A(e.row)}},null,8,w)]})),_:1})]})),_:1},8,["data","modelValue"])]})),_:1})):Object(s["createCommentVNode"])("",!0)]})),_:1},8,["model","rules"]),Object(s["createElementVNode"])("div",y,[Object(s["createVNode"])(v,{onClick:L},{default:Object(s["withCtx"])((function(){return[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.$t("previous")),1)]})),_:1}),Object(s["createVNode"])(v,{type:"primary",onClick:M},{default:Object(s["withCtx"])((function(){return[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.$t("next")),1)]})),_:1})])]),Object(s["createVNode"])(p,{modelValue:u.value,"onUpdate:modelValue":l[8]||(l[8]=function(e){return u.value=e}),width:"40%",title:e.$t("batchProperties")},{footer:Object(s["withCtx"])((function(){return[Object(s["createElementVNode"])("span",C,[Object(s["createVNode"])(v,{onClick:x},{default:Object(s["withCtx"])((function(){return[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.$t("cancel")),1)]})),_:1}),Object(s["createVNode"])(v,{type:"primary",onClick:_},{default:Object(s["withCtx"])((function(){return[Object(s["createTextVNode"])(Object(s["toDisplayString"])(e.$t("confirm")),1)]})),_:1})])]})),default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(Object(s["unref"])(n.a),{model:g.value,ref_key:"batchFormRef",ref:T,"label-position":"right",class:"batch-form",rules:P,"label-width":"150px"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(a,{label:e.$t("productionDate"),prop:"productionDate"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(f,{modelValue:g.value.productionDate,"onUpdate:modelValue":l[2]||(l[2]=function(e){return g.value.productionDate=e}),type:"date"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(a,{label:e.$t("expirationDate"),prop:"expirationDate"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(f,{modelValue:g.value.expirationDate,"onUpdate:modelValue":l[3]||(l[3]=function(e){return g.value.expirationDate=e}),type:"date"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(a,{label:e.$t("warehousingDate"),prop:"warehousingDate"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(f,{modelValue:g.value.warehousingDate,"onUpdate:modelValue":l[4]||(l[4]=function(e){return g.value.warehousingDate=e}),type:"date"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(a,{label:e.$t("supplierName"),prop:"supplierName"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(i,{modelValue:g.value.supplierName,"onUpdate:modelValue":l[5]||(l[5]=function(e){return g.value.supplierName=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(a,{label:e.$t("batchNumber"),prop:"batchNumber"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(i,{modelValue:g.value.batchNumber,"onUpdate:modelValue":l[6]||(l[6]=function(e){return g.value.batchNumber=e})},null,8,["modelValue"])]})),_:1},8,["label"]),Object(s["createVNode"])(a,{label:e.$t("qualityStatus"),prop:"qualityStatus"},{default:Object(s["withCtx"])((function(){return[Object(s["createVNode"])(r,{modelValue:g.value.qualityStatus,"onUpdate:modelValue":l[7]||(l[7]=function(e){return g.value.qualityStatus=e})},{default:Object(s["withCtx"])((function(){return[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(Object(s["unref"])(U),(function(e){return Object(s["openBlock"])(),Object(s["createBlock"])(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["label"])]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue","title"])])])}}}),x=(a("92d2"),a("38ee"),a("6b0d")),_=a.n(x);const S=_()(k,[["__scopeId","data-v-0c47dc86"]]);l["default"]=S},"38ee":function(e,l,a){"use strict";a("f663")},"394a":function(e,l,a){"use strict";a.d(l,"u",(function(){return o})),a.d(l,"l",(function(){return u})),a.d(l,"j",(function(){return n})),a.d(l,"c",(function(){return c})),a.d(l,"r",(function(){return r})),a.d(l,"i",(function(){return b})),a.d(l,"h",(function(){return i})),a.d(l,"x",(function(){return d})),a.d(l,"y",(function(){return s})),a.d(l,"w",(function(){return v})),a.d(l,"s",(function(){return f})),a.d(l,"q",(function(){return p})),a.d(l,"A",(function(){return g})),a.d(l,"d",(function(){return m})),a.d(l,"F",(function(){return O})),a.d(l,"f",(function(){return j})),a.d(l,"E",(function(){return h})),a.d(l,"m",(function(){return V})),a.d(l,"o",(function(){return N})),a.d(l,"a",(function(){return w})),a.d(l,"t",(function(){return y})),a.d(l,"g",(function(){return C})),a.d(l,"n",(function(){return k})),a.d(l,"k",(function(){return x})),a.d(l,"v",(function(){return _})),a.d(l,"B",(function(){return S})),a.d(l,"z",(function(){return D})),a.d(l,"p",(function(){return $})),a.d(l,"e",(function(){return B})),a.d(l,"b",(function(){return E})),a.d(l,"C",(function(){return A})),a.d(l,"D",(function(){return F}));var t=a("88c3"),o=[{value:"zh",label:t["a"].global.t("chinese")},{value:"en",label:t["a"].global.t("english")},{value:"frn",label:t["a"].global.t("french")}],u=(t["a"].global.t("useInformation"),t["a"].global.t("paymentMethod"),t["a"].global.t("accountFunds"),t["a"].global.t("multiAddressInformation"),t["a"].global.t("messageNotifications"),t["a"].global.t("modifyPassword"),[{value:1,label:t["a"].global.t("vipCustomer")},{value:2,label:t["a"].global.t("normalCustomer")}]),n=[{value:1,label:t["a"].global.t("yes")},{value:2,label:t["a"].global.t("no")}],c=[{value:1,label:t["a"].global.t("creatStatus")},{value:2,label:t["a"].global.t("openStatus")},{value:3,label:t["a"].global.t("closeStatus")}],r=[{value:0,label:t["a"].global.t("no")},{value:1,label:t["a"].global.t("yes")}],b=[{value:"zh",label:t["a"].global.t("zh")},{value:"en",label:t["a"].global.t("en")},{value:"ca",label:t["a"].global.t("ca")}],i=[{value:"alexander",label:t["a"].global.t("Alexander")},{value:"alonsa",label:t["a"].global.t("Alonsa")},{value:"altona",label:t["a"].global.t("Altona")}],d=[{value:"ab",label:t["a"].global.t("AB")},{value:"bc",label:t["a"].global.t("BC")},{value:"mb",label:t["a"].global.t("MB")}],s=[{value:1,label:t["a"].global.t("goodProduct")},{value:2,label:t["a"].global.t("badProduct")}],v=[{value:"1",label:t["a"].global.t("solid")},{value:"2",label:t["a"].global.t("liquid")},{value:"3",label:t["a"].global.t("gas")}],f=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],p=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],g=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],m=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("shipped")},{value:"5",label:t["a"].global.t("deliveried")},{value:"6",label:t["a"].global.t("cancel")},{value:"7",label:t["a"].global.t("shipping")},{value:"allStatus",label:t["a"].global.t("allStatus")}],O=[{value:"1",label:t["a"].global.t("allWarehouse")}],j=[{value:"1",label:t["a"].global.t("businessType_1")},{value:"2",label:t["a"].global.t("businessType_2")},{value:"3",label:t["a"].global.t("businessType_3")}],h=[{value:"EA",label:t["a"].global.t("EA")},{value:"PL",label:t["a"].global.t("PL")},{value:"CS",label:t["a"].global.t("CS")},{value:"other",label:t["a"].global.t("other")}],V=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("shipped")},{value:"5",label:t["a"].global.t("deliveried")},{value:"6",label:t["a"].global.t("cancel")},{value:"allStatus",label:t["a"].global.t("allStatus")}],N=[{value:"1",label:t["a"].global.t("occupied")},{value:"2",label:t["a"].global.t("notYet")}],w=[{value:"1",label:t["a"].global.t("expedited")},{value:"2",label:t["a"].global.t("priority")},{value:"3",label:t["a"].global.t("standard")}],y=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],C=[{value:"1",label:t["a"].global.t("darwynnDeliver")},{value:"2",label:t["a"].global.t("canadaPost")},{value:"3",label:t["a"].global.t("pickUp")},{value:"4",label:t["a"].global.t("usps")}],k=[{value:"1",label:t["a"].global.t("Test1")},{value:"2",label:t["a"].global.t("Test2")}],x=[{value:"1",label:t["a"].global.t("xbz")},{value:"2",label:t["a"].global.t("swy")}],_=[{value:"all",label:t["a"].global.t("platform_1")}],S=[{value:"ebay",label:t["a"].global.t("ebay")},{value:"shopify",label:t["a"].global.t("shopify")},{value:"amazon",label:t["a"].global.t("amazon")}],D=[{value:"1",label:t["a"].global.t("B2B")},{value:"2",label:t["a"].global.t("B2C")},{value:"all",label:t["a"].global.t("all")}],$=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("received")},{value:"5",label:t["a"].global.t("invoiced")},{value:"6",label:t["a"].global.t("cancel")}],B=(t["a"].global.t("create"),t["a"].global.t("submit"),t["a"].global.t("audited"),t["a"].global.t("invoed"),t["a"].global.t("uninvo"),t["a"].global.t("cad"),t["a"].global.t("rmb"),t["a"].global.t("dollar"),[{value:"1",label:t["a"].global.t("bookkept")},{value:"2",label:t["a"].global.t("unbookkept")},{value:"all",label:t["a"].global.t("allStatus")}]),E=[{value:"1",label:t["a"].global.t("group")},{value:"2",label:t["a"].global.t("groupFinance")},{value:"3",label:t["a"].global.t("common")}],A=[{value:"1",label:t["a"].global.t("normal")},{value:"2",label:t["a"].global.t("closed")}],F=[{value:"usa",label:t["a"].global.t("usa")},{value:"china",label:t["a"].global.t("china")},{value:"canada",label:t["a"].global.t("canada")}]},5663:function(e,l,a){},"92d2":function(e,l,a){"use strict";a("5663")},f663:function(e,l,a){}}]);
//# sourceMappingURL=chunk-3e46743d.daae74e0.js.map
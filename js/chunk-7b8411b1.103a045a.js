(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b8411b1"],{"0454":function(l,a,e){"use strict";e.r(a);e("8ac7");var t=e("e661"),o=e.n(t),b=e("7a23"),u=e("6605"),n=e("47e2"),r=e("394a"),c={class:"warehouse"},i={class:"main"},v={class:"box-card"},d={class:"saveInfo"},g=Object(b["defineComponent"])({__name:"warehouse",setup:function(l){var a=Object(n["b"])(),e=(a.t,Object(u["d"])()),t=(Object(b["ref"])([]),Object(b["ref"])({}));Object(b["computed"])((function(){return r["r"]}));Object(b["onMounted"])((function(){console.log(333)}));var g=Object(b["ref"])(),s=Object(b["reactive"])({state:[{required:!0,trigger:"change"}]}),f=function(){var l;null===(l=g.value)||void 0===l||l.resetFields(),e.push({name:"newEorder"})},p=function(){var l;null===(l=g.value)||void 0===l||l.validate((function(l){console.log(l,"vaild"),l&&(console.log(t,"formModel"),e.push({name:"eorderProduct"}))}))};return function(l,a){var e=Object(b["resolveComponent"])("el-option"),u=Object(b["resolveComponent"])("el-select"),n=Object(b["resolveComponent"])("el-form-item"),m=Object(b["resolveComponent"])("el-button");return Object(b["openBlock"])(),Object(b["createElementBlock"])("div",c,[Object(b["createElementVNode"])("div",i,[Object(b["createElementVNode"])("div",v,[Object(b["createVNode"])(Object(b["unref"])(o.a),{model:t.value,"status-icon":"",rules:s,ref_key:"formRef",ref:g,"label-width":"100px","label-position":"top",class:"demo-formModel"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(n,{class:"editInput",prop:"customer",placeholder:l.$t("warehouseSelect"),label:l.$t("warehouseSelect")},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(u,{clearable:"",modelValue:t.value.warehouse,"onUpdate:modelValue":a[0]||(a[0]=function(l){return t.value.warehouse=l})},{default:Object(b["withCtx"])((function(){return[(Object(b["openBlock"])(!0),Object(b["createElementBlock"])(b["Fragment"],null,Object(b["renderList"])(Object(b["unref"])(r["r"]),(function(l){return Object(b["openBlock"])(),Object(b["createBlock"])(e,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["placeholder","label"])]})),_:1},8,["model","rules"]),Object(b["createElementVNode"])("div",d,[Object(b["createVNode"])(m,{onClick:f},{default:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(l.$t("previous")),1)]})),_:1}),Object(b["createVNode"])(m,{type:"primary",onClick:p},{default:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(l.$t("next")),1)]})),_:1})])])])])}}}),s=(e("b724"),e("2dce"),e("6b0d")),f=e.n(s);const p=f()(g,[["__scopeId","data-v-28ae41bd"]]);a["default"]=p},"2d5b":function(l,a,e){},"2dce":function(l,a,e){"use strict";e("6330")},"394a":function(l,a,e){"use strict";e.d(a,"A",(function(){return o})),e.d(a,"N",(function(){return b})),e.d(a,"o",(function(){return u})),e.d(a,"m",(function(){return n})),e.d(a,"d",(function(){return r})),e.d(a,"x",(function(){return c})),e.d(a,"l",(function(){return i})),e.d(a,"k",(function(){return v})),e.d(a,"I",(function(){return d})),e.d(a,"J",(function(){return g})),e.d(a,"H",(function(){return s})),e.d(a,"y",(function(){return f})),e.d(a,"w",(function(){return p})),e.d(a,"O",(function(){return m})),e.d(a,"e",(function(){return h})),e.d(a,"T",(function(){return O})),e.d(a,"i",(function(){return j})),e.d(a,"S",(function(){return y})),e.d(a,"q",(function(){return w})),e.d(a,"u",(function(){return k})),e.d(a,"a",(function(){return C})),e.d(a,"z",(function(){return _})),e.d(a,"j",(function(){return x})),e.d(a,"r",(function(){return B})),e.d(a,"n",(function(){return S})),e.d(a,"F",(function(){return V})),e.d(a,"P",(function(){return N})),e.d(a,"L",(function(){return z})),e.d(a,"v",(function(){return T})),e.d(a,"f",(function(){return E})),e.d(a,"b",(function(){return P})),e.d(a,"Q",(function(){return A})),e.d(a,"R",(function(){return I})),e.d(a,"C",(function(){return D})),e.d(a,"p",(function(){return M})),e.d(a,"G",(function(){return F})),e.d(a,"M",(function(){return L})),e.d(a,"c",(function(){return R})),e.d(a,"t",(function(){return $})),e.d(a,"D",(function(){return q})),e.d(a,"E",(function(){return J})),e.d(a,"B",(function(){return U})),e.d(a,"g",(function(){return G})),e.d(a,"h",(function(){return H})),e.d(a,"s",(function(){return K})),e.d(a,"K",(function(){return Q}));var t=e("88c3"),o=[{value:"zh",label:t["a"].global.t("chinese")},{value:"en",label:t["a"].global.t("english")},{value:"frn",label:t["a"].global.t("french")}],b=[{value:1,label:t["a"].global.t("useInformation")},{value:2,label:t["a"].global.t("paymentMethod")},{value:3,label:t["a"].global.t("accountFunds")},{value:4,label:t["a"].global.t("multiAddressInformation")},{value:5,label:t["a"].global.t("messageNotifications")},{value:6,label:t["a"].global.t("modifyPassword")},{value:7,label:t["a"].global.t("logOut")}],u=[{value:1,label:t["a"].global.t("vipCustomer")},{value:2,label:t["a"].global.t("normalCustomer")}],n=[{value:1,label:t["a"].global.t("yes")},{value:2,label:t["a"].global.t("no")}],r=[{value:1,label:t["a"].global.t("creatStatus")},{value:2,label:t["a"].global.t("openStatus")},{value:3,label:t["a"].global.t("closeStatus")}],c=[{value:0,label:t["a"].global.t("no")},{value:1,label:t["a"].global.t("yes")}],i=[{value:"zh",label:t["a"].global.t("zh")},{value:"en",label:t["a"].global.t("en")},{value:"ca",label:t["a"].global.t("ca")}],v=[{value:"alexander",label:t["a"].global.t("Alexander")},{value:"alonsa",label:t["a"].global.t("Alonsa")},{value:"altona",label:t["a"].global.t("Altona")}],d=[{value:"ab",label:t["a"].global.t("AB")},{value:"bc",label:t["a"].global.t("BC")},{value:"mb",label:t["a"].global.t("MB")}],g=[{value:1,label:t["a"].global.t("goodProduct")},{value:2,label:t["a"].global.t("badProduct")}],s=[{value:"1",label:t["a"].global.t("solid")},{value:"2",label:t["a"].global.t("liquid")},{value:"3",label:t["a"].global.t("gas")}],f=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],p=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],m=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],h=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("shipped")},{value:"5",label:t["a"].global.t("deliveried")},{value:"6",label:t["a"].global.t("cancel")},{value:"7",label:t["a"].global.t("shipping")},{value:"allStatus",label:t["a"].global.t("allStatus")}],O=[{value:"1",label:t["a"].global.t("allWarehouse")}],j=[{value:"1",label:t["a"].global.t("businessType_1")},{value:"2",label:t["a"].global.t("businessType_2")},{value:"3",label:t["a"].global.t("businessType_3")}],y=[{value:"EA",label:t["a"].global.t("EA")},{value:"PL",label:t["a"].global.t("PL")},{value:"CS",label:t["a"].global.t("CS")},{value:"other",label:t["a"].global.t("other")}],w=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("shipped")},{value:"5",label:t["a"].global.t("deliveried")},{value:"6",label:t["a"].global.t("cancel")},{value:"allStatus",label:t["a"].global.t("allStatus")}],k=[{value:"1",label:t["a"].global.t("occupied")},{value:"2",label:t["a"].global.t("notYet")}],C=[{value:"1",label:t["a"].global.t("expedited")},{value:"2",label:t["a"].global.t("priority")},{value:"3",label:t["a"].global.t("standard")}],_=[{value:"1",label:t["a"].global.t("yes")},{value:"2",label:t["a"].global.t("no")}],x=[{value:"1",label:t["a"].global.t("darwynnDeliver")},{value:"2",label:t["a"].global.t("canadaPost")},{value:"3",label:t["a"].global.t("pickUp")},{value:"4",label:t["a"].global.t("usps")}],B=[{value:"1",label:t["a"].global.t("Test1")},{value:"2",label:t["a"].global.t("Test2")}],S=[{value:"1",label:t["a"].global.t("xbz")},{value:"2",label:t["a"].global.t("swy")}],V=[{value:"all",label:t["a"].global.t("platform_1")}],N=[{value:"ebay",label:t["a"].global.t("ebay")},{value:"shopify",label:t["a"].global.t("shopify")},{value:"amazon",label:t["a"].global.t("amazon")}],z=[{value:"1",label:t["a"].global.t("b2bReturns")},{value:"2",label:t["a"].global.t("b2cReturns")},{value:"all",label:t["a"].global.t("all")}],T=[{value:"1",label:t["a"].global.t("create")},{value:"2",label:t["a"].global.t("submit")},{value:"3",label:t["a"].global.t("audited")},{value:"4",label:t["a"].global.t("received")},{value:"5",label:t["a"].global.t("invoiced")},{value:"6",label:t["a"].global.t("cancel")}],E=(t["a"].global.t("create"),t["a"].global.t("submit"),t["a"].global.t("audited"),t["a"].global.t("invoed"),t["a"].global.t("uninvo"),t["a"].global.t("cad"),t["a"].global.t("rmb"),t["a"].global.t("dollar"),[{value:"1",label:t["a"].global.t("bookkept")},{value:"2",label:t["a"].global.t("unbookkept")},{value:"all",label:t["a"].global.t("allStatus")}]),P=[{value:"1",label:t["a"].global.t("group")},{value:"2",label:t["a"].global.t("groupFinance")},{value:"3",label:t["a"].global.t("common")}],A=[{value:"1",label:t["a"].global.t("normal")},{value:"2",label:t["a"].global.t("closed")}],I=[{value:"usa",label:t["a"].global.t("usa")},{value:"china",label:t["a"].global.t("china")},{value:"canada",label:t["a"].global.t("canada")}],D=(t["a"].global.t("amazon"),t["a"].global.t("shopify"),t["a"].global.t("ebay"),[{value:"1",label:t["a"].global.t("expedited")},{value:"2",label:t["a"].global.t("standard")}]),M=[{value:"1",label:t["a"].global.t("custom")},{value:"2",label:t["a"].global.t("express")},{value:"3",label:t["a"].global.t("standard")},{value:"4",label:t["a"].global.t("standardInternational")}],F=[{value:"amazon",label:t["a"].global.t("amazon")},{value:"shopify",label:t["a"].global.t("shopify")},{value:"ebay",label:t["a"].global.t("ebay")}],L=[{value:"1",label:t["a"].global.t("B2B")},{value:"2",label:t["a"].global.t("B2C")}],R=[{value:"1",label:t["a"].global.t("accountsType_1")},{value:"2",label:t["a"].global.t("accountsType_2")}],$=[{value:"1",label:t["a"].global.t("passport")},{value:"2",label:t["a"].global.t("drivingLicense")},{value:"3",label:t["a"].global.t("citizenCard")},{value:"4",label:t["a"].global.t("residentID")}],q=[{value:"1",label:t["a"].global.t("creditCard")},{value:"2",label:t["a"].global.t("accountPeriod")},{value:"3",label:t["a"].global.t("cash")}],J=[{value:1,label:t["a"].global.t("creditCard")}],U=[{value:"1",label:t["a"].global.t("primary")},{value:"2",label:t["a"].global.t("backup")}],G=[{value:"1",label:t["a"].global.t("audited")},{value:"all",label:t["a"].global.t("all")}],H=[{value:"all",label:t["a"].global.t("all")},{value:"1",label:t["a"].global.t("deduction")},{value:"2",label:t["a"].global.t("fine")},{value:"3",label:t["a"].global.t("strikeBalance")}],K=[{value:"all",label:t["a"].global.t("all")},{value:"1",label:t["a"].global.t("applicationDeduction")},{value:"2",label:t["a"].global.t("fine")},{value:"3",label:t["a"].global.t("strikeBalance")},{value:"4",label:t["a"].global.t("cashRecharge")}],Q=[{value:1,label:t["a"].global.t("reports_1"),disabled:!1},{value:2,label:t["a"].global.t("reports_2"),disabled:!1},{value:3,label:t["a"].global.t("reports_3"),disabled:!1},{value:4,label:t["a"].global.t("reports_4"),disabled:!1},{value:5,label:t["a"].global.t("reports_5"),disabled:!1},{value:6,label:t["a"].global.t("reports_6"),disabled:!1}]},6330:function(l,a,e){},b724:function(l,a,e){"use strict";e("2d5b")}}]);
//# sourceMappingURL=chunk-7b8411b1.103a045a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f0bbb49"],{"041b":function(e,t,a){},"19a6":function(e,t,a){},"200c":function(e,t,a){e.exports=a.p+"img/china.7e1a99bf.png"},"27af":function(e,t,a){e.exports=a.p+"img/Industry-We-Served-hero-bkg.5f1ba112.png"},3573:function(e,t,a){"use strict";var l=a("7a23"),o={class:"page-content"};function n(e,t,a,n,r,c){var u=Object(l["resolveComponent"])("hy-table");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createVNode"])(u,Object(l["mergeProps"])({listData:e.dataList,listCount:e.dataCount},e.contentTableConfig,{pageInfo:e.pageInfo,onSelectionChange:e.selectionChange}),null,16,["listData","listCount","pageInfo","onSelectionChange"])])}var r=a("0613");a("99af"),a("7db0");function c(e,t){var a=Object(r["c"])(),l=a.state.login.permissions,o="system:".concat(e,":").concat(t);return!!l.find((function(e){return e===o}))}a("a9e3"),a("4de4");var u=a("834a"),b=function(e){return Object(l["pushScopeId"])("data-v-18435cc8"),e=e(),Object(l["popScopeId"])(),e},i={class:"hy-table"},s=["src"],d=["onClick"],p={key:1},g=b((function(){return Object(l["createElementVNode"])("span",{class:"el-dropdown-link"},[Object(l["createElementVNode"])("i",{class:"el-icon-more el-icon--right more"})],-1)})),f={key:0},v={key:0,class:"footer"},m=Object(l["defineComponent"])({__name:"table",props:{title:{type:String,default:""},listData:{type:Array,required:!0},totalCount:{type:Number,default:0},propList:{type:Array,required:!0},isOperation:{type:Boolean,default:!1},border:{type:Boolean,default:!1},showIndexColumn:{type:Boolean,default:!1},showSelectColumn:{type:Boolean,default:!1},operation:{type:Object,required:!0},pageInfo:{type:Object,default:function(){return{}}},childrenProps:{type:Object,default:function(){return{}}},showFooter:{type:Boolean,default:!0}},emits:["selectionChange"],setup:function(e,t){var a=t.emit,o=e,n=(Object(l["computed"])((function(){var e=o.operation.cols;return e.length&&e.length>0})),Object(l["computed"])((function(){return o.isOperation&&o.operation.cols.length}))),r=function(e,t){var a=t.value.filter((function(t){return t.value===e}));return a.length>0?a[0].label:"--"},c=function(e){return e?Object(u["a"])(e):"--"},b=function(e){a("selectionChange",e)};return function(t,a){var o=Object(l["resolveComponent"])("el-table-column"),u=Object(l["resolveComponent"])("el-button"),m=Object(l["resolveComponent"])("el-dropdown-item"),O=Object(l["resolveComponent"])("el-dropdown-menu"),j=Object(l["resolveComponent"])("el-dropdown"),h=Object(l["resolveComponent"])("el-table"),y=Object(l["resolveComponent"])("el-pagination");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",i,[Object(l["createVNode"])(h,Object(l["mergeProps"])({data:e.listData,border:e.border,size:"mini",style:{width:"100%"},"header-row-class-name":"hyTable",onSelectionChange:b},e.childrenProps),{default:Object(l["withCtx"])((function(){return[e.showSelectColumn?(Object(l["openBlock"])(),Object(l["createBlock"])(o,{key:0,type:"selection",align:"left",width:"60"})):Object(l["createCommentVNode"])("",!0),e.showIndexColumn?(Object(l["openBlock"])(),Object(l["createBlock"])(o,{key:1,type:"index",label:t.$t("serialNumber"),align:"left",width:"80"},null,8,["label"])):Object(l["createCommentVNode"])("",!0),(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.propList,(function(e){return Object(l["openBlock"])(),Object(l["createBlock"])(o,Object(l["mergeProps"])({key:e.prop},e,{align:"left","show-overflow-tooltip":""}),{default:Object(l["withCtx"])((function(a){return["select"===e.type?Object(l["renderSlot"])(t.$slots,e.slotName,{key:0,row:a.row},(function(){return[Object(l["createTextVNode"])(Object(l["toDisplayString"])(r(a.row[e.prop],e.option)),1)]})):"time"===e.type?Object(l["renderSlot"])(t.$slots,e.slotName,{key:1,row:a.row},(function(){return[Object(l["createTextVNode"])(Object(l["toDisplayString"])(c(a.row[e.prop])),1)]})):"image"===e.type?Object(l["renderSlot"])(t.$slots,e.slotName,{key:2,row:a.row},(function(){return[Object(l["createElementVNode"])("img",{src:a.row[e.prop],style:{width:"30px",height:"30px"}},null,8,s)]})):"link"===e.type?Object(l["renderSlot"])(t.$slots,e.slotName,{key:3,row:a.row},(function(){return[Object(l["createVNode"])(u,{size:"small",onClick:e.handleLink,type:"text"},{default:Object(l["withCtx"])((function(){return[Object(l["createTextVNode"])(Object(l["toDisplayString"])(a.row[e.prop]),1)]})),_:2},1032,["onClick"])]})):Object(l["renderSlot"])(t.$slots,e.slotName,{key:4,row:a.row},(function(){return[e.handleCell?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:0,onClick:function(t){return e.handleCell(a.row)}},Object(l["toDisplayString"])(a.row[e.prop]),9,d)):Object(l["createCommentVNode"])("",!0),e.handleCell?Object(l["createCommentVNode"])("",!0):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",p,Object(l["toDisplayString"])(a.row[e.prop]),1))]}))]})),_:2},1040)})),128)),Object(l["unref"])(n)?(Object(l["openBlock"])(),Object(l["createBlock"])(o,{key:2,fixed:"right",label:e.operation.label,width:e.operation.width,align:"left"},{default:Object(l["withCtx"])((function(t){return[Object(l["createVNode"])(j,null,{dropdown:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(O,null,{default:Object(l["withCtx"])((function(){return[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.operation.cols,(function(e){return Object(l["openBlock"])(),Object(l["createBlock"])(m,{key:e.label,disable:e.display&&e.display(t.row),onClick:function(a){return e.handleRow(t.row,e.label)}},{default:Object(l["withCtx"])((function(){return[!e.display||e.display&&e.display(t.row)?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",f,Object(l["toDisplayString"])(e.label),1)):Object(l["createCommentVNode"])("",!0)]})),_:2},1032,["disable","onClick"])})),128))]})),_:2},1024)]})),default:Object(l["withCtx"])((function(){return[g]})),_:2},1024)]})),_:1},8,["label","width"])):Object(l["createCommentVNode"])("",!0)]})),_:3},16,["data","border"]),e.showFooter?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",v,[Object(l["renderSlot"])(t.$slots,"footer",{},(function(){return[Object(l["createVNode"])(y,{onSizeChange:e.pageInfo.handleSizeChange,onCurrentChange:e.pageInfo.handleCurrentChange,"current-page":e.pageInfo.currentPage,"page-size":e.pageInfo.pageSize,"page-sizes":e.pageInfo.pageSizes,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.totalCount},null,8,["onSizeChange","onCurrentChange","current-page","page-size","page-sizes","total"])]}))])):Object(l["createCommentVNode"])("",!0)])}}}),O=(a("fb26"),a("6b0d")),j=a.n(O);const h=j()(m,[["__scopeId","data-v-18435cc8"]]);var y=h,C=y,w=Object(l["defineComponent"])({components:{HyTable:C},props:{contentTableConfig:{type:Object,require:!0},pageName:{type:String,required:!0},tableData:{type:Array,require:!0},pageInfo:{type:Object,require:!0}},emits:["newBtnClick","editBtnClick","selectionRow"],setup:function(e,t){var a=t.emit,o=Object(l["ref"])(e.tableData),n=Object(r["c"])(),u=c(e.pageName,"create"),b=c(e.pageName,"update"),i=c(e.pageName,"delete"),s=(c(e.pageName,"query"),function(e){a("selectionRow",e)}),d=function(){};d();var p=Object(l["computed"])((function(){return n.getters["system/pageListCount"](e.pageName)})),g=function(){a("newBtnClick")},f=function(e){a("editBtnClick",e)};return{dataList:o,getPageData:d,dataCount:p,isCreate:u,isUpdate:b,isDelete:i,handleNewClick:g,handleEditClick:f,selectionChange:s}}});a("b802");const N=j()(w,[["render",n],["__scopeId","data-v-3eacb257"]]);var k=N;t["a"]=k},"394a":function(e,t,a){"use strict";a.d(t,"B",(function(){return o})),a.d(t,"O",(function(){return n})),a.d(t,"p",(function(){return r})),a.d(t,"n",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"y",(function(){return b})),a.d(t,"m",(function(){return i})),a.d(t,"l",(function(){return s})),a.d(t,"J",(function(){return d})),a.d(t,"K",(function(){return p})),a.d(t,"I",(function(){return g})),a.d(t,"z",(function(){return f})),a.d(t,"x",(function(){return v})),a.d(t,"P",(function(){return m})),a.d(t,"e",(function(){return O})),a.d(t,"U",(function(){return j})),a.d(t,"i",(function(){return h})),a.d(t,"T",(function(){return y})),a.d(t,"r",(function(){return C})),a.d(t,"v",(function(){return w})),a.d(t,"a",(function(){return N})),a.d(t,"A",(function(){return k})),a.d(t,"j",(function(){return x})),a.d(t,"s",(function(){return S})),a.d(t,"o",(function(){return V})),a.d(t,"G",(function(){return I})),a.d(t,"Q",(function(){return _})),a.d(t,"M",(function(){return B})),a.d(t,"w",(function(){return T})),a.d(t,"f",(function(){return P})),a.d(t,"b",(function(){return E})),a.d(t,"R",(function(){return z})),a.d(t,"S",(function(){return D})),a.d(t,"D",(function(){return A})),a.d(t,"q",(function(){return U})),a.d(t,"H",(function(){return F})),a.d(t,"N",(function(){return L})),a.d(t,"c",(function(){return R})),a.d(t,"u",(function(){return $})),a.d(t,"E",(function(){return M})),a.d(t,"F",(function(){return W})),a.d(t,"C",(function(){return q})),a.d(t,"g",(function(){return K})),a.d(t,"h",(function(){return H})),a.d(t,"t",(function(){return G})),a.d(t,"L",(function(){return Q})),a.d(t,"k",(function(){return Y}));var l=a("88c3"),o=[{value:"zh",label:l["a"].global.t("chinese")},{value:"en",label:l["a"].global.t("english")},{value:"frn",label:l["a"].global.t("french")}],n=[{value:1,label:l["a"].global.t("useInformation")},{value:2,label:l["a"].global.t("paymentMethod")},{value:3,label:l["a"].global.t("accountFunds")},{value:4,label:l["a"].global.t("multiAddressInformation")},{value:5,label:l["a"].global.t("messageNotifications")},{value:6,label:l["a"].global.t("modifyPassword")},{value:7,label:l["a"].global.t("logOut")}],r=[{value:1,label:l["a"].global.t("vipCustomer")},{value:2,label:l["a"].global.t("normalCustomer")}],c=[{value:1,label:l["a"].global.t("yes")},{value:2,label:l["a"].global.t("no")}],u=[{value:1,label:l["a"].global.t("creatStatus")},{value:2,label:l["a"].global.t("openStatus")},{value:3,label:l["a"].global.t("closeStatus")}],b=[{value:0,label:l["a"].global.t("no")},{value:1,label:l["a"].global.t("yes")}],i=[{value:"zh",label:l["a"].global.t("zh")},{value:"en",label:l["a"].global.t("en")},{value:"ca",label:l["a"].global.t("ca")}],s=[{value:"alexander",label:l["a"].global.t("Alexander")},{value:"alonsa",label:l["a"].global.t("Alonsa")},{value:"altona",label:l["a"].global.t("Altona")}],d=[{value:"ab",label:l["a"].global.t("AB")},{value:"bc",label:l["a"].global.t("BC")},{value:"mb",label:l["a"].global.t("MB")}],p=[{value:1,label:l["a"].global.t("goodProduct")},{value:2,label:l["a"].global.t("badProduct")}],g=[{value:"1",label:l["a"].global.t("solid")},{value:"2",label:l["a"].global.t("liquid")},{value:"3",label:l["a"].global.t("gas")}],f=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],v=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],m=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],O=[{value:"1",label:l["a"].global.t("create")},{value:"2",label:l["a"].global.t("submit")},{value:"3",label:l["a"].global.t("audited")},{value:"4",label:l["a"].global.t("shipped")},{value:"5",label:l["a"].global.t("deliveried")},{value:"6",label:l["a"].global.t("cancel")},{value:"7",label:l["a"].global.t("shipping")},{value:"allStatus",label:l["a"].global.t("allStatus")}],j=[{value:"1",label:l["a"].global.t("allWarehouse")}],h=[{value:"1",label:l["a"].global.t("businessType_1")},{value:"2",label:l["a"].global.t("businessType_2")},{value:"3",label:l["a"].global.t("businessType_3")}],y=[{value:"EA",label:l["a"].global.t("EA")},{value:"PL",label:l["a"].global.t("PL")},{value:"CS",label:l["a"].global.t("CS")},{value:"other",label:l["a"].global.t("other")}],C=[{value:"1",label:l["a"].global.t("create")},{value:"2",label:l["a"].global.t("submit")},{value:"3",label:l["a"].global.t("audited")},{value:"4",label:l["a"].global.t("shipped")},{value:"5",label:l["a"].global.t("deliveried")},{value:"6",label:l["a"].global.t("cancel")},{value:"allStatus",label:l["a"].global.t("allStatus")}],w=[{value:"1",label:l["a"].global.t("occupied")},{value:"2",label:l["a"].global.t("notYet")}],N=[{value:"1",label:l["a"].global.t("expedited")},{value:"2",label:l["a"].global.t("priority")},{value:"3",label:l["a"].global.t("standard")}],k=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],x=[{value:"1",label:l["a"].global.t("darwynnDeliver")},{value:"2",label:l["a"].global.t("canadaPost")},{value:"3",label:l["a"].global.t("pickUp")},{value:"4",label:l["a"].global.t("usps")}],S=[{value:"1",label:l["a"].global.t("Test1")},{value:"2",label:l["a"].global.t("Test2")}],V=[{value:"1",label:l["a"].global.t("xbz")},{value:"2",label:l["a"].global.t("swy")}],I=[{value:"all",label:l["a"].global.t("platform_1")}],_=[{value:"ebay",label:l["a"].global.t("ebay")},{value:"shopify",label:l["a"].global.t("shopify")},{value:"amazon",label:l["a"].global.t("amazon")}],B=[{value:"1",label:l["a"].global.t("b2bReturns")},{value:"2",label:l["a"].global.t("b2cReturns")},{value:"all",label:l["a"].global.t("all")}],T=[{value:"1",label:l["a"].global.t("create")},{value:"2",label:l["a"].global.t("submit")},{value:"3",label:l["a"].global.t("audited")},{value:"4",label:l["a"].global.t("received")},{value:"5",label:l["a"].global.t("invoiced")},{value:"6",label:l["a"].global.t("cancel")}],P=(l["a"].global.t("create"),l["a"].global.t("submit"),l["a"].global.t("audited"),l["a"].global.t("invoed"),l["a"].global.t("uninvo"),l["a"].global.t("cad"),l["a"].global.t("rmb"),l["a"].global.t("dollar"),[{value:"1",label:l["a"].global.t("bookkept")},{value:"2",label:l["a"].global.t("unbookkept")},{value:"all",label:l["a"].global.t("allStatus")}]),E=[{value:"1",label:l["a"].global.t("group")},{value:"2",label:l["a"].global.t("groupFinance")},{value:"3",label:l["a"].global.t("common")}],z=[{value:"1",label:l["a"].global.t("normal")},{value:"2",label:l["a"].global.t("closed")}],D=[{value:"usa",label:l["a"].global.t("usa")},{value:"china",label:l["a"].global.t("china")},{value:"canada",label:l["a"].global.t("canada")}],A=(l["a"].global.t("amazon"),l["a"].global.t("shopify"),l["a"].global.t("ebay"),[{value:"1",label:l["a"].global.t("expedited")},{value:"2",label:l["a"].global.t("standard")}]),U=[{value:"1",label:l["a"].global.t("custom")},{value:"2",label:l["a"].global.t("express")},{value:"3",label:l["a"].global.t("standard")},{value:"4",label:l["a"].global.t("standardInternational")}],F=[{value:"amazon",label:l["a"].global.t("amazon")},{value:"shopify",label:l["a"].global.t("shopify")},{value:"ebay",label:l["a"].global.t("ebay")}],L=[{value:"1",label:l["a"].global.t("B2B")},{value:"2",label:l["a"].global.t("B2C")}],R=[{value:"1",label:l["a"].global.t("accountsType_1")},{value:"2",label:l["a"].global.t("accountsType_2")}],$=[{value:"1",label:l["a"].global.t("passport")},{value:"2",label:l["a"].global.t("drivingLicense")},{value:"3",label:l["a"].global.t("citizenCard")},{value:"4",label:l["a"].global.t("residentID")}],M=[{value:"1",label:l["a"].global.t("creditCard")},{value:"2",label:l["a"].global.t("accountPeriod")},{value:"3",label:l["a"].global.t("cash")}],W=[{value:1,label:l["a"].global.t("creditCard")}],q=[{value:"1",label:l["a"].global.t("primary")},{value:"2",label:l["a"].global.t("backup")}],K=[{value:"1",label:l["a"].global.t("audited")},{value:"all",label:l["a"].global.t("all")}],H=[{value:"all",label:l["a"].global.t("all")},{value:"1",label:l["a"].global.t("deduction")},{value:"2",label:l["a"].global.t("fine")},{value:"3",label:l["a"].global.t("strikeBalance")}],G=[{value:"all",label:l["a"].global.t("all")},{value:"1",label:l["a"].global.t("applicationDeduction")},{value:"2",label:l["a"].global.t("fine")},{value:"3",label:l["a"].global.t("strikeBalance")},{value:"4",label:l["a"].global.t("cashRecharge")}],Q=[{value:1,label:l["a"].global.t("reports_1"),disabled:!1},{value:2,label:l["a"].global.t("reports_2"),disabled:!1},{value:3,label:l["a"].global.t("reports_3"),disabled:!1},{value:4,label:l["a"].global.t("reports_4"),disabled:!1},{value:5,label:l["a"].global.t("reports_5"),disabled:!1},{value:6,label:l["a"].global.t("reports_6"),disabled:!1}],Y=[{value:1,label:l["a"].global.t("passport"),disabled:!1},{value:2,label:l["a"].global.t("drivingLicense"),disabled:!1},{value:3,label:l["a"].global.t("residentId"),disabled:!1},{value:4,label:l["a"].global.t("citizenCard"),disabled:!1}]},4714:function(e,t,a){e.exports=a.p+"img/ebay.603b3255.png"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var l=a("1d80"),o=a("5899"),n="["+o+"]",r=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),u=function(e){return function(t){var a=String(l(t));return 1&e&&(a=a.replace(r,"")),2&e&&(a=a.replace(c,"")),a}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,a){var l=a("861d"),o=a("d2bb");e.exports=function(e,t,a){var n,r;return o&&"function"==typeof(n=t.constructor)&&n!==a&&l(r=n.prototype)&&r!==a.prototype&&o(e,r),e}},"7a4d":function(e,t,a){e.exports=a.p+"img/amazon.09c82da2.png"},"7aef":function(e,t,a){e.exports=a.p+"img/waving-hand.2379c8e9.png"},"82bb":function(e,t,a){e.exports=a.p+"img/cool-background.a967f6b1.png"},"834a":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("a9e3");function l(e){var t=new Date(Number(e)),a=t.getFullYear()+"-",l=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=(t.getHours()<10?"0"+t.getHours():t.getHours())+":",r=(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":",c=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return a+l+o+" "+n+r+c}},"9bdd0":function(e,t,a){"use strict";a.r(t);a("8ac7");var l=a("e661"),o=a.n(l),n=(a("7f17"),a("6573")),r=a.n(n),c=(a("0769"),a("31b0")),u=a.n(c),b=a("7a23"),i=a("47e2"),s=a("3573"),d=a("394a"),p=function(e){return Object(b["pushScopeId"])("data-v-23ad091a"),e=e(),Object(b["popScopeId"])(),e},g={class:"worder-main"},f={class:"create"},v={class:"el-dropdown-link"},m=["src"],O=p((function(){return Object(b["createElementVNode"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)})),j=["src"],h={class:"dialog-footer"},y=Object(b["defineComponent"])({__name:"main",setup:function(e){var t=Object(i["b"])(),l=t.t,n=Object(b["ref"])(!1),c=Object(b["ref"])("usa"),p=Object(b["ref"])(),y=Object(b["computed"])((function(){return d["b"]})),C=Object(b["computed"])((function(){return d["R"]})),w=Object(b["reactive"])({userID:[{required:!0,trigger:"change"}]}),N=Object(b["computed"])((function(){return d["S"]})),k=Object(b["ref"])({}),x=Object(b["ref"])({}),S=function(){V()},V=function(){var e;null===(e=p.value)||void 0===e||e.resetFields(),n.value=!0},I=function(){var e;null===(e=p.value)||void 0===e||e.resetFields(),n.value=!1},_=function(){var e;null===(e=p.value)||void 0===e||e.validate((function(e){e&&(n.value=!1,console.log(k.value,"formModel"))}))},B=function(e){c.value=e,k.value.areaCode="china"===e?"+86":"+1",console.log(e,"valdropdownItem")},T=function(e,t){"Edit"===t&&(V(),k.value=e),"Delete"===t&&u.a.confirm(l("deleteChange"),l("deleteTips"),{distinguishCancelAndClose:!0,confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),customClass:"message-box",center:!0}).then((function(){r()({type:"success",message:l("deleteSuccessful")})})).catch((function(e){r()({type:"info",message:l("cancel"===e?"deleteFailed":"canceled")})})),t===l("copy")&&console.log("copy"),t===l("cancel")&&r.a.success(l("cancelSuccessful"))},P={propList:[{prop:"userName",label:l("userName"),minWidth:"120"},{prop:"accountType",label:l("accountType"),minWidth:"100",type:"select",option:y},{prop:"status",label:l("status"),minWidth:"100",type:"select",option:C}],showIndexColumn:!1,showSelectColumn:!1,isOperation:!0,operation:{label:l("operation"),width:"200",cols:[{label:l("edit"),type:"primary",handleRow:T},{label:l("close"),type:"primary",display:function(e){return"2"!==e.status},handleRow:T},{label:l("open"),type:"primary",display:function(e){return"1"!==e.status},handleRow:T}]},childrenProps:{rowKey:"id",treeProp:{children:"children"}},border:!1,showFooter:!0,totalCount:12},E=function(){var e=Object.assign({},x.value,{pageSize:A.value.pageSize,currentPage:A.value.currentPage});console.log(e,"params查询")},z=function(e){A.value.pageSize=e,E()},D=function(e){A.value.currentPage=e,E()},A=Object(b["ref"])({totalCount:100,pageSizes:[10,20,50,100],handleSizeChange:z,handleCurrentChange:D,currentPage:1,pageSize:20}),U=Object(b["ref"])([{userName:"chris@darwynn.com",orderName:"#2374",accountType:"1",status:"1",fromPlat:"amazon",importTime:"1680754782",shippingTime:"1",outboundWarehouse:"WH003",creatTime:"1680241049875",totalPacking:139,sku:"SKU1,SKU2",inventoryStatus:"1",consigneeName:"xbz"},{userName:"moriq@darwynn.com",status:"2",accountType:"2",importTime:"1680754782",applyStatus:"2",fromOrderNo:"PO2303",fromPlat:"amazon",outboundWarehouse:"WH004",creationTime:"1680241049875",totalPacking:109,sku:"SKU3,SKU1",inventoryStatus:"2",consigneeName:"xbz",consigneePhone:"152515909379",expectedQty:10},{userName:"zhangsan",status:"1",accountType:"3",shippingTime:"3",importTime:"1680754782",fromPlat:"shopify",fromOrderNo:"PO2303",outboundWarehouse:"WH005",creationTime:"1680241049875",totalPacking:109,sku:"SKU3,SKU4",inventoryStatus:"1",consigneeName:"xbz",consigneePhone:"152515909379",expectedQty:20},{userName:"lisi",status:"1",importTime:"1680754782",fromPlat:"shopify",accountType:"1",orderName:"#2074",fromOrderNo:"PO2103",outboundWarehouse:"WH005",creationTime:"1680241049870",totalPacking:79,sku:"SKU3,SKU4",inventoryStatus:"1",consigneeName:"xbz",consigneePhone:"152515909379",expectedQty:10}]);return Object(b["onMounted"])((function(){k.value={areaCode:"+1"},E()})),function(e,t){var l=Object(b["resolveComponent"])("el-button"),r=Object(b["resolveComponent"])("el-input"),u=Object(b["resolveComponent"])("el-form-item"),i=Object(b["resolveComponent"])("el-option"),d=Object(b["resolveComponent"])("el-select"),C=Object(b["resolveComponent"])("el-dropdown-item"),x=Object(b["resolveComponent"])("el-dropdown-menu"),V=Object(b["resolveComponent"])("el-dropdown"),T=Object(b["resolveComponent"])("el-col"),E=Object(b["resolveComponent"])("el-row"),z=Object(b["resolveComponent"])("el-dialog");return Object(b["openBlock"])(),Object(b["createElementBlock"])("div",g,[Object(b["createElementVNode"])("div",f,[Object(b["createVNode"])(l,{onClick:S,type:"primary"},{default:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(e.$t("createOwner")),1)]})),_:1})]),Object(b["createVNode"])(Object(b["unref"])(s["a"]),{ref:"pageContentRef",contentTableConfig:P,pageInfo:A.value,pageName:"role",tableData:U.value},null,8,["pageInfo","tableData"]),Object(b["createVNode"])(z,{title:e.$t("fillUser"),modelValue:Object(b["unref"])(n),"onUpdate:modelValue":t[6]||(t[6]=function(e){return Object(b["isRef"])(n)?n.value=e:n=e}),width:"45%"},{footer:Object(b["withCtx"])((function(){return[Object(b["createElementVNode"])("span",h,[Object(b["createVNode"])(l,{onClick:I},{default:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(e.$t("cancel")),1)]})),_:1}),Object(b["createVNode"])(l,{type:"primary",onClick:_},{default:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(e.$t("confirm")),1)]})),_:1})])]})),default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(Object(b["unref"])(o.a),{model:k.value,"status-icon":"",rules:w,ref_key:"formRef",ref:p,"label-width":"9rem",class:"formModel"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(u,{class:"editInput",prop:"userID",label:e.$t("userID")},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(r,{clearable:"",modelValue:k.value.userID,"onUpdate:modelValue":t[0]||(t[0]=function(e){return k.value.userID=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(b["createVNode"])(u,{class:"editInput",label:e.$t("userName"),prop:"userName"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(r,{clearable:"",modelValue:k.value.userName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return k.value.userName=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(b["createVNode"])(u,{class:"editInput",label:e.$t("userPassword"),prop:"userPassword"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(r,{clearable:"",type:"password",modelValue:k.value.userPassword,"onUpdate:modelValue":t[2]||(t[2]=function(e){return k.value.userPassword=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(b["createVNode"])(u,{label:e.$t("confirmPassword"),class:"editInput",prop:"confirmPassword"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(r,{clearable:"",type:"password",modelValue:k.value.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=function(e){return k.value.confirmPassword=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(b["createVNode"])(u,{label:e.$t("accountType"),prop:"accountType"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(d,{clearable:"",modelValue:k.value.accountType,"onUpdate:modelValue":t[4]||(t[4]=function(e){return k.value.accountType=e})},{default:Object(b["withCtx"])((function(){return[(Object(b["openBlock"])(!0),Object(b["createElementBlock"])(b["Fragment"],null,Object(b["renderList"])(Object(b["unref"])(y),(function(e){return Object(b["openBlock"])(),Object(b["createBlock"])(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["label"]),Object(b["createVNode"])(u,{class:"telephone",label:e.$t("telephone"),prop:"telephone"},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(E,{class:"telephone-col",gutter:20},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(T,{span:4},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(V,null,{dropdown:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(x,null,{default:Object(b["withCtx"])((function(){return[(Object(b["openBlock"])(!0),Object(b["createElementBlock"])(b["Fragment"],null,Object(b["renderList"])(Object(b["unref"])(N),(function(e){return Object(b["openBlock"])(),Object(b["createBlock"])(C,{key:e.value,onClick:function(t){return B(e.value)}},{default:Object(b["withCtx"])((function(){return[Object(b["createElementVNode"])("img",{style:{width:"30px"},src:a("b967")("./".concat(e.value,".png"))},null,8,j)]})),_:2},1032,["onClick"])})),128))]})),_:1})]})),default:Object(b["withCtx"])((function(){return[Object(b["createElementVNode"])("span",v,[Object(b["createElementVNode"])("img",{style:{width:"30px"},src:a("b967")("./".concat(c.value,".png"))},null,8,m),O])]})),_:1})]})),_:1}),Object(b["createVNode"])(T,{span:20},{default:Object(b["withCtx"])((function(){return[Object(b["createVNode"])(r,{modelValue:k.value.telephone,"onUpdate:modelValue":t[5]||(t[5]=function(e){return k.value.telephone=e}),class:"input-with-select"},{prefix:Object(b["withCtx"])((function(){return[Object(b["createTextVNode"])(Object(b["toDisplayString"])(k.value.areaCode),1)]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["label"])]})),_:1},8,["model","rules"])]})),_:1},8,["title","modelValue"])])}}}),C=(a("cdae"),a("6b0d")),w=a.n(C);const N=w()(y,[["__scopeId","data-v-23ad091a"]]);t["default"]=N},a9e3:function(e,t,a){"use strict";var l=a("83ab"),o=a("da84"),n=a("94ca"),r=a("6eeb"),c=a("5135"),u=a("c6b6"),b=a("7156"),i=a("c04e"),s=a("d039"),d=a("7c73"),p=a("241c").f,g=a("06cf").f,f=a("9bf2").f,v=a("58a8").trim,m="Number",O=o[m],j=O.prototype,h=u(d(j))==m,y=function(e){var t,a,l,o,n,r,c,u,b=i(e,!1);if("string"==typeof b&&b.length>2)if(b=v(b),t=b.charCodeAt(0),43===t||45===t){if(a=b.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(b.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+b}for(n=b.slice(2),r=n.length,c=0;c<r;c++)if(u=n.charCodeAt(c),u<48||u>o)return NaN;return parseInt(n,l)}return+b};if(n(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var C,w=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof w&&(h?s((function(){j.valueOf.call(a)})):u(a)!=m)?b(new O(y(t)),a,w):y(t)},N=l?p(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;N.length>k;k++)c(O,C=N[k])&&!c(w,C)&&f(w,C,g(O,C));w.prototype=j,j.constructor=w,r(o,m,w)}},b3b9:function(e,t,a){e.exports=a.p+"img/Slice-logo-1.8edea22e.png"},b802:function(e,t,a){"use strict";a("eaf2")},b967:function(e,t,a){var l={"./Industry-We-Served-hero-bkg.png":"27af","./Slice-logo-1.png":"b3b9","./amazon.png":"7a4d","./canada.png":"f1ec","./china.png":"200c","./cool-background.png":"82bb","./ebay.png":"4714","./mastercard.png":"ff57","./report-1.png":"bede","./shopify.png":"f775","./svg.png":"e19b","./usa.png":"f1db","./waving-hand.png":"7aef"};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}o.keys=function(){return Object.keys(l)},o.resolve=n,e.exports=o,o.id="b967"},bede:function(e,t,a){e.exports=a.p+"img/report-1.8496299e.png"},cdae:function(e,t,a){"use strict";a("19a6")},e19b:function(e,t,a){e.exports=a.p+"img/svg.75ede1f4.png"},eaf2:function(e,t,a){},f1db:function(e,t,a){e.exports=a.p+"img/usa.87fc5181.png"},f1ec:function(e,t,a){e.exports=a.p+"img/canada.d2d4c5e6.png"},f775:function(e,t,a){e.exports=a.p+"img/shopify.479ff41d.png"},fb26:function(e,t,a){"use strict";a("041b")},ff57:function(e,t,a){e.exports=a.p+"img/mastercard.ad13029f.png"}}]);
//# sourceMappingURL=chunk-1f0bbb49.b8357cf7.js.map
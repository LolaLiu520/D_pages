(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f61af948"],{"304c":function(e,a,t){"use strict";t("7193")},"394a":function(e,a,t){"use strict";t.d(a,"k",(function(){return o})),t.d(a,"g",(function(){return n})),t.d(a,"f",(function(){return r})),t.d(a,"a",(function(){return u})),t.d(a,"i",(function(){return c})),t.d(a,"e",(function(){return i})),t.d(a,"d",(function(){return b})),t.d(a,"m",(function(){return d})),t.d(a,"n",(function(){return p})),t.d(a,"l",(function(){return s})),t.d(a,"j",(function(){return g})),t.d(a,"h",(function(){return h})),t.d(a,"o",(function(){return f})),t.d(a,"b",(function(){return v})),t.d(a,"p",(function(){return m})),t.d(a,"c",(function(){return y}));var l=t("88c3"),o=[{value:"zh",label:l["a"].global.t("chinese")},{value:"en",label:l["a"].global.t("english")},{value:"frn",label:l["a"].global.t("french")}],n=(l["a"].global.t("useInformation"),l["a"].global.t("paymentMethod"),l["a"].global.t("accountFunds"),l["a"].global.t("multiAddressInformation"),l["a"].global.t("messageNotifications"),l["a"].global.t("modifyPassword"),[{value:1,label:l["a"].global.t("vipCustomer")},{value:2,label:l["a"].global.t("normalCustomer")}]),r=[{value:1,label:l["a"].global.t("yes")},{value:2,label:l["a"].global.t("no")}],u=[{value:1,label:l["a"].global.t("creatStatus")},{value:2,label:l["a"].global.t("openStatus")},{value:3,label:l["a"].global.t("closeStatus")}],c=[{value:0,label:l["a"].global.t("no")},{value:1,label:l["a"].global.t("yes")}],i=[{value:"zh",label:l["a"].global.t("zh")},{value:"en",label:l["a"].global.t("en")},{value:"ca",label:l["a"].global.t("ca")}],b=[{value:"alexander",label:l["a"].global.t("Alexander")},{value:"alonsa",label:l["a"].global.t("Alonsa")},{value:"altona",label:l["a"].global.t("Altona")}],d=[{value:"ab",label:l["a"].global.t("AB")},{value:"bc",label:l["a"].global.t("BC")},{value:"mb",label:l["a"].global.t("MB")}],p=[{value:1,label:l["a"].global.t("goodProduct")},{value:2,label:l["a"].global.t("badProduct")}],s=[{value:"1",label:l["a"].global.t("solid")},{value:"2",label:l["a"].global.t("liquid")},{value:"3",label:l["a"].global.t("gas")}],g=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],h=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],f=[{value:"1",label:l["a"].global.t("yes")},{value:"2",label:l["a"].global.t("no")}],v=[{value:"1",label:l["a"].global.t("create")},{value:"2",label:l["a"].global.t("submit")},{value:"3",label:l["a"].global.t("audited")},{value:"4",label:l["a"].global.t("shipped")},{value:"5",label:l["a"].global.t("deliveried")},{value:"6",label:l["a"].global.t("cancel")},{value:"7",label:l["a"].global.t("shipping")}],m=[{value:"1",label:l["a"].global.t("allWarehouse")}],y=[{value:"1",label:l["a"].global.t("businessType_1")},{value:"2",label:l["a"].global.t("businessType_2")},{value:"3",label:l["a"].global.t("businessType_3")}]},"5d82":function(e,a,t){},6957:function(e,a,t){"use strict";t.r(a);var l=t("7a23"),o={class:"query"};function n(e,a,t,n,r,u){var c=Object(l["resolveComponent"])("batch"),i=Object(l["resolveComponent"])("el-tab-pane"),b=Object(l["resolveComponent"])("product"),d=Object(l["resolveComponent"])("el-tabs");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createVNode"])(d,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=function(a){return e.activeName=a}),style:{"caret-color":"transparent"},class:"query-tabs",onTabClick:e.handleClick},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(i,{label:e.$t("batchQuery"),name:"first"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(c)]})),_:1},8,["label"]),Object(l["createVNode"])(i,{label:e.$t("productQuery"),name:"second"},{default:Object(l["withCtx"])((function(){return[Object(l["createVNode"])(b)]})),_:1},8,["label"])]})),_:1},8,["modelValue","onTabClick"])])}var r={class:"product"};function u(e,a,t,o,n,u){var c=Object(l["resolveComponent"])("page-search"),i=Object(l["resolveComponent"])("page-content");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createVNode"])(c,{searchFormConfig:e.searchFormConfig,onQueryBtnClick:e.handleQueryClick},null,8,["searchFormConfig","onQueryBtnClick"]),Object(l["createVNode"])(i,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageInfo:e.pageInfo,pageName:"role",tableData:e.tableData},null,8,["contentTableConfig","pageInfo","tableData"])])}var c=t("fe8c"),i=t("88c3"),b={labelWidth:"120px",itemStyle:{padding:"10px 40px"},colLayout:{span:8},formItems:[{filter:!0,field:"keywords",type:"input",placeholder:i["a"].global.t("productPlaceholder")}]},d=t("47e2"),p=t("3573"),s=t("394a"),g=Object(l["defineComponent"])({name:"product",components:{PageSearch:c["a"],PageContent:p["a"]},setup:function(){var e=Object(d["b"])(),a=e.t,t=Object(l["ref"])({}),o=function(e){t.value=e,p.value.currentPage=1,u()},n=Object(l["computed"])((function(){return s["n"]})),r={propList:[{prop:"warehouseDescr",label:a("warehouseDescr"),minWidth:"130"},{prop:"sku",label:a("sku"),minWidth:"100"},{prop:"productName",label:a("productName"),minWidth:"100"},{prop:"totalQty",label:a("totalQty"),minWidth:"100"},{prop:"qtyAvailable",label:a("qtyAvailable"),minWidth:"120"},{prop:"qtyAllocated",label:a("qtyAllocated"),minWidth:"100"},{prop:"qtyOnhold",label:a("qtyOnhold"),minWidth:"120"},{prop:"controlInventory",label:a("controlInventory"),minWidth:"120"}],showIndexColumn:!1,showSelectColumn:!1,operation:{},childrenProps:{rowKey:"id",treeProp:{children:"children"}},border:!1,showFooter:!0,totalCount:12},u=function(){var e=Object.assign({},t.value,{pageSize:p.value.pageSize,currentPage:p.value.currentPage});console.log(e,"params查询")},c=function(e){p.value.pageSize=e,u()},i=function(e){p.value.currentPage=e,u()},p=Object(l["ref"])({totalCount:100,pageSizes:[10,20,50,100],handleSizeChange:c,handleCurrentChange:i,currentPage:1,pageSize:20}),g=Object(l["ref"])([{warehouseDescr:"02004(Vancouver PROD)",sku:"0232577453",totalQty:100,qtyAllocated:20,controlInventory:1,qtyOnHold:1,openCredit:2,qtyAvailable:3,qtyOnhold:0,warehousingDate:"1672739296000",supplierName:"swy",productName:"Pallet 97",qualityStatus:2},{warehouseDescr:"02001(Toronto PROD)",sku:"0267528444",totalQty:200,qtyAllocated:20,controlInventory:1,qtyOnHold:2,openCredit:1,qtyAvailable:3,qtyOnhold:0,productName:"Pallet 48",supplierName:"xiaobazai",batchNumber:52341,qualityStatus:1}]);return Object(l["onMounted"])((function(){u()})),{searchFormConfig:b,handleQueryClick:o,contentTableConfig:r,pageInfo:p,tableData:g,handleCurrentChange:i,handleSizeChange:c,qualityStatusArray:n,keyWords:t,searchInfo:u}}}),h=(t("304c"),t("6b0d")),f=t.n(h);const v=f()(g,[["render",u],["__scopeId","data-v-08b4b5c1"]]);var m=v,y={class:"batch"};function C(e,a,t,o,n,r){var u=Object(l["resolveComponent"])("page-search"),c=Object(l["resolveComponent"])("page-content");return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",y,[Object(l["createVNode"])(u,{searchFormConfig:e.searchFormConfig,onQueryBtnClick:e.handleQueryClick},null,8,["searchFormConfig","onQueryBtnClick"]),Object(l["createVNode"])(c,{ref:"pageContentRef",contentTableConfig:e.contentTableConfig,pageInfo:e.pageInfo,pageName:"role",tableData:e.tableData},null,8,["contentTableConfig","pageInfo","tableData"])])}var O={labelWidth:"120px",itemStyle:{padding:"10px 40px"},colLayout:{span:8},formItems:[{filter:!0,field:"keywords",type:"input",placeholder:i["a"].global.t("batchPlaceholder")}]},j=(t("09e6"),Object(l["defineComponent"])({name:"batch",components:{PageSearch:c["a"],PageContent:p["a"]},setup:function(){var e=Object(d["b"])(),a=e.t,t=Object(l["ref"])({}),o=function(e){t.value=e,b.value.currentPage=1,i()},n=Object(l["computed"])((function(){return s["n"]})),r={propList:[{prop:"warehouseDescr",label:a("warehouseDescr"),minWidth:"130"},{prop:"sku",label:a("sku"),minWidth:"100"},{prop:"totalQty",label:a("totalQty"),minWidth:"100"},{prop:"qtyAllocated",label:a("qtyAllocated"),minWidth:"100"},{prop:"controlInventory",label:a("controlInventory"),minWidth:"120"},{prop:"qtyOnHold",label:a("qtyOnHold"),minWidth:"100"},{prop:"productionDate",label:a("productionDate"),type:"time",minWidth:"120"},{prop:"expirationDate",label:a("expirationDate"),type:"time",minWidth:"120"},{prop:"warehousingDate",label:a("warehousingDate"),type:"time",minWidth:"130"},{prop:"supplierName",label:a("supplierName"),minWidth:"120"},{prop:"batchNumber",label:a("batchNumber"),minWidth:"100"},{prop:"qualityStatus",label:a("qualityStatus"),type:"select",minWidth:"120",option:n}],showIndexColumn:!1,showSelectColumn:!1,operation:{},childrenProps:{rowKey:"id",treeProp:{children:"children"}},border:!1,showFooter:!0,totalCount:12},u=function(e){b.value.pageSize=e,i()},c=function(e){b.value.currentPage=e,i()},i=function(){var e=Object.assign({},t.value,{pageSize:b.value.pageSize,currentPage:b.value.currentPage});console.log(e,"params查询")},b=Object(l["ref"])({totalCount:100,pageSizes:[10,20,50,100],handleSizeChange:u,handleCurrentChange:c,currentPage:1,pageSize:20}),p=Object(l["ref"])([{warehouseDescr:"02004(Vancouver PROD)",sku:"0232577453",totalQty:100,qtyAllocated:20,controlInventory:1,qtyOnHold:1,openCredit:2,productionDate:"1676263246000",expirationDate:"1679564896908",warehousingDate:"1672739296000",supplierName:"swy",batchNumber:12341,qualityStatus:2},{warehouseDescr:"02001(Toronto PROD)",sku:"0267528444",totalQty:200,qtyAllocated:20,controlInventory:1,qtyOnHold:2,openCredit:1,productionDate:"1678682446000",expirationDate:"1674467296000",warehousingDate:"1641203296000",supplierName:"xiaobazai",batchNumber:52341,qualityStatus:1}]);Object(l["ref"])();return Object(l["onMounted"])((function(){i()})),{searchFormConfig:O,handleQueryClick:o,contentTableConfig:r,pageInfo:b,tableData:p,handleCurrentChange:c,handleSizeChange:u,qualityStatusArray:n,keyWords:t,searchInfo:i}}}));t("8654");const w=f()(j,[["render",C],["__scopeId","data-v-182450f5"]]);var k=w,q=Object(l["defineComponent"])({name:"query",components:{Product:m,Batch:k},setup:function(){var e=Object(l["ref"])("first"),a=function(e,a){console.log(e,a)};return Object(l["onMounted"])((function(){console.log(1233)})),{handleClick:a,activeName:e}}});t("e737");const D=f()(q,[["render",n],["__scopeId","data-v-79ad3e4d"]]);a["default"]=D},7193:function(e,a,t){},8654:function(e,a,t){"use strict";t("d50e")},d50e:function(e,a,t){},e737:function(e,a,t){"use strict";t("5d82")}}]);
//# sourceMappingURL=chunk-f61af948.cefbc69a.js.map
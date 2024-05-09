import{N as d}from"./index-CeSPOaTc.js";import{D as u,u as p}from"./DragUpload-DXlmm2Yc.js";import{e as N,a as P,f as O}from"./primevue-CbY-VKnM.js";import{x as Y,b as t,o as f,f as v,s as o,h as n,L as i,q as k,y as T,F as E}from"./@vue-B4Rme-ED.js";import"./vue-router-B47mcnGi.js";/* empty css                   */import"./@master-hp_0R5gD.js";import"./axios-Cm0UX6qg.js";const g={class:"mt:20 flex:row font:normal font:sans f:25"},D={class:"flex flex:row"},_={class:"flex:col w:50% mr:1%"},L=n("label",{class:"w:25% mr:4",for:"selcode"},"1.選擇系統",-1),h=n("label",{class:"flex mt:15"},"2.載入DB檔案(.BAK 並開始上傳)",-1),x={class:"flex:col w:50%"},C=n("label",{class:"flex mt:15"},"3.T-SQL指令",-1),I=n("br",null,null,-1),H={__name:"db",setup(M){const c=Y("toast"),e=t({response:"",temp:"",isLoading:!1,isDragging:!1}),s=t({name:"* 請選擇系統",APSYSNO:"*",ncik:"請選擇系統"}),m=t([{name:"* 請選擇系統",APSYSNO:"*",ncik:"請選擇系統"},{name:"TM 高階主管",APSYSNO:"TM",ncik:"高階主管"},{name:"AC 會計系統",APSYSNO:"AC",ncik:"會計系統"},{name:"CA 出納系統",APSYSNO:"CA",ncik:"出納系統"},{name:"TX 媒體申報",APSYSNO:"TX",ncik:"媒體申報"},{name:"PU 估驗系統",APSYSNO:"PU",ncik:"估驗系統"},{name:"ES 估算系統",APSYSNO:"ES",ncik:"估算系統"},{name:"PS 人事系統",APSYSNO:"PS",ncik:"人事系統"},{name:"MS 物料倉管",APSYSNO:"MS",ncik:"物料倉管"},{name:"PT 工程進度",APSYSNO:"PT",ncik:"工程進度"},{name:"PL 年度預算",APSYSNO:"PL",ncik:"年度預算"},{name:"DV 土地開發",APSYSNO:"DV",ncik:"土地開發"},{name:"WS 水電估算",APSYSNO:"WS",ncik:"水電估算"},{name:"ST 鋼筋撿料",APSYSNO:"ST",ncik:"鋼筋撿料"},{name:"SA 銷售系統",APSYSNO:"SA",ncik:"銷售系統"},{name:"EC 變更追加減",APSYSNO:"EC",ncik:"變更追加減"},{name:"QC 品質查核",APSYSNO:"QC",ncik:"品質查核"},{name:"PA 銷售前置",APSYSNO:"PA",ncik:"銷售前置"},{name:"ADMISYS 績效考核",APSYSNO:"ADMISYS",ncik:"績效考核"},{name:"MAINTSYS 客戶服務",APSYSNO:"MAINTSYS",ncik:"客戶服務"},{name:"HEALTSYS 健康管理",APSYSNO:"HEALTSYS",ncik:"健康管理"}]),A=()=>{e.value.response=""},r=async S=>{if(s.value.APSYSNO=="*"){c.add({severity:"error",summary:"系統別錯誤",detail:"請先選擇系統",life:1e4});return}let l=new FormData;l.append("file",S[0]),e.value.isLoading=!0,await p("post","/sql/"+s.value.APSYSNO,l).then(a=>{e.value.response+=`USE[master]
`,e.value.response+="ALTER DATABASE ["+s.value.APSYSNO+`] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
`,e.value.response+="RESTORE DATABASE ["+s.value.APSYSNO+"] FROM DISK = N'"+a.data.path+`' WITH FILE = 1, NOUNLOAD, REPLACE, STATS = 5
`,e.value.response+="ALTER DATABASE ["+s.value.APSYSNO+`] SET MULTI_USER
`,e.value.response+=`GO
`,console.log("log:",a),c.add({severity:"success",summary:"DB上傳成功",detail:S[0].name+" 123 "+s.value.APSYSNO,life:15e3})}).catch(a=>{e.value.response=a,console.error("error:",a)}),e.value.isLoading=!1};return(S,l)=>(f(),v(E,null,[o(d,{text:"DB 還原"}),n("div",g,[n("div",D,[n("div",_,[L,o(i(N),{class:"",id:"selcode",modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=a=>s.value=a),options:m.value,optionLabel:"name",placeholder:"選擇系統",checkmark:"",highlightOnSelect:!1},null,8,["modelValue","options"]),h,o(u,{allowedExtension:"bak",isLoading:e.value.isLoading,isDragging:e.value.isDragging,onHandleFileDrop:r,onHandleFileOpen:r},null,8,["isLoading","isDragging"]),o(i(P),{class:"ml:5",onClick:A},{default:k(()=>[T("刪除紀錄")]),_:1})]),n("div",x,[C,o(i(O),{class:"mt:15",modelValue:e.value.response,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value.response=a),rows:"15",cols:"70",readonly:""},null,8,["modelValue"])]),I])])],64))}};export{H as default};

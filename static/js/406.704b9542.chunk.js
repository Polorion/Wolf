"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[406],{4797:function(t,s,o){o.r(s),o.d(s,{default:function(){return nt}});var a=o(5671),e=o(3144),n=o(9340),r=o(2882),i=o(2791),c={logoInfo:"MainContent_logoInfo__ECzt9"},l="infoPerson_info_person__rykK0",u={active:"PersonData_active__cPLPS",noActive:"PersonData_noActive__W6ooq",Job:"PersonData_Job__qd7hN",test:"PersonData_test__gQ1zm"},d=o(3504),h=o(184),_=(i.Component,o(885)),p=function(t){var s=(0,i.useState)(!0),o=(0,_.Z)(s,2),a=o[0],e=o[1],n=(0,i.useState)(t.status),r=(0,_.Z)(n,2),c=r[0],l=r[1];(0,i.useEffect)((function(){l(t.status)}));return(0,h.jsx)("div",{children:a?(0,h.jsx)("span",{onClick:function(){e(!1)},children:t.status?t.status:"-----"}):(0,h.jsx)("input",{autoFocus:!0,onBlur:function(){e(!0),t.UpdateStatusThunk(c)},onChange:function(t){l(t.currentTarget.value)},className:u.test,defaultValue:c,type:"text"})})},x=function(t){return(0,h.jsxs)("div",{className:u.info_person,children:[(0,h.jsx)(p,{status:t.status,UpdateStatusThunk:t.UpdateStatusThunk}),(0,h.jsxs)("div",{children:["\u043e \u0431\u043e \u043c\u043d\u0435: ",t.aboutMe]}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:"\u043c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,h.jsxs)("li",{children:["facebook:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.facebook),children:t.contacts.facebook})]}),(0,h.jsxs)("li",{children:["github:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.github),children:t.contacts.github})]}),(0,h.jsxs)("li",{children:["instagram:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.instagram),children:t.contacts.instagram})]}),(0,h.jsxs)("li",{children:["mainLink:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.mainLink),children:t.contacts.mainLink})]}),(0,h.jsxs)("li",{children:["twitter:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.twitter),children:t.contacts.twitter})]}),(0,h.jsxs)("li",{children:["vk:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.vk),children:t.contacts.vk})]}),(0,h.jsxs)("li",{children:["website:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.website),children:t.contacts.website})]}),(0,h.jsxs)("li",{children:["youtube:",(0,h.jsx)(d.rU,{to:"".concat(t.contacts.youtube),children:t.contacts.youtube})]})]}),(0,h.jsx)("div",{className:u.birthday,children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:17.02.2022"}),(0,h.jsx)("div",{className:u.o,children:"who are you :i'm a wolf"}),(0,h.jsxs)("div",{className:u.Job,children:["\u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b ",(0,h.jsx)("span",{className:t.lookingForAJob?u.active:u.noActive})]}),(0,h.jsxs)("div",{children:["\u0447\u0442\u043e \u044f \u0438\u0449\u0443: ",t.lookingForAJobDescription]})]})},m="PersonName_fio_person__F2AjA",j=function(t){return(0,h.jsx)("div",{className:m,children:t.fullName})},f=function(t){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)(j,{fullName:t.fullName}),(0,h.jsx)(x,{aboutMe:t.aboutMe,contacts:t.contacts,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,status:t.status,UpdateStatusThunk:t.UpdateStatusThunk})]})},b="Avatar_avatar__Ti9cz",g="Avatar_ava_block__Ihq3F",v=o.p+"static/media/avataWolf.e01234594de41353543c.jpg",k=function(t){return console.log(12),(0,h.jsx)("div",{className:g,children:(0,h.jsx)("img",{className:b,src:t.avatar?t.avatar:v,alt:""})})},P="LogoInfo_ava_info__RM2-d",N=function(t){return(0,h.jsxs)("div",{className:P,children:[(0,h.jsx)(k,{avatar:t.photo.large}),(0,h.jsx)(f,{fullName:t.fullName,aboutMe:t.aboutMe,contacts:t.contacts,lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,status:t.status,UpdateStatusThunk:t.UpdateStatusThunk})]})},C={body__info:"MyPosts_body__info__XpnMk",o:"MyPosts_o__1cHoI"},M=o(1413),y="CreatePost_createPost__WlqH+",A="CreatePost_area__kVe-H",w="CreatePost_errors__4N1DH",F="CreatePost_body__yUrjg",J="CreatePost_btn_post__B0YKV",U=o(3896),S=function(t){var s=(0,U.cI)({mode:"onChange"}),o=s.register,a=s.reset,e=s.handleSubmit,n=s.formState,r=n.errors,i=n.isValid;return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("h2",{children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),(0,h.jsxs)("form",{className:F,onSubmit:e((function(s){t.createPost(s.postMessage),a()})),children:[(0,h.jsx)("input",(0,M.Z)({className:A},o("postMessage",{maxLength:{value:100,message:"\u043d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}}))),(0,h.jsx)("div",{className:w,children:r.postMessage&&(0,h.jsx)("p",{children:r.postMessage.message})}),(0,h.jsx)("input",{disabled:!i,value:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442",type:"submit",className:J})]})]})},T="Post_post__V6D0i",D="Post_post_body__YJZNO",Z="Post_post_border__b2Q70",L="Post_post_text__bSKqY",I="Post_name__-KX55",q="Post_who__HC+Tp",V="Post_postAva__nXiL9",Y="PostControl_btn_contol__jjvYn",z="PostControl_postControl__EA-8F",H="PostControl_postControl_btn__wJFyk",K="PostControl_control_center__-M4jr",B="PostControl_count__EKp1O",E="PostControl_likeUp__xnCu2",G="PostControl_likeDown__uUdvb",R=function(t){return(0,h.jsx)("div",{className:z,children:(0,h.jsxs)("div",{className:K,children:[(0,h.jsx)("p",{children:"Likes"}),(0,h.jsxs)("div",{className:H,children:[(0,h.jsx)("button",{className:"".concat(Y," ").concat(E),children:(0,h.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"10px",viewBox:"0 0 1280.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",children:[(0,h.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017"}),(0,h.jsx)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:(0,h.jsx)("path",{d:"M3145 12785 c-49 -17 -90 -62 -104 -112 -8 -26 -11 -697 -11 -2145\r\nl0 -2108 -1275 0 c-1049 0 -1281 -2 -1308 -14 -78 -32 -124 -132 -97 -208 13\r\n-36 5793 -6786 5841 -6821 40 -29 111 -34 161 -11 34 15 291 315 1633 1909\r\n876 1039 2153 2556 2839 3370 687 814 1260 1497 1274 1518 47 71 28 168 -45\r\n224 l-36 28 -1294 3 -1293 2 0 2134 0 2133 -23 34 c-12 19 -42 44 -67 57 l-44\r\n22 -3056 0 c-2607 -1 -3061 -3 -3095 -15z"})})]})}),(0,h.jsx)("div",{className:B,children:t.likes}),(0,h.jsx)("button",{className:"".concat(Y," ").concat(G),children:(0,h.jsxs)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"10px",viewBox:"0 0 1280.000000 1280.000000",preserveAspectRatio:"xMidYMid meet",children:[(0,h.jsx)("metadata",{children:"Created by potrace 1.15, written by Peter Selinger 2001-2017"}),(0,h.jsx)("g",{transform:"translate(0.000000,1280.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:(0,h.jsx)("path",{d:"M3145 12785 c-49 -17 -90 -62 -104 -112 -8 -26 -11 -697 -11 -2145\r\nl0 -2108 -1275 0 c-1049 0 -1281 -2 -1308 -14 -78 -32 -124 -132 -97 -208 13\r\n-36 5793 -6786 5841 -6821 40 -29 111 -34 161 -11 34 15 291 315 1633 1909\r\n876 1039 2153 2556 2839 3370 687 814 1260 1497 1274 1518 47 71 28 168 -45\r\n224 l-36 28 -1294 3 -1293 2 0 2134 0 2133 -23 34 c-12 19 -42 44 -67 57 l-44\r\n22 -3056 0 c-2607 -1 -3061 -3 -3095 -15z"})})]})})]})]})})},O=function(t){return(0,h.jsx)("div",{className:T,children:(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("img",{className:V,src:t.photo.small?t.photo.small:v,alt:""}),(0,h.jsxs)("div",{className:D,children:[(0,h.jsxs)("p",{className:I,children:[(0,h.jsx)("span",{className:q,children:"\u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c"}),": ",t.fullName]}),(0,h.jsx)("p",{className:L,children:t.data.massage}),(0,h.jsx)(R,{likes:t.data.likes})]})]})})},W=function(t){var s=t.arrayPost.map((function(s){return(0,h.jsx)(O,{data:s,photo:t.photo,fullName:t.fullName},s.id)}));return(0,h.jsxs)("div",{className:C.body_allPost,children:[(0,h.jsx)(S,{createPost:t.createPost}),s]})},X=function(t){return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:c.body__info,children:[(0,h.jsx)("div",{className:c.logoInfo,children:(0,h.jsx)(N,{photo:t.data.photos,fullName:t.data.fullName,aboutMe:t.data.aboutMe,contacts:t.data.contacts,lookingForAJob:t.data.lookingForAJob,lookingForAJobDescription:t.data.lookingForAJobDescription,status:t.data.status,UpdateStatusThunk:t.data.UpdateStatusThunk})}),(0,h.jsx)(W,{arrayPost:t.data.arrayPost,createPost:t.data.ActionCreatePostMainPage,photo:t.data.photos,fullName:t.data.fullName})]})})},Q=o(8687),$=o(7435),tt=o(76),st=o(7781),ot=o(6871),at=function(t){return function(s){return(0,h.jsx)(t,(0,M.Z)((0,M.Z)({},s),{},{param:(0,ot.UO)()}))}},et=function(t){(0,n.Z)(o,t);var s=(0,r.Z)(o);function o(){return(0,a.Z)(this,o),s.apply(this,arguments)}return(0,e.Z)(o,[{key:"componentDidMount",value:function(){var t=this.props.param["*"];t||(t=this.props.idProfile),this.props.GetProfileThunk(t),this.props.GetStatusThunk(t)}},{key:"render",value:function(){return(0,h.jsx)(X,{data:this.props})}}]),o}(i.Component),nt=(0,st.qC)(at,tt.Z,(0,Q.$j)((function(t){return{arrayPost:t.MainContentPage.arrayPost,textCurrentValue:t.MainContentPage.areaText,photos:t.MainContentPage.photos,fullName:t.MainContentPage.fullName,aboutMe:t.MainContentPage.aboutMe,contacts:t.MainContentPage.contacts,lookingForAJob:t.MainContentPage.lookingForAJob,lookingForAJobDescription:t.MainContentPage.lookingForAJobDescription,status:t.MainContentPage.status,idProfile:t.Auth.id}}),{ActionCreatePostMainPage:$.Rm,GetProfileThunk:$.dk,GetStatusThunk:$.ZU,UpdateStatusThunk:$.bC}))(et)}}]);
//# sourceMappingURL=406.704b9542.chunk.js.map
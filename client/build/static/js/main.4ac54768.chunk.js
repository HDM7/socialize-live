(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(20),a=n.n(s),o=(n(28),n(2)),l=n(3),r=n(4),d=n(7),j=n.n(d),u=n(0),h=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)([]),d=Object(o.a)(a,2),h=d[0],p=d[1],b=Object(c.useContext)(S),f=b.state,O=b.dispatch,m=Object(l.f)();Object(c.useEffect)((function(){j.a.Modal.init(e.current)}),[]);return Object(u.jsxs)("nav",{children:[Object(u.jsxs)("div",{className:"nav-wrapper white",children:[Object(u.jsx)(r.b,{to:f?"/":"/signin",className:"brand-logo left",children:" Socialize "})," ",Object(u.jsxs)("ul",{id:"nav-mobile",className:"right",children:[" ",f?[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("i",{"data-target":"modal1",className:"large material-icons modal-trigger",style:{color:"black"},children:" search "})]},"1"),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(r.b,{to:"/profile",children:" Profile "})]},"2"),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(r.b,{to:"/create",children:" Create Post "})]},"3"),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(r.b,{to:"/myfollowingpost",children:" Following "})]},"4"),Object(u.jsxs)("li",{children:[Object(u.jsx)("button",{className:"btn #c62828 red darken-3",onClick:function(){localStorage.clear(),O({type:"CLEAR"}),m.push("/signin")},children:"Logout "})," "]},"5")]:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(r.b,{to:"/signin",children:" Login "})]},"6"),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(r.b,{to:"/signup",children:" Sign Up "})]},"7")]]})," "]})," ",Object(u.jsxs)("div",{id:"modal1",class:"modal",ref:e,style:{color:"black"},children:[Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsx)("input",{type:"text",placeholder:"search users",value:i,onChange:function(e){return t=e.target.value,s(t),void fetch("/search-users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){p(e.user)}));var t}})," ",Object(u.jsxs)("ul",{className:"collection",children:[" ",h.map((function(t){return Object(u.jsxs)(r.b,{to:t._id!==f._id?"/profile/"+t._id:"/profile",onClick:function(){j.a.Modal.getInstance(e.current).close(),s("")},children:[" ",Object(u.jsxs)("li",{className:"collection-item",children:[" ",t.email," "]})]})}))]})," "]})," ",Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{className:"modal-close waves-effect waves-green btn-flat",onClick:function(){return s("")},children:" close "})," "]})," "]})," "]})},p=(n(34),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(S),a=s.state;s.dispatch;Object(c.useEffect)((function(){fetch("/allpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.posts)}))}),[]);return Object(u.jsx)("div",{className:"home",children:n.map((function(e){return Object(u.jsxs)("div",{className:"card home-card",children:[Object(u.jsxs)("h5",{style:{padding:"5px"},children:[Object(u.jsx)(r.b,{to:e.postedBy._id!==a._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==a._id&&Object(u.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));i(t)}));var t},children:"delete"})]}),Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:e.photo})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(a._id)?Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(u.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(u.jsxs)("h6",{children:[Object(u.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(u.jsx)("form",{onSubmit:function(t){var c,s;t.preventDefault(),c=t.target[0].value,s=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:s,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:Object(u.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})}),b=function(){var e=Object(c.useContext)(S),t=(e.state,e.dispatch),n=Object(l.f)(),i=Object(c.useState)(""),s=Object(o.a)(i,2),a=s[0],d=s[1],h=Object(c.useState)(""),p=Object(o.a)(h,2),b=p[0],f=p[1];return Object(u.jsxs)("div",{className:"mycard",children:[Object(u.jsxs)("div",{className:"card auth-card input-field",children:[Object(u.jsx)("h2",{children:" Socialize "})," "," ",Object(u.jsx)("input",{type:"text",placeholder:"Email",value:b,onChange:function(e){return f(e.target.value)}})," "," ",Object(u.jsx)("input",{type:"password",placeholder:"Password",value:a,onChange:function(e){return d(e.target.value)}})," "," ",Object(u.jsxs)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(b)?fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:b})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.error?j.a.toast({html:e.error,classes:"#c62828 red darken-3"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),j.a.toast({html:"Login Success!",classes:"#43a047 green darken-1"}),n.push("/"))})).catch((function(e){console.log(e)})):j.a.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})},children:["Login "," "," "]})," "," ",Object(u.jsxs)("h5",{children:[Object(u.jsx)(r.b,{to:"/signup",children:" Need an account ? "})," "," "]})," "," "," "]})," "," "]})},f=n(6),O=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(S),a=s.state,l=s.dispatch,r=Object(c.useState)(""),d=Object(o.a)(r,2),j=d[0],h=d[1];Object(c.useEffect)((function(){fetch("/mypost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.mypost)}))}),[]),Object(c.useEffect)((function(){if(j){var e=new FormData;e.append("file",j),e.append("upload_preset","insta-clone"),e.append("cloud_name","cnq"),fetch("https://api.cloudinary.com/v1_1/hdm007/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(f.a)(Object(f.a)({},a),{},{pic:e.pic}))),l({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[j]);return Object(u.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(u.jsxs)("div",{style:{margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:a?a.pic:"loading"})})," ",Object(u.jsxs)("div",{children:[Object(u.jsxs)("h4",{children:[" ",a?a.name:"loading"," "]})," ",Object(u.jsxs)("h5",{children:[" ",a?a.email:"loading"," "]})," ",Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(u.jsxs)("h6",{children:[" ",n.length,"posts "]})," ",Object(u.jsxs)("h6",{children:[" ",a?a.followers.length:"0","followers "]})," ",Object(u.jsxs)("h6",{children:[" ",a?a.following.length:"0","following "]})," "]})]})," "]}),Object(u.jsxs)("div",{className:"file-field input-field",style:{margin:"10px"},children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:" Update Pic "})," ",Object(u.jsx)("input",{type:"file",onChange:function(e){return t=e.target.files[0],void h(t);var t}})," "]})," ",Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})," "]})," "]}),"       ",Object(u.jsxs)("div",{className:"gallery",children:[" ",n.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))]})," "]})},m=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(""),d=Object(o.a)(a,2),h=d[0],p=d[1],b=Object(c.useState)(""),f=Object(o.a)(b,2),O=f[0],m=f[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),y=g[0],v=g[1],w=Object(c.useState)(void 0),S=Object(o.a)(w,2),N=S[0],_=S[1];Object(c.useEffect)((function(){N&&C()}),[N]);var C=function(){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(O)?fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,password:h,email:O,pic:N})}).then((function(e){return e.json()})).then((function(t){t.error?j.a.toast({html:"Oops! something went wrong",classes:"#c62828 red darken-3"}):(j.a.toast({html:"SignUp Success!",classes:"#43a047 green darken-1"}),e.push("/signin"))})).catch((function(e){console.log(e)})):j.a.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})},k=function(){y?function(){var e=new FormData;e.append("file",y),e.append("upload_preset","socialize"),e.append("cloud_name","hdm007"),fetch("https://api.cloudinary.com/v1_1/hdm007/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){_(e.url)})).catch((function(e){console.log(e)}))}():C()};return Object(u.jsxs)("div",{className:"mycard",children:[Object(u.jsxs)("div",{className:"card auth-card input-field",children:[Object(u.jsx)("h2",{children:" Socialize "})," ",Object(u.jsx)("input",{type:"text",placeholder:"Username",value:i,onChange:function(e){return s(e.target.value)}})," ",Object(u.jsx)("input",{type:"text",placeholder:"Email",value:O,onChange:function(e){return m(e.target.value)}})," ",Object(u.jsx)("input",{type:"password",placeholder:"Password",value:h,onChange:function(e){return p(e.target.value)}})," ",Object(u.jsxs)("div",{className:"file-field input-field",children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:" Pic "})," ",Object(u.jsx)("input",{type:"file",onChange:function(e){return v(e.target.files[0])}})," "]})," ",Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})," "]})," ",Object(u.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return k()},children:"Sign Up "})," ",Object(u.jsxs)("h5",{children:[Object(u.jsx)(r.b,{to:"/signin",children:"Have an account ? "})," "]})]})," "]})},x=function(){var e=Object(l.f)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),d=r[0],h=r[1],p=Object(c.useState)(""),b=Object(o.a)(p,2),f=b[0],O=b[1],m=Object(c.useState)(""),x=Object(o.a)(m,2),g=x[0],y=x[1];Object(c.useEffect)((function(){g&&fetch("/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({title:i,body:d,pic:g})}).then((function(e){return e.json()})).then((function(t){t.error?j.a.toast({html:t.error,classes:"#c62828 red darken-3"}):(j.a.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"}),e.push("/"))})).catch((function(e){console.log(e)}))}),[g]);return Object(u.jsxs)("div",{className:"card input-filed",style:{margin:"30px auto",maxWidth:"500px",padding:"20px",textAlign:"center"},children:[Object(u.jsx)("input",{type:"text",placeholder:"title",value:i,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("input",{type:"text",placeholder:"body",value:d,onChange:function(e){return h(e.target.value)}}),Object(u.jsxs)("div",{className:"file-field input-field",children:[Object(u.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(u.jsx)("span",{children:"Uplaod Image"}),Object(u.jsx)("input",{type:"file",onChange:function(e){return O(e.target.files[0])}})]}),Object(u.jsx)("div",{className:"file-path-wrapper",children:Object(u.jsx)("input",{className:"file-path validate",type:"text"})})]}),Object(u.jsx)("button",{className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){return function(){var e=new FormData;e.append("file",f),e.append("upload_preset","socialize"),e.append("cloud_name","hdm007"),fetch(" https://api.cloudinary.com/v1_1/hdm007/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){y(e.url)})).catch((function(e){console.log(e)}))}()},children:"Submit post"})]})},g=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(f.a)(Object(f.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(f.a)(Object(f.a)({},e),{},{pic:t.payload}):e},y=n(23),v=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(S),a=s.state,r=s.dispatch,d=Object(l.g)().userid,j=Object(c.useState)(!a||!a.following.includes(d)),h=Object(o.a)(j,2),p=h[0],b=h[1];Object(c.useEffect)((function(){fetch("/user/".concat(d),{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);return Object(u.jsx)(u.Fragment,{children:n?Object(u.jsxs)("div",{style:{maxWidth:"550px",margin:"0px auto"},children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid grey"},children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:n.user.pic})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:n.user.name}),Object(u.jsx)("h5",{children:n.user.email}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"108%"},children:[Object(u.jsxs)("h6",{children:[n.posts.length," posts"]}),Object(u.jsxs)("h6",{children:[n.user.followers.length," followers"]}),Object(u.jsxs)("h6",{children:[n.user.following.length," following"]})]}),p?Object(u.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({followId:d})}).then((function(e){return e.json()})).then((function(e){r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),i((function(t){return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:[].concat(Object(y.a)(t.user.followers),[e._id])})})})),b(!1)}))},children:"Follow"}):Object(u.jsx)("button",{style:{margin:"10px"},className:"btn waves-effect waves-light #64b5f6 blue darken-1",onClick:function(){fetch("/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:d})}).then((function(e){return e.json()})).then((function(e){r({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),i((function(t){var n=t.user.followers.filter((function(t){return t!=e._id}));return Object(f.a)(Object(f.a)({},t),{},{user:Object(f.a)(Object(f.a)({},t.user),{},{followers:n})})})),b(!0)}))},children:"UnFollow"})]})]}),Object(u.jsx)("div",{className:"gallery",children:n.posts.map((function(e){return Object(u.jsx)("img",{className:"item",src:e.photo,alt:e.title},e._id)}))})]}):Object(u.jsx)("center",{children:Object(u.jsx)("h2",{children:"loading...!"})})})},w=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(c.useContext)(S),a=s.state;s.dispatch;Object(c.useEffect)((function(){fetch("/getsubpost",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),i(e.posts)}))}),[]);return Object(u.jsx)("div",{className:"home",children:n.map((function(e){return Object(u.jsxs)("div",{className:"card home-card",children:[Object(u.jsxs)("h5",{style:{padding:"5px"},children:[Object(u.jsx)(r.b,{to:e.postedBy._id!==a._id?"/profile/"+e.postedBy._id:"/profile",children:e.postedBy.name})," ",e.postedBy._id==a._id&&Object(u.jsx)("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.filter((function(t){return t._id!==e._id}));i(t)}));var t},children:"delete"})]}),Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)("img",{src:e.photo})}),Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("i",{className:"material-icons",style:{color:"red"},children:"favorite"}),e.likes.includes(a._id)?Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:"thumb_down"}):Object(u.jsx)("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:t})}).then((function(e){return e.json()})).then((function(e){var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:"thumb_up"}),Object(u.jsxs)("h6",{children:[e.likes.length," likes"]}),Object(u.jsx)("h6",{children:e.title}),Object(u.jsx)("p",{children:e.body}),e.comments.map((function(e){return Object(u.jsxs)("h6",{children:[Object(u.jsx)("span",{style:{fontWeight:"500"},children:e.postedBy.name})," ",e.text]},e._id)})),Object(u.jsx)("form",{onSubmit:function(t){var c,s;t.preventDefault(),c=t.target[0].value,s=e._id,fetch("/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify({postId:s,text:c})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=n.map((function(t){return t._id==e._id?e:t}));i(t)})).catch((function(e){console.log(e)}))},children:Object(u.jsx)("input",{type:"text",placeholder:"add a comment"})})]})]},e._id)}))})},S=Object(c.createContext)(),N=function(){var e=Object(l.f)(),t=Object(c.useContext)(S),n=(t.state,t.dispatch);return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?n({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/signin")}),[]),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(l.a,{path:"/signin",children:Object(u.jsx)(b,{})}),Object(u.jsx)(l.a,{path:"/signup",children:Object(u.jsx)(m,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/profile",children:Object(u.jsx)(O,{})}),Object(u.jsx)(l.a,{path:"/create",children:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"/profile/:userid",children:Object(u.jsx)(v,{})}),Object(u.jsx)(l.a,{path:"/myfollowingpost",children:Object(u.jsx)(w,{})})]})};var _=function(){var e=Object(c.useReducer)(g,null),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)(S.Provider,{value:{state:n,dispatch:i},children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(N,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.4ac54768.chunk.js.map
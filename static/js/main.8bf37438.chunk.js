(this.webpackJsonptasker=this.webpackJsonptasker||[]).push([[0],{10:function(e,t,a){e.exports={Date:"src-Componentes-Tasker-configTasker-configTasker__Date--3pYdF",Configuracion:"src-Componentes-Tasker-configTasker-configTasker__Configuracion--31VVE",newDate:"src-Componentes-Tasker-configTasker-configTasker__newDate--17ZXx"}},11:function(e,t,a){e.exports={tasks:"src-Componentes-Tasker-Tasker__tasks--3y2HB",Spinner:"src-Componentes-Tasker-Tasker__Spinner--3uOql"}},13:function(e,t,a){e.exports={Ventana:"src-UI-Ventana-Ventana__Ventana--1feed",out:"src-UI-Ventana-Ventana__out--3DIZY",Modal:"src-UI-Ventana-Ventana__Modal--3zNs-"}},28:function(e,t,a){e.exports={Contenedor:"src-HOC-LayOut-LayOut__Contenedor--YfTtW"}},29:function(e,t,a){e.exports={Menu:"src-Componentes-Menu-Menu__Menu--3zroI"}},30:function(e,t,a){e.exports={Nav:"src-Componentes-Menu-Nav-Nav__Nav--1gmTd"}},31:function(e,t,a){e.exports={Updated:"src-UI-Buttoms-Button__Updated--33O1Y",Delete:"src-UI-Buttoms-Button__Delete--1ZuQB",Submit:"src-UI-Buttoms-Button__Submit--1-1jj"}},32:function(e,t,a){e.exports={BackDrop:"src-UI-BackDrop-BackDrop__BackDrop--3dhZ6"}},33:function(e,t,a){e.exports={Spinner:"src-UI-Spinner-Spinner__Spinner--3zx8N",load8:"src-UI-Spinner-Spinner__load8--_1-V4"}},34:function(e,t,a){e.exports={Formulario:"src-Componentes-Tasker-Task-CreateTask-CreateTask__Formulario--33Og2"}},40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),o=a.n(s),c=(a(45),a(3)),l=a(4),i=a(6),u=a(5),p=a(39),d=a(28),m=a.n(d),k=a(29),h=a.n(k),f=a(30),g=a.n(f),v=function(){return r.a.createElement("div",{className:g.a.Nav},r.a.createElement("p",null,"Tasks |"),r.a.createElement("p",null,"| About"))},T=function(){return r.a.createElement("div",{className:h.a.Menu},r.a.createElement("p",null,"Logo"),r.a.createElement(v,null))},E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Contenedor},r.a.createElement(T,null),this.props.children)}}]),a}(n.Component),I=a(9),C=a(11),_=a.n(C),b=a(7),j=a.n(b),D=a(31),N=a.n(D),O=function(e){return[].push(e.estilo),r.a.createElement("button",{onClick:e.clicked,className:[N.a[e.estilo]].join(" ")},e.children)},S=function(e){var t=[j.a.tarea];e.marked&&t.push(j.a.Marked);var a=[j.a.Task];switch(e.prioridad){case"urgente":a.push(j.a.Urgente);break;case"muyimportante":a.push(j.a.MuyImportante);break;case"importante":a.push(j.a.Importante);break;case"normal":a.push(j.a.Normal);break;default:a.push([])}return r.a.createElement("div",{className:a.join(" ")},r.a.createElement("div",{className:j.a.TaskItem},r.a.createElement("input",{type:"checkbox",onChange:e.Checked,checked:e.mark}),r.a.createElement("p",{className:t.join(" "),onClick:e.update},e.title)),r.a.createElement("div",{className:j.a.Botones},r.a.createElement(O,{estilo:"Delete",clicked:e.delete},r.a.createElement("div",{className:j.a.del},"+"))))},y=function(e){return e.tasks.map((function(t){return r.a.createElement(S,{key:t.id,title:t.task,mark:t.mark,prioridad:t.prioridad,Checked:function(){return e.mark(t.id)},delete:function(){return e.delete(t.id)},update:function(){return e.update(t.id)},marked:t.mark})}))},U=a(13),M=a.n(U),w=a(32),x=a.n(w),V=function(e){return e.mostrar?r.a.createElement("div",{className:x.a.BackDrop},e.children):null},H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{mostrar:this.props.mostrar,clicked:this.reallyClose},r.a.createElement("div",{className:M.a.Ventana,style:{transform:this.props.mostrar?"translate(0)":"translateY(-100vh)",opacity:this.props.mostrar?"1":"0"}},r.a.createElement("div",{className:M.a.out,onClick:this.props.cerrarVentana},"+"),this.props.children)))}}]),a}(n.Component),B=a(33),A=a.n(B),F=function(){return r.a.createElement("div",{className:A.a.Spinner},"Loading....")},L=a(38),R=a(10),Y=a.n(R),q=a(34),z=a.n(q),Z=a(35),J=a.n(Z).a.create({baseURL:"https://tasker-mcuve.firebaseio.com/"}),P=a(8),G=a.n(P),K=function(e){var t=null;switch(e.tag){case"input":t=r.a.createElement("input",Object.assign({className:[G.a.Input,G.a.Hora].join(" ")},e.config,{value:e.value,onChange:e.change}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:[G.a.Input,G.a.Area].join(" ")},e.config,{value:e.value,onChange:e.change}));break;case"select":t=r.a.createElement("select",{className:[G.a.Input,G.a.Seleccion].join(" "),value:e.value,onChange:e.change},e.config.options.map((function(e){return"default"===e.value?r.a.createElement("option",{value:"",key:e.tag,disabled:!0,selected:!0,hidden:!0},e.tag):r.a.createElement("option",{key:e.tag,value:e.value},e.tag)})));break;default:t=r.a.createElement("input",Object.assign({className:G.a.Input},e.config,{value:e.value,onChange:e.change}))}return t},Q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).createTask=function(){var e={};for(var t in n.state.form){var a=Object(I.a)({},n.state.form[t]);e[t]=a.value}e.mark=!1,n.setState({loar:!0}),J.post("/tasks/"+n.props.date+".json",e).then((function(e){n.setState({loar:!1}),n.props.cerrarVentana()})).catch((function(e){console.log(e)}))},n.changeInput=function(e,t){var a=Object(I.a)({},n.state.form);a[t].value=e.target.value,n.setState({form:a})},n.updateHandler=function(e){e.preventDefault(),n.props.updateTask(n.state.form)},n.state={form:{task:{tag:"textarea",config:{required:!0,minLength:10,maxLength:150,type:"text",placeholder:"Escribe tu tarea aqui ....."},value:n.props.update?n.props.task[0].task:"",valid:!1},seccion:{tag:"select",config:{required:!0,options:[{value:"default",tag:"\xc1rea"},{value:"escuela",tag:"Escuela"},{value:"trabajo",tag:"Trabajo"},{value:"personal",tag:"Personal"},{value:"social",tag:"Social"}]},value:n.props.update?n.props.task[0].seccion:"",valid:!0},prioridad:{tag:"select",config:{required:!0,options:[{value:"default",tag:"Nivel de Importancia",disabled:!0,selected:!0,hidden:!0},{value:"urgente",tag:"Urgente"},{value:"muyimportante",tag:"Muy Importante"},{value:"importante",tag:"Importante"},{value:"normal",tag:"Normal"}]},value:n.props.update?n.props.task[0].prioridad:"",valid:!0},hora:{tag:"input",config:{required:!0,type:"time"},value:n.props.update?n.props.task[0].hora:"",valid:!1}},loar:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[],a=this.props.update?r.a.createElement(O,{estilo:"Submit",clicked:function(){return e.props.updateTask(e.state.form)}},"Actualizar"):r.a.createElement(O,{estilo:"Submit",clicked:this.createTask},"Agregar");for(var n in this.state.form)t.push({id:n,values:this.state.form[n]});var s=r.a.createElement("h1",null,"LOADING ....");return this.state.loar||(s=r.a.createElement("form",{className:z.a.Formulario,onSubmit:this.props.update?this.updateHandler:this.createTask},this.props.update?r.a.createElement("h2",null,"Modifica tu tarea"):r.a.createElement("h2",null,"Crea tu tarea"),t.map((function(t){return r.a.createElement(K,{key:t.id,config:t.values.config,change:function(a){return e.changeInput(a,t.id)},value:t.values.value,tag:t.values.tag})})),a)),s}}]),a}(n.Component),W=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={date:new Date,show:!1,showCreate:!1,formatDate:""},e.onChange=function(t){var a=(t.getDate()<10?"0"+t.getDate():t.getDate())+""+(t.getMonth()<10?"0"+t.getMonth():t.getMonth())+t.getFullYear();e.setState({date:t,formatDate:a}),e.props.updateDate(t)},e.openCalendar=function(){return e.setState({show:!0})},e.ocultarCalendario=function(){e.setState({show:!1})},e.ocultarCreate=function(t){t&&e.props.reUpdate(),e.setState({showCreate:!1})},e.openCreate=function(){e.setState({showCreate:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.onChange(this.state.date)}},{key:"render",value:function(){var e=this,t=this.state.date.toLocaleDateString();return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{mostrar:this.state.show,cerrarVentana:this.ocultarCalendario},r.a.createElement(L.a,{onChange:this.onChange,value:this.state.date})),r.a.createElement(H,{mostrar:this.state.showCreate,cerrarVentana:this.ocultarCreate},r.a.createElement(Q,{cerrarVentana:function(){return e.ocultarCreate(!0)},update:!1,date:this.state.formatDate})),r.a.createElement("div",{className:Y.a.Configuracion},r.a.createElement("div",{className:Y.a.newDate},"<"),r.a.createElement("p",{onClick:this.openCalendar,className:Y.a.Date},t),r.a.createElement("div",{className:Y.a.newDate},">")),r.a.createElement("button",{onClick:this.openCreate},"Agregar"))}}]),a}(n.Component),X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={tasks:[],wantUpdate:!1,taskToUpdate:null,date:new Date,reRender:!1,realDate:"",loading:!1,noTasks:!1},e.reRender=function(t){var a="";a=t?(t.getDate()<10?"0"+t.getDate():t.getDate())+""+(t.getMonth()<10?"0"+t.getMonth():t.getMonth())+t.getFullYear():(e.state.date.getDate()<10?"0"+e.state.date.getDate():e.state.date.getDate())+""+(e.state.date.getMonth()<10?"0"+e.state.date.getMonth():e.state.date.getMonth())+e.state.date.getFullYear(),e.setState({loading:!0}),J.get("/tasks/"+a+".json").then((function(t){e.setState({realDate:a,loading:!1});var n=[];for(var r in t.data)n.push(Object(I.a)({id:r},t.data[r]));0===n.length?e.setState({tasks:n,noTasks:!0}):e.setState({tasks:n,noTasks:!1})})).catch((function(e){console.log(e)}))},e.markHandler=function(t){var a=!Object(I.a)({},e.state.tasks.filter((function(e){return e.id===t})))[0].mark;J.put("/tasks/"+e.state.realDate+"/"+t+"/mark.json",a).then((function(t){e.reRender()})).catch((function(e){return console.log(e)}))},e.deleteHandler=function(t){J.delete("/tasks/"+e.state.realDate+"/"+t+".json").then((function(t){e.reRender()})).catch((function(e){console.log(e)}))},e.updateHandler=function(t){e.setState({wantUpdate:!0,taskToUpdate:e.state.tasks.filter((function(e){return e.id===t}))})},e.updateTaskHandler=function(t){var a=e.state.taskToUpdate[0].id,n={id:e.state.taskToUpdate[0].id,task:t.task.value,hora:t.hora.value,seccion:t.seccion.value,prioridad:t.prioridad.value};console.log(e.state.date),J.put("/tasks/"+e.state.realDate+"/"+a+".json",n).then((function(t){e.setState({wantUpdate:!1,taskToUpdate:null}),e.reRender()}))},e.cerrarVentana=function(){e.setState({wantUpdate:!1,taskToUpdate:null})},e.cambiarFecha=function(t){e.setState({date:t}),e.reRender(t)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.reRender()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=null;this.state.wantUpdate&&(t=r.a.createElement(Q,{cerrarVentana:function(){return e.ocultarCreate(!0)},update:!0,updateTask:this.updateTaskHandler,task:this.state.taskToUpdate,delete:this.deleteHandler}));var a=r.a.createElement("div",{className:_.a.Spinner},r.a.createElement(F,null));return this.state.loading||(a=this.state.noTasks?r.a.createElement("div",{className:_.a.Spinner}," ",r.a.createElement("p",null,"Add Some Tasks ....")," "):r.a.createElement(y,{tasks:this.state.tasks,mark:this.markHandler,delete:this.deleteHandler,update:this.updateHandler})),r.a.createElement("div",{className:_.a.tasks},r.a.createElement(H,{mostrar:this.state.wantUpdate,cerrarVentana:this.cerrarVentana},t),r.a.createElement(W,{updateDate:this.cambiarFecha,reUpdate:this.reRender}),a)}}]),a}(n.Component),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(E,null,r.a.createElement(X,null))))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={Task:"src-Componentes-Tasker-Task-TaskItem-TaskItem__Task--win83",Urgente:"src-Componentes-Tasker-Task-TaskItem-TaskItem__Urgente--1vnNb",MuyImportante:"src-Componentes-Tasker-Task-TaskItem-TaskItem__MuyImportante--3hufr",Importante:"src-Componentes-Tasker-Task-TaskItem-TaskItem__Importante--21s58",Normal:"src-Componentes-Tasker-Task-TaskItem-TaskItem__Normal--1EEJE",TaskItem:"src-Componentes-Tasker-Task-TaskItem-TaskItem__TaskItem--37653",tarea:"src-Componentes-Tasker-Task-TaskItem-TaskItem__tarea--3071l",Marked:"src-Componentes-Tasker-Task-TaskItem-TaskItem__Marked--18xIK",del:"src-Componentes-Tasker-Task-TaskItem-TaskItem__del--3vTDd"}},8:function(e,t,a){e.exports={Input:"src-UI-Input-Input__Input--1sMwZ",Hora:"src-UI-Input-Input__Hora--1IhaH",Seleccion:"src-UI-Input-Input__Seleccion--26-Pz",Area:"src-UI-Input-Input__Area--2OV5v"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8bf37438.chunk.js.map
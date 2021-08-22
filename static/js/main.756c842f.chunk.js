(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={label:"Filter_label__1zLCk",text:"Filter_text__1QXM2"}},2:function(t,e,n){t.exports={contactEditor:"ContactForm_contactEditor__236ZC",textarea:"ContactForm_textarea__3v-1K",label:"ContactForm_label__a_l0Y",button:"ContactForm_button__30Qeu"}},22:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__3lJhu",item:"ContactList_item__3_h9y",completed:"ContactList_completed__3BLgu",pug:"ContactList_pug__28X1W",text:"ContactList_text__2u3BH",checkbox:"ContactList_checkbox__QeJY8"}},32:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(14),r=n.n(o),s=(n(22),n(12)),i=n(17),l=n(7),u=n(8),m=n(10),d=n(9),b=n(15),h=n.n(b),p=n(4),j=n(2),C=n.n(j),x=n(0),_=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{className:C.a.contactEditor,onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:C.a.label,children:["Name",Object(x.jsx)("input",{value:this.state.name,onChange:this.handleChange,className:C.a.textarea,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(x.jsxs)("label",{className:C.a.label,children:["Number",Object(x.jsx)("input",{value:this.state.number,onChange:this.handleChange,className:C.a.textarea,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}}]),n}(a.Component),f=n(16),g=n.n(f),O=n(3),v=n.n(O),N=function(t){var e=t.contacts,n=t.onDeleteContact,a=t.onToggleCompleted;return Object(x.jsx)("ul",{className:v.a.list,children:e.map((function(t){var e=t.id,c=t.name,o=t.number,r=t.completed;return Object(x.jsxs)("li",{className:g()(v.a.item,Object(p.a)({},v.a.completed,r)),children:[Object(x.jsx)("input",{type:"checkbox",className:v.a.checkbox,checked:r,onChange:function(){return a(e)}}),Object(x.jsxs)("p",{className:v.a.text,children:[c,": ",o]}),Object(x.jsx)("button",{type:"button",className:v.a.pug,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(13),k=n.n(y),A=function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(x.jsx)("input",{type:"text",className:k.a.text,value:e,onChange:n})]})},S=n(5),L=n.n(S),F=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56",completed:!1},{id:"id-2",name:"Hermione Kline",number:"443-89-12",completed:!1},{id:"id-3",name:"Eden Clements",number:"645-17-79",completed:!1},{id:"id-4",name:"Annie Copeland",number:"227-91-26",completed:!1}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:h.a.generate(),name:n,number:a,completed:!1};t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.toggleCompleted=function(e){t.setState((function(t){return{contacts:t.contacts.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}))}}))},t.hangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.getCompletedContactCount=function(){return t.state.contacts.reduce((function(t,e){return e.completed?t+1:t}),0)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.length,c=this.getCompletedContactCount(),o=this.getVisibleContacts();return Object(x.jsxs)("div",{className:L.a.container,children:[Object(x.jsx)("h1",{className:L.a.mainTitle,children:"Phonebook"}),Object(x.jsxs)("p",{className:L.a.text,children:["All contacts: ",a]}),Object(x.jsxs)("p",{className:L.a.text,children:["Number of selected: ",c," "]}),Object(x.jsx)(_,{onSubmit:this.addContact}),Object(x.jsx)("h2",{className:L.a.mainTitle,children:"Contacts"}),Object(x.jsx)(A,{value:n,onChange:this.hangeFilter}),Object(x.jsx)(N,{contacts:o,onDeleteContact:this.deleteContact,onToggleCompleted:this.toggleCompleted})]})}}]),n}(a.Component);r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={container:"App_container__2XKv5",mainTitle:"App_mainTitle__2o8a7",text:"App_text__2nkvA"}}},[[32,1,2]]]);
//# sourceMappingURL=main.756c842f.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{2:function(t,e,o){t.exports={todoList:"TodoList_todoList__1ghZc",item:"TodoList_item__lKdft",completed:"TodoList_completed__1P2AL",pug:"TodoList_pug__3t9Js",text:"TodoList_text__1QiMY",checkbox:"TodoList_checkbox__1jH6o"}},20:function(t,e,o){},30:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),c=o(12),s=o.n(c),r=(o(20),o(11)),i=o(15),d=o(5),u=o(6),l=o(8),h=o(7),b=o(13),j=o.n(b),p=o(9),m=o.n(p),f=o(0),x=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={message:""},t.handleChange=function(e){t.setState({message:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.message),t.setState({message:""})},t}return Object(u.a)(o,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:m.a.todoEditor,onSubmit:this.handleSubmit,children:[Object(f.jsx)("textarea",{value:this.state.message,onChange:this.handleChange,className:m.a.textarea}),Object(f.jsx)("button",{type:"submit",className:m.a.button,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),o}(n.Component),g=o(4),O=o(14),_=o.n(O),v=o(2),T=o.n(v),C=function(t){var e=t.todos,o=t.onDeleteTodo,n=t.onTogleCompleted;return Object(f.jsx)("ul",{className:T.a.todoList,children:e.map((function(t){var e=t.id,a=t.text,c=t.completed;return Object(f.jsxs)("li",{className:_()(T.a.item,Object(g.a)({},T.a.completed,c)),children:[Object(f.jsx)("input",{type:"checkbox",className:T.a.checkbox,checked:c,onChange:function(){return n(e)}}),Object(f.jsx)("p",{className:T.a.text,children:a}),Object(f.jsx)("button",{type:"button",className:T.a.pug,onClick:function(){return o(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},L=function(t){var e=t.value,o=t.onChange;return Object(f.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(f.jsx)("input",{type:"text",value:e,onChange:o})]})},k=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:"id-1",text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React",completed:!1},{id:"id-2",text:"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router",completed:!1},{id:"id-3",text:"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux",completed:!1},{id:"id-4",text:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c React Hooks",completed:!1}],filter:""},t.addTodo=function(e){var o={id:j.a.generate(),text:e,completed:!1};t.setState((function(t){var e=t.todos;return{todos:[o].concat(Object(i.a)(e))}}))},t.deleteTodo=function(e){t.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},t.togleCompleted=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t}))}}))},t.hangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,o=e.todos,n=e.filter.toLocaleLowerCase();return o.filter((function(t){return t.text.toLocaleLowerCase().includes(n)}))},t.getCompletedTodoCount=function(){return t.state.todos.reduce((function(t,e){return e.completed?t+1:t}),0)},t}return Object(u.a)(o,[{key:"render",value:function(){var t=this.state,e=t.todos,o=t.filter,n=e.length,a=this.getCompletedTodoCount(),c=this.getVisibleTodos();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("p",{children:["\u0412\u0441\u0435\u0433\u043e: ",n]}),Object(f.jsxs)("p",{children:["\u041a\u043e-\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445: ",a," "]})]}),Object(f.jsx)(x,{onSubmit:this.addTodo}),Object(f.jsx)(L,{value:o,onChange:this.hangeFilter}),Object(f.jsx)(C,{todos:c,onDeleteTodo:this.deleteTodo,onTogleCompleted:this.togleCompleted})]})}}]),o}(n.Component);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},9:function(t,e,o){t.exports={todoEditor:"TodoEditor_todoEditor__2tz8A",textarea:"TodoEditor_textarea__VwwuV",button:"TodoEditor_button__13976"}}},[[30,1,2]]]);
//# sourceMappingURL=main.57fc3880.chunk.js.map
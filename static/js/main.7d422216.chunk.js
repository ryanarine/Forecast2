(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/Rainy.2f78334f.png"},function(t,e,a){t.exports=a.p+"static/media/Snowy.cad3feb8.png"},function(t,e,a){t.exports=a.p+"static/media/cloudy.a4699f94.jpg"},function(t,e,a){t.exports=a.p+"static/media/Clear.122dd7e9.jpeg"},function(t,e,a){t.exports=a.p+"static/media/Thunderstorm.45c32976.jpg"},function(t,e,a){t.exports=a.p+"static/media/Drizzle.eada9e67.jpg"},function(t,e,a){t.exports=a.p+"static/media/Fog.79022001.png"},function(t,e,a){t.exports=a(25)},,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(10),r=a.n(i),l=a(7),o=a.n(l),c=a(1),h=a(2),u=a(4),d=a(3),m=a(6),p=a(5),y=a(8),E=a(11),f=a.n(E),v=a(12),g=a.n(v),w=a(13),b=a.n(w),x=a(14),C=a.n(x),k=a(15),S=a.n(k),j=a(16),O=a.n(j),F=a(17),T=a.n(F),D="1px 1px #000000, -1px 1px #000000, 1px -1px #000000, -1px -1px #000000",M={fontFamily:"Arial",color:"white",textShadow:D,fontWeight:300,margin:"10px",fontSize:"calc(25px + 1vw)"},A={fontFamily:"Arial",color:"orange",textShadow:D,fontWeight:200,fontSize:"calc(25px + 1vw)"},z={fontFamily:"Arial",color:"skyblue",textShadow:D,fontWeight:200,fontSize:"calc(25px + 1vw)"};var I=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={name:"",high:0,low:0,cond:"",bg:""},a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return s.a.createElement("div",{style:this.state.bg},s.a.createElement("h2",{style:M},this.state.name),s.a.createElement("h2",{style:M},this.state.cond),s.a.createElement("h2",{style:A},this.state.high),s.a.createElement("h2",{style:z},this.state.low))}}],[{key:"getDerivedStateFromProps",value:function(t,e){var a,n="Clear"===(a=t.condition)?C.a:"Clouds"===a?b.a:"Rain"===a?f.a:"Snow"===a?g.a:"Thunderstorm"===a?S.a:"Drizzle"===a?O.a:T.a;return{name:t.day,high:"High: "+t.high+"\xb0C",low:"Low: "+t.low+"\xb0C",cond:t.condition,bg:{backgroundSize:"cover",backgroundImage:"url("+n+")",backgroundColor:"powderblue",width:"calc(100% - 12px)",float:"left",height:"calc(400px + 10vw)",textAlign:"center",border:"4px solid black",marginLeft:"6px"}}}}]),e}(s.a.Component),W=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={values:0,day:"",start:0,conditions:0,descriptions:0},a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("table",{align:"center",style:{backgroundColor:"mediumaquamarine"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"8"},this.state.day)),s.a.createElement("tr",null,s.a.createElement("th",null,"Time(AM)"),s.a.createElement("th",null,"Temperature"),s.a.createElement("th",null,"Condition"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Time(PM)"),s.a.createElement("th",null,"Temperature"),s.a.createElement("th",null,"Condition"),s.a.createElement("th",null,"Description")),s.a.createElement("tr",null,s.a.createElement("td",null,"12:00"),s.a.createElement("td",null,this.state.values[this.state.start]),s.a.createElement("td",null,this.state.conditions[this.state.start]),s.a.createElement("td",null,this.state.descriptions[this.state.start]),s.a.createElement("td",null,"12:00"),s.a.createElement("td",null,this.state.values[this.state.start+4]),s.a.createElement("td",null,this.state.conditions[this.state.start+4]),s.a.createElement("td",null,this.state.descriptions[this.state.start+4])),s.a.createElement("tr",null,s.a.createElement("td",null,"3:00"),s.a.createElement("td",null,this.state.values[this.state.start+1]),s.a.createElement("td",null,this.state.conditions[this.state.start+1]),s.a.createElement("td",null,this.state.descriptions[this.state.start+1]),s.a.createElement("td",null,"3:00"),s.a.createElement("td",null,this.state.values[this.state.start+5]),s.a.createElement("td",null,this.state.conditions[this.state.start+5]),s.a.createElement("td",null,this.state.descriptions[this.state.start+5])),s.a.createElement("tr",null,s.a.createElement("td",null,"6:00"),s.a.createElement("td",null,this.state.values[this.state.start+2]),s.a.createElement("td",null,this.state.conditions[this.state.start+2]),s.a.createElement("td",null,this.state.descriptions[this.state.start+2]),s.a.createElement("td",null,"6:00"),s.a.createElement("td",null,this.state.values[this.state.start+6]),s.a.createElement("td",null,this.state.conditions[this.state.start+6]),s.a.createElement("td",null,this.state.descriptions[this.state.start+6])),s.a.createElement("tr",null,s.a.createElement("td",null,"9:00"),s.a.createElement("td",null,this.state.values[this.state.start+3]),s.a.createElement("td",null,this.state.conditions[this.state.start+3]),s.a.createElement("td",null,this.state.descriptions[this.state.start+3]),s.a.createElement("td",null,"9:00"),s.a.createElement("td",null,this.state.values[this.state.start+7]),s.a.createElement("td",null,this.state.conditions[this.state.start+7]),s.a.createElement("td",null,this.state.descriptions[this.state.start+7])))))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{day:t.day,values:t.values,start:t.start,conditions:t.conditions,descriptions:t.descriptions}}}]),e}(s.a.Component),H="54a84a123d401ac68736a6bca89f4301",_={6167865:"Toronto",5907364:"Brampton",6075357:"Mississauga",6122091:"Richmond Hill",5992996:"Kitchener",6176823:"Waterloo",6066513:"Markham",6094817:"Ottawa",5969782:"Hamilton",6173577:"Vaughan",6094578:"Oshawa"},N={toronto:"6167865",brampton:"5907364",mississauga:"6075357",richmondhill:"6122091",kitchener:"5992996",waterloo:"6176823",markham:"6066513",ottawa:"6094817",hamilton:"5969782",vaughan:"6173577",oshawa:"6094578"},R="https://api.openweathermap.org/data/2.5/forecast?id=6167865&appid="+H,B=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],P={width:"20%",float:"left"},q={minWidth:"1000px"};function J(t){for(var e=[],a=0;a<40;a+=8)e.push(B[(new Date(t.list[a].dt_txt.slice(0,10)).getDay()+1)%7]);return e}function K(t){for(var e=[],a=0;a<40;a+=8)e.push(t.list[a].weather[0].main);return e}function L(t,e){for(var a=[],n=[],s=0;s<e.length-1;s++){for(var i=0,r=Number.MAX_SAFE_INTEGER,l=e[s],o=e[s+1],c=l;c<o;c++)i=Math.max(i,t.list[c].main.temp_max),r=Math.min(r,t.list[c].main.temp_min);n.push((i-273.15).toFixed(2)),a.push((r-273.15).toFixed(2))}return{highs:n,lows:a}}function V(t){var e,a=[],n=(e=t[0],(24-new Date(e.dt_txt).getHours())/3);a.push(0);for(var s=n;s<=40;s+=8)a.push(s);return a}function G(t,e){for(var a=e[1],n=[],s=[],i=[],r=0;r<8-a;r++)n.push("N/A"),s.push("N/A"),i.push("N/A");for(var l=0;l<32+a;l++)n.push((t[l].main.temp-273.15).toFixed(2)+"\xb0C"),s.push(t[l].weather[0].main),i.push(t[l].weather[0].description);return{temps:n,conds:s,descs:i}}function X(){return Q.apply(this,arguments)}function Q(){return(Q=Object(y.a)(o.a.mark(function t(){var e,a,n,s,i,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(R);case 2:if(429!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",-1);case 5:return t.next=7,e.json();case 7:return a=t.sent,console.log(a),n=V(a.list),(s={}).days=J(a),s.conditions=K(a),i=L(a,n),s.highs=i.highs,s.lows=i.lows,s.starts=n,r=G(a.list,n),s.hourly=r.temps,s.hourlyConditions=r.conds,s.descriptions=r.descs,t.next=23,s;case 23:return t.abrupt("return",t.sent);case 24:case"end":return t.stop()}},t)}))).apply(this,arguments)}var U=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).state={days:0,highs:0,lows:0,conds:0,formCity:"toronto",city:"toronto",code:"6167865",status:200,starts:[],hourly:[],hourlyConds:[],descriptions:[],dayIndex:-1},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.dayFocus=a.dayFocus.bind(Object(m.a)(a)),a}return Object(p.a)(e,t),Object(h.a)(e,[{key:"handleChange",value:function(t){this.setState({formCity:t.target.value})}},{key:"handleSubmit",value:function(t){var e=this;this.state.formCity!==this.state.city&&this.setState({city:this.state.formCity,code:N[this.state.formCity]},function(){return e.componentDidMount()}),t.preventDefault()}},{key:"dayFocus",value:function(t){this.setState({dayIndex:t})}},{key:"render",value:function(){var t=this;return 0===this.state.days?s.a.createElement("h1",null,"The Forecast is loading, please wait"):429===this.state.status?s.a.createElement("h1",null,"Too many forecast requests have been made. Please come back in an hour."):-1!==this.state.dayIndex?s.a.createElement("div",null,s.a.createElement(W,{day:this.state.days[this.state.dayIndex],values:this.state.hourly,start:8*this.state.dayIndex,conditions:this.state.hourlyConds,descriptions:this.state.descriptions}),s.a.createElement("button",{onClick:function(){return t.dayFocus(-1)}},"Back")):s.a.createElement("div",{style:q},s.a.createElement("h1",null,_[this.state.code]+"'s Forecast"),s.a.createElement("div",null,s.a.createElement("div",{onClick:function(){return t.dayFocus(0)},style:P}," ",s.a.createElement(I,{day:this.state.days[0],high:this.state.highs[0],low:this.state.lows[0],condition:this.state.conds[0]})," "),s.a.createElement("div",{onClick:function(){return t.dayFocus(1)},style:P}," ",s.a.createElement(I,{day:this.state.days[1],high:this.state.highs[1],low:this.state.lows[1],condition:this.state.conds[1]})," "),s.a.createElement("div",{onClick:function(){return t.dayFocus(2)},style:P}," ",s.a.createElement(I,{day:this.state.days[2],high:this.state.highs[2],low:this.state.lows[2],condition:this.state.conds[2]})," "),s.a.createElement("div",{onClick:function(){return t.dayFocus(3)},style:P}," ",s.a.createElement(I,{day:this.state.days[3],high:this.state.highs[3],low:this.state.lows[3],condition:this.state.conds[3]})," "),s.a.createElement("div",{onClick:function(){return t.dayFocus(4)},style:P}," ",s.a.createElement(I,{day:this.state.days[4],high:this.state.highs[4],low:this.state.lows[4],condition:this.state.conds[4]})," ")),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",null,"Choose a city to display its forecast ",s.a.createElement("br",null),s.a.createElement("select",{value:this.state.formCity,onChange:this.handleChange},s.a.createElement("option",{value:"toronto"},"Toronto"),s.a.createElement("option",{value:"brampton"},"Brampton"),s.a.createElement("option",{value:"mississauga"},"Mississauga"),s.a.createElement("option",{value:"richmondhill"},"Richmond Hill"),s.a.createElement("option",{value:"kitchener"},"Kitchener"),s.a.createElement("option",{value:"waterloo"},"Waterloo"),s.a.createElement("option",{value:"markham"},"Markham"),s.a.createElement("option",{value:"ottawa"},"Ottawa"),s.a.createElement("option",{value:"hamilton"},"Hamilton"),s.a.createElement("option",{value:"vaughan"},"Vaughan"),s.a.createElement("option",{value:"oshawa"},"Oshawa"))),s.a.createElement("input",{type:"submit",value:"Submit"})))}},{key:"componentDidMount",value:function(){var t=Object(y.a)(o.a.mark(function t(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.state.city,R="https://api.openweathermap.org/data/2.5/forecast?id="+N[a]+"&appid="+H,t.next=3,X();case 3:-1===(e=t.sent)?this.setState({status:429}):this.setState({days:e.days,highs:e.highs,lows:e.lows,conds:e.conditions,starts:e.starts,hourly:e.hourly,hourlyConds:e.hourlyConditions,descriptions:e.descriptions});case 5:case"end":return t.stop()}var a},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}(s.a.Component);r.a.render(s.a.createElement(U,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.7d422216.chunk.js.map
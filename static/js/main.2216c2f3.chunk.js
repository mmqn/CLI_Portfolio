(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports={CommandsList:{Title:"List of Commands",Description:"",Content:["`hello` or `about`","`skills`","`experience`","`projects`","`classes`","`articles`"]},About:{Title:"About Me",Description:"A little bit about myself",Content:["B.S. Computer Information Systems","Applications Development Concentration","Minor in Marketing","California State Polytechnic University, Pomona","Graduating May 2019","\u2014//\u2014","While those stats above may give you a general idea of my areas of interest, my actual list of interests is much less concise. Keeping up with technology both in terms of technical knowledge and culture has always been a mainstay of my life.","And through the years, I've gained more interest in other fields the more I've learned about them. As a former architecture major, I've always been interested in the interrelationship between design and function. Through my college years, I've gained leadership experience in marketing roles and have come to be facinated by the state of modern marketing and how closely it weaves with emergent technologies. Then I began to learn more about data analytics after some interesting classes and began experimenting with collecting and processsing data on whatever I can, from measuring the performance/efficieny of my development projects to the marketing campaigns I ran for my student organizations.","Development, design, marketing, data analytics: These all seem like some disparate disciplines, but I think if you look closely, they are all the same. If used morally, they are all modern methods that allow us to make sense of the world and contribute to it in a creative and meaningful way."]},Skills:{Title:"Skills",Description:"",Content:["HTML, CSS, & JavaScript","React.js","Java & PHP","SQL & Database Design","Adobe Illustrator, Photoshop, & After Effects","Adobe XD","Scrum Methodology","WordPress & Squarespace CMS","Instagram & Facebook Ads"]},Experience:{Title:"Experience",Description:"",Content:["Front-End Developer, Inland Engineering Services","Tech Lead, 2TAC Corporation","Vice President of Marketing, Alpha Kappa Psi","Overwatch Parties, Full-Stack Website Development","Movement, Web App for LA Hacks","Barista, The Coffee Bean & Tea Leaf"]},Projects:{Title:"Projects",Description:"",Content:["_"]},Classes:{Title:"Classes",Description:"",Content:["Object-Oriented Java","Secure Web Development","Back-End Web Development","Business Telecommunications","Database Design & Development","User Experience Design","Foundations in Digital Design","Consumer Behavior","Digital Analytics","Business Intelligence"]},Articles:{Title:"Articles",Description:"",Content:["_"]}}},function(e){e.exports={DarkMain:"#000e4a",DarkThree:"#001b79",DarkTwo:"#002da4",DarkOne:"#0047c6",LightOne:"#2a7fde",LightTwo:"#65baee",LightThree:"#a5e6f9",LightMain:"#e5fdff"}},,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),i=n.n(r),s=n(6),l=n(7),c=n(9),m=n(8),d=n(10),u=n(1),h=(n(16),n(17),n(3)),p=n(2),y=function(e){var t=e.title,n=e.description,a=e.content,r=e.color;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"content-header"},o.a.createElement("h1",{style:{color:r}},t),o.a.createElement("h2",{style:{color:r}},n)),o.a.createElement("div",{id:"content-body"},a.map(function(e){return o.a.createElement("p",null,e)})))},g=y;y.defaultProps={title:"Oh dear, looks like something went wrong \ud83d\ude26",description:"",content:[""],color:"#000e4a"};n(18);var b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={query:"",result:{Title:"",Description:"",Content:[""]},colors:{Primary:h.LightMain,Secondary:h.DarkMain},mountContent:!1,mountCommandsList:!1},n.resetQuery=n.resetQuery.bind(Object(u.a)(Object(u.a)(n))),n.updateQuery=n.updateQuery.bind(Object(u.a)(Object(u.a)(n))),n.handleCommand=n.handleCommand.bind(Object(u.a)(Object(u.a)(n))),n.toggleCommandsList=n.toggleCommandsList.bind(Object(u.a)(Object(u.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"resetQuery",value:function(){document.getElementById("input").focus(),this.setState({query:""})}},{key:"updateQuery",value:function(e){this.setState({query:e.target.value,mountContent:!0})}},{key:"handleCommand",value:function(e){var t=e.key,n=this.state.query,a=this.resetQuery;"Escape"===t?a():"?"===n?this.setState({mountCommandsList:!0}):/hello/i.test(n)||/about/i.test(n)?this.setState({result:p.About}):/skills/i.test(n)?this.setState({result:p.Skills}):/experience/i.test(n)?this.setState({result:p.Experience}):/projects/i.test(n)?this.setState({result:p.Projects}):/classes/i.test(n)?this.setState({result:p.Classes}):/flip/i.test(n)?this.setState({}):this.setState({result:{Title:"",Description:"",Content:[""]}})}},{key:"toggleCommandsList",value:function(){this.setState(function(e){return{mountCommandsList:!e.mountCommandsList}})}},{key:"render",value:function(){var e=this.state,t=e.query,n=e.result,r=e.colors,i=e.mountContent,s=e.mountCommandsList,l=this.resetQuery,c=this.updateQuery,m=this.handleCommand,d=this.toggleCommandsList;document.getElementsByTagName("body")[0].bgColor=r.Primary;var u=o.a.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000",width:"250",height:"250"},o.a.createElement("title",null,"keycap_logo"),o.a.createElement("path",{d:"M454.93,803.41L45.4723,567.0093c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,265.56,519.3118,263.6954,545.07,278.5666L954.5277,514.9674c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,816.4163,480.6882,818.2813,454.93,803.41Z",style:{fill:r.Secondary,stroke:r.Primary,strokeMiterlimit:"10",strokeWidth:"16px"}}),o.a.createElement("line",{x1:"28.0831",y1:"540.9884",x2:"28.0831",y2:"500.643",style:{fill:"none",stroke:r.Primary,strokeMiterlimit:"10",strokeWidth:"16px"}}),o.a.createElement("line",{x1:"971.9169",y1:"540.9884",x2:"971.9169",y2:"498.3377",style:{fill:"none",stroke:r.Primary,strokeMiterlimit:"10",strokeWidth:"16px"}}),o.a.createElement("path",{d:"M454.93,763.0647L45.4723,526.664c-25.7578-14.8712-22.5275-40.8473,7.215-58.0191l391.89-226.2579C474.32,225.215,519.3118,223.35,545.07,238.2213L954.5277,474.6221c25.7578,14.8712,22.5275,40.8473-7.215,58.0191l-391.89,226.2579C525.68,776.071,480.6882,777.936,454.93,763.0647Z",style:{fill:r.Secondary,stroke:r.Primary,strokeMiterlimit:"10",strokeWidth:"16px"}}),o.a.createElement("path",{d:"M370.85,528.4756l117.4048-67.7837-133.43,23.92-18.8505-10.8834,41.4273-77.0377L259.9971,464.4747,225.31,444.448,402.6674,342.0506,439.8707,363.53l-48.1341,88.74,154.21-27.4969,36.951,21.3337L405.5406,548.5042Z",style:{fill:r.Primary}}),o.a.createElement("path",{d:"M591.0852,524.388l-113.6576,65.62-34.6871-20.0266L620.098,467.5842l26.8967,15.5288L623.5941,604.016l116.1546-67.0619,34.6906,20.0286L597.3326,659.2354,569.1778,642.98Z",style:{fill:r.Primary}}),o.a.createElement("line",{x1:"257.0796",y1:"560.3206",x2:"396.6354",y2:"640.8931",style:{fill:"none",stroke:r.Primary,strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"14px"}})),h=o.a.createElement("div",{id:"credits",style:{color:r.Secondary}},"Built using\xa0[",o.a.createElement("a",{className:"light-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React.js"),",\xa0",o.a.createElement("a",{className:"light-link",href:"http://www.colorbox.io/#steps=9#hue_start=230#hue_end=185#hue_curve=easeInQuad#sat_start=100#sat_end=5#sat_curve=linear#sat_rate=200#lum_start=12#lum_end=100#lum_curve=easeInQuad#lock_hex=",target:"_blank",rel:"noopener noreferrer"},"ColorBox"),",\xa0",o.a.createElement("a",{className:"light-link",href:"https://www.youtube.com/watch?v=HEXWRTEbj1I",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")),"]"),y=o.a.createElement("div",{id:"cmd-list",className:"no-select",onClick:d,style:{bottom:s?"0px":-17*p.CommandsList.Content.length,height:17*p.CommandsList.Content.length+22,backgroundColor:r.Primary,borderColor:r.Secondary}},o.a.createElement("p",{style:{margin:"4px",fontWeight:"900",color:r.Primary,backgroundColor:r.Secondary}},p.CommandsList.Title),p.CommandsList.Content.map(function(e){return o.a.createElement("p",{key:e,style:{color:r.Secondary}},e)}));return o.a.createElement(a.Fragment,null,o.a.createElement("div",{id:"top-panel",style:i?{backgroundColor:r.Secondary,height:"140px"}:{backgroundColor:r.Secondary,height:"240px"}},o.a.createElement("p",{id:"name-title",style:{color:r.Primary},role:"button",tabIndex:"0",onClick:function(){return window.location.reload()}},"Michael M. Q. Nguyen"),!i&&o.a.createElement("p",{id:"tagline",style:{color:r.Primary}},"I code designs & design code.",o.a.createElement("br",null),"Your cursor is hot and ready to fire,",o.a.createElement("br",null),"just go ahead and type \u2018hello\u2019!"),o.a.createElement("div",{style:{margin:"-8px",paddingTop:"15px"}},o.a.createElement("span",{className:"input-bracket pulse",role:"button",tabIndex:"0",onClick:l},"["),o.a.createElement("input",{id:"input",type:"text",value:t,onChange:c,onKeyUp:m,autoFocus:!0,style:{width:"".concat(53*t.length,"px"),fontFamily:"'Anonymous Pro', monospace",fontSize:"72pt",color:r.Primary,caretColor:r.Primary,backgroundColor:"rgba(0,0,0,0.0)",outline:"none",border:"none"}}),o.a.createElement("span",{className:"input-bracket pulse",role:"button",tabIndex:"0",onClick:l},"]"))),i&&o.a.createElement("div",{id:"content"},o.a.createElement(g,{title:n.Title,description:n.Description,content:n.Content,color:r.Secondary})),y,u,h)}}]),t}(a.Component);i.a.render(o.a.createElement(b,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.2216c2f3.chunk.js.map
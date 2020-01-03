(this.webpackJsonpsoftui=this.webpackJsonpsoftui||[]).push([[0],{34:function(e,t,a){e.exports=a(75)},39:function(e,t,a){},40:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=(a(39),a(40),a(19)),s=a(29),i=a(20),l=a(21),u=a(22),h=a(30),m=a(23),d=a(31);function p(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var a,n,r="#";for(n=0;n<3;n++)a=parseInt(e.substr(2*n,2),16),r+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*t),255)).toString(16))).substr(a.length);return r}function f(e){return(299*parseInt(e.substr(1,2),16)+587*parseInt(e.substr(3,2),16)+114*parseInt(e.substr(5,2),16))/1e3>=128?"#001f3f":"#F6F5F7"}var g=a(80),b=a(25),v=a(26),x=a(78),E=a(79);function C(){var e=Object(c.a)(["\n  position: absolute;\n  left: ",";\n  top: ",";\n  right: ",";\n  bottom: ",";\n  background: transparent;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  border: 2px solid var(--textColor);\n  border-bottom-right-radius: ",";\n  border-bottom-left-radius: ",";\n  border-top-right-radius: ",";\n  border-top-left-radius: ",";\n\n  &.active {\n    background: #ffff00;\n  }\n"]);return C=function(){return e},e}g.a.registerLanguage("css",b.a);var S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={color:"#aab7ea",size:300,radius:80,shape:!0,distance:30,blur:60,activeLightSource:0,colorDifference:.15,maxSize:410},a.softElement=r.a.createRef(),a.colorInput=r.a.createRef(),a.body=document.getElementsByTagName("body")[0],a.lightSources=[],a.lightColor="",a.darkColor="",a.theme=!0,a.codeString="background: linear-gradient(145deg);\nbox-shadow: 30px 30px var(--blur) var(--lightColor), \n            -30px -30px var(--blur) var(--darkColor);",a.handleOnChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.setdistance=function(e){a.setState({distance:e.target.value,blur:2*e.target.value})},a.validateColor=function(e){/^#[0-9A-F]{6}$/i.test(e.target.value)&&a.handleOnChange(e)},a.setShape=function(e){a.setState({shape:e.target.dataset.value})},a.setLightSource=function(e){a.lightSources.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),a.setState({activeLightSource:parseInt(e.target.dataset.value)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({color:"#aab7ea"}),this.lightSources=Object(s.a)(document.getElementsByClassName("light-source"));var e=window.outerWidth;e<1e3?e<800?e<680?this.setState({maxSize:180,size:150}):this.setState({maxSize:250,size:200}):this.setState({maxSize:350,size:250}):this.setState({maxSize:410,size:300})}},{key:"render",value:function(){var e=this.state,t=e.blur,a=e.color,n=e.size,o=e.radius,c=e.shape,s=e.distance,i=e.activeLightSource,l=e.colorDifference,u=e.maxSize;if(this.softElement.current){var h=145,m=30,d=30,b=p(a,-1*l),v=p(a,l),C=p(a,c?.07:-.1),S=p(a,c?-.1:.07);switch(i){case 1:m=s,d=s,h=145;break;case 2:m=-1*s,d=s,h=225;break;case 3:m=-1*s,d=-1*s,h=315;break;case 4:m=s,d=-1*s,h=45;break;default:m=s,d=s,h=145}this.colorInput.current.value=a,document.documentElement.style.cssText="\n        --positionX: ".concat(m,"px;\n        --positionXOpposite: ").concat(-1*m,"px;\n        --positionY: ").concat(d,"px;\n        --positionYOpposite: ").concat(-1*d,"px;\n        --angle: ").concat(h,"deg;\n        --blur: ").concat(t,"px;\n        --textColor: ").concat(f(a),";\n        --textColorOpposite: ").concat(a,";\n        --baseColor: ").concat(a,";\n        --darkColor: ").concat(b,";\n        --lightColor: ").concat(v,";\n        --firstGradientColor: ").concat(C,";\n        --secondGradientColor: ").concat(S,";\n      "),this.softElement.current.style.setProperty("--size",n+"px"),this.softElement.current.style.setProperty("--radius",o+"px"),"#001f3f"===f(a)?this.theme=!0:this.theme=!1,this.codeString="border-radius: ".concat("200"===o?"50%":o+"px",";\nbackground: linear-gradient(").concat(h,"deg, ").concat(C,", ").concat(S,");\nbox-shadow: ").concat(m,"px ").concat(d,"px ").concat(t,"px ").concat(b,", \n            ").concat(-1*m,"px ").concat(-1*d,"px ").concat(t,"px ").concat(v,";")}return r.a.createElement("div",{className:"container App"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"preview"},r.a.createElement(y,{top:"0",bottom:"unset",right:"0",left:"unset","data-value":"2",onClick:this.setLightSource,className:"light-source"}),r.a.createElement(y,{top:"0",bottom:"unset",right:"unset",left:"0","data-value":"1",onClick:this.setLightSource,className:"light-source active"}),r.a.createElement(y,{top:"unset",bottom:"0",right:"0",left:"unset","data-value":"3",onClick:this.setLightSource,className:"light-source"}),r.a.createElement(y,{top:"unset",bottom:"0",right:"unset",left:"0","data-value":"4",onClick:this.setLightSource,className:"light-source"}),r.a.createElement("div",{ref:this.softElement,className:"soft-element soft-shadow"})),r.a.createElement("div",{className:"configuration soft-shadow"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"color"},"Select color:"),r.a.createElement("input",{type:"color",name:"color",onChange:this.handleOnChange,placeholder:"#ffffff",value:a,id:"color"}),r.a.createElement("span",{style:{margin:"0 10px"}},"or"),r.a.createElement("input",{type:"text",placeholder:"#ffffff",name:"color",ref:this.colorInput,onChange:this.validateColor})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"size"},"Size: "),r.a.createElement("input",{type:"range",name:"size",value:n,onChange:this.handleOnChange,min:"10",max:u,step:"1",id:"size"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"radius"},"Radius: "),r.a.createElement("input",{type:"range",name:"radius",value:o,onChange:this.handleOnChange,min:"0",max:"200",step:"1",id:"radius"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"distance"},"Distance: "),r.a.createElement("input",{type:"range",name:"distance",value:s,onChange:this.setdistance,min:"5",max:"50",step:"1",id:"distance"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"colorDifference"},"Intensity: "),r.a.createElement("input",{type:"range",name:"colorDifference",value:l,onChange:this.handleOnChange,min:"0.01",max:"0.6",step:"0.01",id:"colorDifference"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"blur"},"Blur: "),r.a.createElement("input",{type:"range",name:"blur",value:t,onChange:this.handleOnChange,min:"0",max:"200",step:"1",id:"blur"})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"shape"},"Shape: "),r.a.createElement("div",{className:"shape-switch"},r.a.createElement("button",{className:c?"active":"",onClick:this.setShape,"data-value":" "},"Concave"),r.a.createElement("button",{className:c?"":"active",onClick:this.setShape,"data-value":""},"Convex"))),r.a.createElement("div",{className:"code-block ".concat(this.theme?"":"small")},r.a.createElement(g.a,{language:"css",style:this.theme?x.a:E.a},this.codeString)))))}}]),t}(n.Component),y=v.a.div(C(),(function(e){return e.left}),(function(e){return e.top}),(function(e){return e.right}),(function(e){return e.bottom}),(function(e){return"unset"===e.right&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.right&&"unset"===e.top?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.top?"30px":"unset"})),N=S,k=document.getElementById("root");k.hasChildNodes()?Object(o.hydrate)(r.a.createElement(N,null),k):Object(o.render)(r.a.createElement(N,null),k)}},[[34,1,2]]]);
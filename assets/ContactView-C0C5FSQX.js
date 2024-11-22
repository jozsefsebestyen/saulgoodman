import{_ as U,r as v,b as _,o as b,w as o,d as n,e as l,a as m,f as k,g as c,h as C}from"./index-3RtN3D4x.js";const N={__name:"ContactView",setup(P){const a=v({name:"",email:"",phone:"",message:""}),i=v(!1),p=v(!1),r={required:u=>!!u||"This field is required.",email:u=>/.+@.+\..+/.test(u)||"Please enter a valid email.",hungarianPhone:u=>/^(\+36|06)\s?(20|30|70)\s?\d{3}\s?\d{4}$/.test(u)||"Please enter a valid Hungarian phone number starting with +36 or 06."},V=()=>{p.value=!0,console.log("Form submitted:",a.value)};return(u,e)=>{const s=n("v-col"),d=n("v-row"),f=n("v-text-field"),g=n("v-textarea"),w=n("v-btn"),x=n("v-form"),q=n("v-alert"),y=n("v-container");return b(),_(y,null,{default:o(()=>[l(d,{class:"align-center"},{default:o(()=>[l(s,{cols:"12",md:"6"},{default:o(()=>[l(d,null,{default:o(()=>[l(s,null,{default:o(()=>e[5]||(e[5]=[m("h2",null,"Contact Us",-1)])),_:1})]),_:1}),l(d,null,{default:o(()=>[l(s,null,{default:o(()=>[l(x,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=t=>i.value=t),onSubmit:k(V,["prevent"])},{default:o(()=>[l(f,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.name=t),label:"Full Name",rules:[r.required],required:""},null,8,["modelValue","rules"]),l(f,{modelValue:a.value.email,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.email=t),label:"Email Address",rules:[r.required,r.email],required:""},null,8,["modelValue","rules"]),l(f,{modelValue:a.value.phone,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.phone=t),label:"Phone Number (+36 or 06)",rules:[r.required,r.hungarianPhone],required:""},null,8,["modelValue","rules"]),l(g,{modelValue:a.value.message,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.message=t),label:"Message",rules:[r.required],required:""},null,8,["modelValue","rules"]),l(w,{color:"#ffcc00",type:"submit",size:"x-large",disabled:!i.value,block:""},{default:o(()=>e[6]||(e[6]=[c("Send Message")])),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(s,{cols:"12",md:"6"},{default:o(()=>[l(d,null,{default:o(()=>[l(s,null,{default:o(()=>e[7]||(e[7]=[m("h2",null,"Visit Us",-1)])),_:1})]),_:1}),l(d,null,{default:o(()=>[l(s,null,{default:o(()=>e[8]||(e[8]=[m("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.174487236186!2d16.43237841232071!3d48.203254946466224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d013eb8a713f1%3A0xdd5ed8493059c2f3!2sSaul%20Goodman%20Office!5e0!3m2!1sen!2sde!4v1732225023748!5m2!1sen!2sde",width:"100%",height:"600",frameborder:"0",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)])),_:1})]),_:1})]),_:1})]),_:1}),p.value?(b(),_(q,{key:0,type:"success",border:"left","colored-border":""},{default:o(()=>e[9]||(e[9]=[m("strong",null,"Thank you for contacting us!",-1),c(" We will get back to you shortly. ")])),_:1})):C("",!0)]),_:1})}}},S=U(N,[["__scopeId","data-v-bcf085d5"]]);export{S as default};

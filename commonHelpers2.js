import"./assets/reset-df635d97.js";const a=document.querySelector(".feedback-form"),l=document.querySelector(".feedback-form > label > input"),o=document.querySelector(".feedback-form > label > textarea"),t={email:"",message:""};a.addEventListener("input",()=>{t.email=l.value.trim(),t.message=o.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault(),l.value===""||o.value===""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem("feedback-form-state"),a.reset())});function r(){const e=JSON.parse(localStorage.getItem("feedback-form-state")),{email:s,message:m}=a.elements;e!==null&&(s.value=e.email,m.value=e.message)}window.addEventListener("load",r);
//# sourceMappingURL=commonHelpers2.js.map
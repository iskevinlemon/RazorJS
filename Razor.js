/*
RazorJS - JavaScript library for Razor (@) templating.
Credits - This project is inspired by the Microsoft ASP .NET Razor syntax.

> IMPORTANT: Razor.js have to be LOADED first before your actual <script> tag.

> READ ME BEFORE USING
RazorJS IS NOT compatible with whyjs library.

Created by: Kevin (https://github.com/kevin-lem0n)
*/
(function(b){b.a=function(){var a=document.body.innerHTML;
var rc=a.replace(/@(\w+)/g,function(m,c){
if(window.hasOwnProperty(c)){return window[c];} 
else{return m;}});document.body.innerHTML=rc;};})(window);
document.addEventListener("DOMContentLoaded",function(){a();});

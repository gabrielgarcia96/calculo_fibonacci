var sp = 67.83643
var rj = 36.67866
var mg = 29.22988
var es = 27.16548
var out = 19.84953
var total = (sp + rj + mg + es + out)
console.log(total) 
var psp = ((sp/total)*100)
var prj = ((rj/total)*100)
var pmg = ((mg/total)*100)
var pes = ((es/total)*100)
var pout = ((out/total)*100)

console.log( `Porcentagem de SP {} ${psp}`);
console.log( `Porcentagem de RJ {} ${prj}`);
console.log( `Porcentagem de MG {} ${pmg}`);
console.log( `Porcentagem de ES {} ${pes}`);
console.log( `Porcentagem de OUT {} ${pout}`);
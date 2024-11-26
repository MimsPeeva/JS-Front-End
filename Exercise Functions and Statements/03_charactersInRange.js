function characters(ch1,ch2){
const start = Math.min(ch1.charCodeAt(0),ch2.charCodeAt(0))+1;
const end = Math.max(ch1.charCodeAt(0),ch2.charCodeAt(0));
let result ='';
for (let i = start; i < end; i++){
    result+=String.fromCharCode(i) + ' ';
}
console.log(result);
}

characters('a','d');
characters('#',':');
characters('C','#');

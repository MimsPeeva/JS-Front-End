function solve(n, op1,op2,op3,op4,op5){
for (let i = 1; i <= 5; i++) {
 switch (eval('op'+i)) {
    case 'chop':
        n/=2;
        break;
        case 'dice':
        n=Math.sqrt(n);
        break;
        case 'spice':
        n++;
        break;
        case 'bake':
        n*=3;
        break;
        case 'fillet':
        n*=0.8;
        break;
 }

 if (! Number.isInteger(n))  n=n.ToFixed(2);

 console.log(n);
}
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
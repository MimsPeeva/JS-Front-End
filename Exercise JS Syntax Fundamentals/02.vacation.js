function solve(groupNumber, groupType, dayOfWeek){
let price;
let sum;
switch(groupType)
{
    case 'Students':
        if(dayOfWeek=='Friday'){
price=8.45;
        }
        else if(dayOfWeek=='Saturday'){
            price=9.80;
        }
        else if(dayOfWeek=='Sunday'){
               price=10.46;
         }
        sum = groupNumber*price;
        if (groupNumber>=30) {
           sum*=0.85;
        }
        break;
    case 'Business':
        if(dayOfWeek=='Friday'){
            price=10.90;
                    }
                    else if(dayOfWeek=='Saturday'){
                        price=15.60;
                    }
                    else if(dayOfWeek=='Sunday'){
                           price=16;
                     }
                    sum = groupNumber*price;
                    if (groupNumber>=100) {
                        sum=(groupNumber-10)*price;
                    }
                    break;
    case 'Regular':
        if(dayOfWeek=='Friday'){
            price=15;
                    }
                    else if(dayOfWeek=='Saturday'){
                        price=20;
                    }
                    else if(dayOfWeek=='Sunday'){
                           price=22.50;
                     }
                    sum = groupNumber*price;
                    if (groupNumber>=10 && groupNumber<=20) {
                        sum*=0.95;
                    }
                    break;

}
console.log(`Total price: ${sum.toFixed(2)}`);
}
solve(30,"Students","Sunday");
solve(40,"Regular","Saturday");
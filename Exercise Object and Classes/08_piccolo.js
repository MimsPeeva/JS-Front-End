function picolo(input){
    const parking ={}

    input.forEach(entry => {
 
        const[direction,carN]= entry.split(', ');
        

        if (direction=='IN') {
            if(! parking.hasOwnProperty(carN))
            {
                parking[carN]=1;
            }
        } else{
            if(parking.hasOwnProperty(carN))
                {
                    delete parking[carN];
                }
        }
    });

    if(Object.keys(parking).length>0)
   {
    Object
    .entries(parking)
    .sort()
    .forEach(([carN])=> console.log(carN));
    } else{
        console.log('Parking Lot is Empty');
    }
        
    
}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);    
    // CA2822UU
    // CA2844AA
    // CA9876HH
    // CA9999TT


   picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);	
    
    //Parking Lot is Empty
    
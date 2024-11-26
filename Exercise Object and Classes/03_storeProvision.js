function storeProvision(stock,orderded){

   const storage={}

   for (let i = 0; i < stock.length; i+=2) {
    storage[stock[i]]=Number(stock[i+1]);
   }

   for (let i = 0; i < orderded.length; i+=2) {
    if(!storage.hasOwnProperty(orderded[i]))
    {
        storage[orderded[i]]=0;
    }
    storage[orderded[i]]+=Number(orderded[i+1]);

   }
  // console.log(JSON.stringify(storage,0,4 ));
  for (const product in storage) {
console.log(`${product} -> ${storage[product]}`);    
  }
}


storeProvision([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]	
);
    
    // Chips -> 5
    // CocaCola -> 9
    // Bananas -> 44
    // Pasta -> 11
    // Beer -> 2
    // Flour -> 44
    // Oil -> 12
    // Tomatoes -> 70

   storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);	
    
    // Salt -> 2
    // Fanta -> 4
    // Apple -> 21
    // Water -> 4
    // Juice -> 5
    // Sugar -> 44
    // Oil -> 12
    // Tomatoes -> 7
    // Bananas -> 30
    
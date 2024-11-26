function oddOccurrence(input){

    const words = input.toLowerCase().split(' ');
    const matched = words.reduce((matched,word) => ({...matched,[word]: 0}),{});
words.forEach(word => {
    if(matched.hasOwnProperty(word)) matched[word]+=1;   
});

//console.log(Object.entries(matched).filter(el => el[1] % 2 !=0));
let output =  Object
.entries(matched)
.filter(el => el[1] % 2 !=0)
.reduce((output, [word,count])=> output+= `${word} `, '');
//.forEach((output, [word,count])=>output += `${word} `);

console.log(output);
}

oddOccurrence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');	//c# php 1 5
oddOccurrence('Cake IS SWEET is Soft CAKE sweet Food');	//soft food

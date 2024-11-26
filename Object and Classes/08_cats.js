
function catsF(arr)
{
    let cats =[];
    class Cat{
        constructor(name,age){
        this.name=name;
        this.age=age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
        for (let i = 0; i < arr.length; i++) {
            let catData = arr[i].split(' ');
            let name,age;
        [name,age]=[catData[0],catData[1]];
        cats.push(new Cat(name,age));
        }
       cats.forEach(c => {
        c.meow();
       });
}
catsF(['Mellow 2', 'Tom 5']);

// Mellow, age 2 says Meow
// Tom, age 5 says Meow

catsF(['Candy 1', 'Poppy 3', 'Nyx 2']);

// Candy, age 1 says Meow
// Poppy, age 3 says Meow
// Nyx, age 2 says Meow

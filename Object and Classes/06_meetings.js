function meetings(input){
const meetings = {};
input.forEach(entry => {
    const[dayOfWeek,name]=entry.split(' ');
    if (meetings.hasOwnProperty(dayOfWeek)	) {
        console.log(`Conflict on ${dayOfWeek}!`);
    }
    else 
    { meetings[dayOfWeek]=name;
        console.log(`Scheduled for ${dayOfWeek}`);}
});
for (const key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
}
}


meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);	
    
//     Scheduled for Monday
//    Scheduled for Wednesday
//    Conflict on Monday!
//    Scheduled for Friday
//    Monday -> Peter
//    Wednesday -> Bill
//    Friday -> Tim

   meetings(['Friday Bob',
   'Saturday Ted',
   'Monday Bill',
   'Monday John',
   'Wednesday George']);
   
//    Scheduled for Friday
//    Scheduled for Saturday
//    Scheduled for Monday
//    Conflict on Monday!
//    Scheduled for Wednesday
//    Friday -> Bob
//    Saturday -> Ted
//    Monday -> Bill
//    Wednesday -> George
   
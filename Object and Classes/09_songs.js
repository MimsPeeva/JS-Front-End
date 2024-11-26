function songsF(arr){

    class Song{
constructor(typeList, name, time){
this.typeList=typeList;
this.name=name;
this.time=time;
}

}
let songs=[];
let numberOfSongs = arr.shift();
let typeSong = arr.pop();

for (let i = 0; i < numberOfSongs; i++) {
    let [typeList,name,time] = arr[i].split('_');
    let song = new Song(typeList,name,time);
    songs.push(song);
}

if (typeSong=="all") {
  songs.forEach(s => {console.log(s.name);})
}
else{
    let filtered = songs.filter((s)=>s.typeList==typeSong);
    filtered.forEach(f=>{console.log(f.name);})
}
}
songsF([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite']);
    
    // DownTown
    // Kiss
    // Smooth Criminal

    songsF([4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater']);	
    
    // Andalouse
   songsF([2,'like_Replay_3:15','ban_Photoshop_3:48','all']);
    
    // Replay
    // Photoshop
    
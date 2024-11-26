function solve(words,templates){
    words = words.split(', ');
    
    for ( let w of words ) {
        templates = templates.replace( '*'.repeat(w.length), w );
    }

    console.log(templates);
}
solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning','softuni is ***** place for ******** new programming languages');
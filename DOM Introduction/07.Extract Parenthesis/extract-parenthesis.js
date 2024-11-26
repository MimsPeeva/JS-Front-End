function extract(content) {
    const text = document.querySelector('#'+content).textContent.trim();

    const pattern = /\(([^()]+)\)/g;

    const output =  [...text.matchAll(pattern)].map(el=>el[1]).join('; ');
    return output;
    console.log(output);
}
function attachEvents() {
   const url='http://localhost:3030/jsonstore/messenger';
   const messagesEl = document.querySelector('#messages');
   const inputs = document.querySelectorAll('#controls input[name]');
   const sendButton =  document.querySelector('#submit');
   const refreshButton =  document.querySelector('#refresh');

 sendButton.addEventListener('click', (e) => {

    const [ author, content ] = [...inputs].map(field => field.value);

    if ( ! author || ! content ) return;

    const body = { author, content }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(result => {
            refreshButton.click();
        })
        .catch(error => console.error('Error: ', error));
inputs.textContent='';
});

refreshButton.addEventListener('click',()=>{
    messagesEl.textContent='';
    fetch(url)
                .then(res=>res.json())
                .then((messages)=>{
                Object.values(messages).forEach(message=>{
                    messagesEl.textContent+=`${message.author}: ${message.content}\n`;
                })
                        
                    })
                    
                 .catch(error => console.error('Error: ', error));
});
refreshButton.click();
}


attachEvents();







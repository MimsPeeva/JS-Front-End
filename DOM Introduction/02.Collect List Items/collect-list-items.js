function extractText() {
   const listItems = document.querySelectorAll('ul li');

   const textAreaElement = document.querySelector('#result');

   textAreaElement.value = [...listItems].map(el=>el.textContent.trim()).join('\n');
}
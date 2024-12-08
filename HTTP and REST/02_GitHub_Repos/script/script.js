function loadRepos(){
    const url="https://api.github.com/users/testnakov/repos";
    const divResult = document.getElementById('res');

    fetch(url)
    .then((response) => response.text())
    .then(data => {
        divResult.textContent = data
    })
    .catch((error) => console.log(error));
}
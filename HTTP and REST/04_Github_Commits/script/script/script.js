function loadCommits(){
 const usernameEl = document.querySelector('#username').value;
 const repoEl = document.querySelector('#repo').value;
 const commitsListEl = document.querySelector('#commits');
 const url = `https://api.github.com/repos/${usernameEl}/${repoEl}/commits`;

 fetch(url)
 .then((responce) => responce.json())
.then((data) => {
data.forEach(commit => {
    const newLiEl = document.createElement('li');
    newLiEl.textContent = `${commit.commit.author.name}:${commit.commit.message}`;
    commitsListEl.appendChild(newLiEl);
});
 })
 .catch((error) => {
    const li = document.createElement("li");
     li.textContent = `Error: ${error.message}`;
     commitsListEl.appendChild(li);
     })




}
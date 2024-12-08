// function attachEvents() {

//     const postsEl = document.querySelector('#posts');
//     const postTitleEl = document.querySelector('#post-title');
//     const postBodyEl =document.querySelector('#post-body');
//     const postCommentsEl = document.querySelector('#post-comments');

//     const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
//     const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";


//     document.querySelector('#btnLoadPosts').addEventListener('click', loadHandler);
//     document.querySelector('#btnViewPost').addEventListener('click', viewHandler);

//     function loadHandler(e){
//         postsEl.innerHTML = '';
//            btnLoadPosts.addEventListener('click', () =>{
//             fetch(postsUrl)
//             .then(res => res.json())
//             .then((posts) => {
//        Object.values(posts).forEach(post => {
            
          
        
//             const newOptionEL = document.createElement('option');
//             Object.assign(newOptionEL.dataset, post);
//             newOptionEL.textContent=post.title;

//             postsEl.append(newOptionEL);
//         }
//   );
//             })
//             .catch(error => console.error('Error: ', error));
//            })
//     }

//     function viewHandler(e){
//         btnViewPost.addEventListener('click', ()=>{
//             fetch(commentsUrl)
//             .then(res=>res.json())
//             .then((comments)=>{
//                 const optionEl = document.querySelector('option:checked');
//                  postTitleEl.textContent= optionEl.dataset.title.toUpperCase();
//                 postBodyEl.textContent=optionEl.dataset.body;

//                 Object.values(comments).forEach(comment=>{
//                     if(comment.postId===optionEl.dataset.id){
//                         const commentEl = document.createElement('li');
//                         commentEl.textContent=comment.text;
//                         postCommentsEl.appendChild(commentEl);
//                     }
//                 })
//                 .catch(error => console.error('Error: ', error));
//             })
//         })
//     }

// }

// attachEvents();


function attachEvents() {
    let postElement = document.getElementById('posts');
    const loadBtnElement = document.getElementById('btnLoadPosts');
    const viewBtnElement = document.getElementById('btnViewPost');
    const postBody = document.getElementById('post-body');
    const postTitle = document.getElementById('post-title');
    const postComments = document.getElementById('post-comments');

    loadBtnElement.addEventListener('click', loadPosts)
    viewBtnElement.addEventListener('click', viewComments)

    let getPosts = {};

    function loadPosts() {
        fetch(`http://localhost:3030/jsonstore/blog/posts`).then(response => response.json())
            .then(data => {
                postElement.innerHTML = ''
                for (let objKey in data) {
                    let value = data[objKey]["id"];
                    let body = data[objKey]["body"];
                    let title = data[objKey]['title'];
                    if (!(value in getPosts)) {
                        getPosts[value] = body
                    }

                    let newValue = document.createElement('option');
                    newValue.value = value;
                    newValue.textContent = title;

                    postElement.appendChild(newValue);
                }

            })

    }

    function viewComments() {
        fetch('http://localhost:3030/jsonstore/blog/comments').then(response => response.json())
            .then(data => {
                postComments.innerHTML = ''
                let commentKey = postElement.value;
                let commentText = postElement.options[postElement.selectedIndex].text;
                postTitle.textContent = commentText;
                for (let i in data) {
                    if (data[i]['postId'] === commentKey) {
                        let newLiComment = document.createElement('li')
                        newLiComment.setAttribute('id', data[i]['id'])
                        newLiComment.textContent = data[i]['text']
                        postComments.appendChild(newLiComment)
                        postBody.textContent = getPosts[commentKey]

                    }

                }
            })
    }


}

attachEvents();
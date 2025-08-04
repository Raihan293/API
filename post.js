const handleloadpost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            showData(data);
        })
}


const showData = (posts) => {
    const postsContainer = document.getElementById('postscontainer');
    for (post of posts){
        const div = document.createElement('div');
        classList.add('post');
        div.innerHTML = `
        <h1>${post.id}</h1>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postsContainer.appendChild(div);
    }

}

handleloadpost()
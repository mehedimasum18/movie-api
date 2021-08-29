fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))

const setPosts = (posts) => {
    const postContainer = document.getElementById('post_container')
    for (const post of posts) {
        const postDiv = document.createElement("div")
        postDiv.innerHTML = `
        <div class="post p-5 bg-light border border-primary border-3 m-3">
            <h3> title: ${post.title} </h3>
            <p> description: ${post.body}</p>
            <p> Post No: ${post.id}</p>
        </div>
      `
    postContainer.appendChild(postDiv)
    }
    }
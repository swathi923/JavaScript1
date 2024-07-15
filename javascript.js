
const BloggingPlatform = (function() {
    
    const apiUrl = 'https://jsonplaceholder.typicode.com';

    
    async function fetchPosts() {
        try {
            const response = await fetch(`${apiUrl}/posts`);
            if (!response.ok) {
                throw new Error('Failed to fetch blog posts');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async function fetchTodos() {
        try {
            const response = await fetch(`${apiUrl}/todos`);
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    function displayPosts(posts) {
        const postList = document.getElementById('postList');
        postList.innerHTML = ''; // Clear previous content
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            postList.appendChild(li);
        });
    }

    function displayTodos(todos) {
        const todoList = document.getElementById('todoList');
        todoList.innerHTML = ''; // Clear previous content
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.title;
            todoList.appendChild(li);
        });
    }

    function displayError(message, elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    async function init() {
        try {
            const posts = await fetchPosts();
            displayPosts(posts);
        } catch (error) {
            displayError(error.message, 'postError');
        }

        try {
            const todos = await fetchTodos();
            displayTodos(todos);
        } catch (error) {
            displayError(error.message, 'todoError');
        }
    }


    return {
        init: init
    };
})();


document.addEventListener('DOMContentLoaded', () => {
    BloggingPlatform.init();
});
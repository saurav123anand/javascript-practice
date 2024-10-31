function main() {
    class User {
        // Private properties
        #name;
        #email;
        #password;
        #posts;

        constructor(name, email, password) {
            this.#name = name;
            this.#email = email;
            this.#password = password;
            this.#posts = [];
        }

        // Getters and Setters
        get name() {
            return this.#name;
        }

        set name(value) {
            this.#name = value;
        }

        get email() {
            return this.#email;
        }

        set email(value) {
            this.#email = value;
        }

        get password() {
            return this.#password;
        }

        set password(value) {
            this.#password = value;
        }

        addPost(post) {
            this.#posts.push(post);
        }

        deletePost(post) {
            this.#posts = this.#posts.filter(p => p !== post);
        }

        displayPosts() {
            console.log(`Posts by ${this.#name}:`);
            this.#posts.forEach(post => {
                console.log(`- ${post.title}`);
            });
        }
    }

    class Post extends User {
        // Private properties
        #title;
        #content;
        #date;
        #likeCount;

        constructor(name, email, password, title, content, date) {
            super(name, email, password);
            this.#title = title;
            this.#content = content;
            this.#date = date;
            this.#likeCount = 0;
        }

        // Getters and Setters
        get title() {
            return this.#title;
        }

        set title(value) {
            this.#title = value;
        }

        get content() {
            return this.#content;
        }

        set content(value) {
            this.#content = value;
        }

        get date() {
            return this.#date;
        }

        set date(value) {
            this.#date = value;
        }

        get likeCount() {
            return this.#likeCount;
        }

        addLike() {
            this.#likeCount++;
        }

        displayDetails() {
            console.log(`Owner: ${this.name}`);
            console.log(`Title: ${this.title}`);
            console.log(`Content: ${this.content}`);
            console.log(`Date: ${this.date}`);
            console.log(`Likes: ${this.likeCount}`);
        }
    }

    // Example usage
    const user1 = new User("John", "john@example.com", "password123");
    const post1 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
    );
    const post2 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
    );
    
    user1.addPost(post1);
    user1.addPost(post2);
    
    post1.addLike();
    post1.addLike();
    
    user1.displayPosts();
    // Output:
    // Posts by John:
    // - My first post
    // - My second post
    
    post1.displayDetails();
    // Output:
    // Owner: John
    // Title: My first post
    // Content: Lorem ipsum dolor sit amet
    // Date: 2021-01-01
    // Likes: 2

    return { User, Post };
}

main();

import axios from 'axios';

const getData =  async  (id) => {
    const user = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+id)
   
    const users=user.data
    const posts=post.data
    users.posts=posts;
    console.log(users)
};

export default getData
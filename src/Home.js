import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        /*get request, cant use async on this statement, but could use on whole function*/
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json(); /*passes json into a js object*/
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch((e) => {
                    console.log(e.message);
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {/*example(s) of a prop*/}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Arjuns blogs!" />}
        </div>
    );
}
 
export default Home;
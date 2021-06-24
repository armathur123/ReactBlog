import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*get request, cant use async on this statement, but could use on whole function*/
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource!');
                    }
                    return res.json(); /*passes json into a js object*/
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((e) => {
                    setIsPending(false);
                    setError(e.message);
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {/*example(s) of a prop and conditional statement*/}
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Arjuns blogs!" />}
        </div>
    );
}
 
export default Home;
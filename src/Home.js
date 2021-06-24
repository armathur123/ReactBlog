import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        /*get request, cant use async on this statement, but could use on whole function*/
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json(); /*passes json into a js object*/
            })
            .then((data) => {
                setBlogs(data);
            });
    }, [])

    return (
        <div className="home">
            {/*example(s) of a prop*/}
            {blogs && <BlogList blogs={blogs} title="Arjuns blogs!" />}
        </div>
    );
}
 
export default Home;
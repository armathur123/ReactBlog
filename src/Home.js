import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    /*call data blogs in this context*/
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


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
import { useState } from "react";
import { useEffect } from "react";

/*custom hooks must start with use*/
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        /*get request, cant use async on this statement, but could use on whole function*/
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource!');
                    }
                    return res.json(); /*passes json into a js object*/
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((e) => {
                    setIsPending(false);
                    setError(e.message);
                })
        }, 1000)
    }, [url])

    return {data, isPending, error};
}

export default useFetch;
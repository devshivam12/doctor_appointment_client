import { useEffect, useState } from 'react';
import { token } from '../config';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!token){
            setLoading(false)
        }
    })

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(url, {
                headers: {
                    'content-type': "application/json",
                    Authorization: `Bearer ${token}`
                }
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message);
            }

            setData(result.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };


    useEffect(() => {

        fetchData();
    }, [url]);

    return { data, error, loading, fetchData };
};

export default useFetchData;

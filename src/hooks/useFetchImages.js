import { useState, useEffect } from 'react'

export const useFetchImages = () => {
    const [images, setImages] = useState([]);
    const [searchPattern, setSearchPattern] = useState("");
    const [loading, setLoading] = useState(true);

    const request = async (searchTerm = '') => {

        const unsplushAccessKey = "m1Z1hqrTIESxjvUnTSTc5_zFErqPle1mS9NiLUDE_cQ";
        const unsplushRoot = "https://api.unsplash.com/";
        let unsplushEndpoint = `${unsplushRoot}photos/?client_id=${unsplushAccessKey}`;

        if (searchTerm !== '') {
            unsplushEndpoint =
                `${unsplushRoot}search/photos/?query=${encodeURI(searchTerm)}&client_id=${unsplushAccessKey}`;
        }

        setLoading(true);

        const response = await fetch(unsplushEndpoint);
        const data = await response.json();

        if (data.results) {
            setImages(data.results);
        } else {
            setImages(data);
        }

        setLoading(false);
    }

    useEffect(() => {
        request(searchPattern)
    }, [searchPattern]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchPattern(e.target[0].value);
    }

    return [images, loading, handleSubmit];
}

import { useState, useEffect } from "react";

 function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json().then(json => ({ json, status: res.status })))
            .then(({ json, status }) => {
                setData(json);
                setStatus(status);

                const logEntry = {
                    url,
                    requestBody: options.body ? JSON.parse(options.body) : null,
                    status,
                    timestamp: new Date().toISOString()
                };
                const existingLogs = JSON.parse(localStorage.getItem("apiLogs")) || [];
                localStorage.setItem("apiLogs", JSON.stringify([logEntry, ...existingLogs]));
            })
            .catch(err => setError(err));
    }, []);

    return { data, status, error };
}

function myFetch(url) {
    return fetch(url, {})
                .then( (res) => res.json() );
}

export default myFetch;
export function createFetch(url){

    function handleError(response){

        if(!response.ok) throw Error(`ERROR ${response.status}: ${response.statusText}`)

        return response
    }

    return fetch(url)
        .then(response => handleError(response))
        .then(data => data.json())
}
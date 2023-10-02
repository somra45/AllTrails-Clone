export async function csrfFetch(url, options) {
    options = options || {};
    options.method ||= 'GET';
    options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        if (!(options.body instanceof FormData)) {
            options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
        }
        options.headers['Accept'] = 'application/json'
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
    }

    const response = await fetch(url, options);
    if (response.status >= 400) throw response; 
    return response
};

// TODO: this will be used in reducers and anywhere else I am making fetch
// requests to the backend or anywhere else, so it will automatically
// add the csrf token to any request that is not a get request
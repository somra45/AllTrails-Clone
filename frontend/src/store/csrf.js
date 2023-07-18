export async function restoreSession() {
    const response = await fetch('/api/session')
    const token = response.headers.get('X-CSRF-Token')

    sessionStorage.setItem('X-CSRF-Token', token)

    const data = await response.json();

    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
}

export async function csrfFetch(url, options) {
    options.method ||= 'GET';
    options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['Accept'] = 'application/json'
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
    }

    const response = await fetch(url, options);
    return response
};

// TODO: this will be used in reducers and anywhere else I am making fetch
// requests to the backend or anywhere else, so it will automatically
// add the csrf token to any request that is not a get request
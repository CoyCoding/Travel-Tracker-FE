const authHeaders = {
    headers: {
        "access-token" : `${localStorage.getItem('access-token')}`,
    }
}

export default authHeaders;
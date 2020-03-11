const authHeaders = {
    headers: {
        "Content-Type" : "application/json",
        "access-token" : `${localStorage.getItem('access-token')}`,
    }
}

export default authHeaders;
export const authHeaders = {
    headers: {
        "access-token" : `bearer ${localStorage.getItem('access-token')}`,
    }
}

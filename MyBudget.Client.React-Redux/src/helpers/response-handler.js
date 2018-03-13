export default dataKey => (response) => {
    if (response.status === 200 || response.status === 201) {
        return Promise.resolve(dataKey ? response.data[dataKey] : response.data);
    }
    return Promise.reject(response.statusText);
};

// Function to retrieve access token from localStorage
const getTokenFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).accessToken : null;
};

// Axios configuration object with authorization headers
const config = {
    headers: {
        Authorization: getTokenFromLocalStorage() ? `Bearer ${getTokenFromLocalStorage()}` : null,
        Accept: "application/json", // Specify accepted response type
    },
};

export { config };
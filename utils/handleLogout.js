
export const handleLogout = () => {
    localStorage.clear();
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setTimeout(() => {
        window.location.replace("/login");
    }, 1000);
};

export const transformDate = (data) => {
    const date = data.toISOString();
    const YYYYMMDD = date.slice(0, 10).replace(/-/g, '/');
    const hour = date.substring(12, 16);
    return `${YYYYMMDD} - ${hour} ${hour >= '12' ? 'PM' : 'AM'}`;
};

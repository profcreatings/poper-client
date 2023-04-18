export const getStrapiError = (err) => {
    if (!err.response) {
        return;
    }

    const { data, status, statusText } = err.response;
    const message =
        data.error?.message || data.message[0]?.messages[0]?.message;

    return {
        status,
        statusText,
        message: message.toLowerCase(),
    };
};

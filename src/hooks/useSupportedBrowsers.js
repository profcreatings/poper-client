export const useSupportedBrowsers = () => {
    if (!CSS.supports || !CSS.supports('display: grid')) {
        throw new Error('not supported');
    }
};

export const loadScript = (src) =>
    new Promise((resolve, reject) => {
        const script = document.createElement('script');

        document.head.append(script);

        script.onload = resolve;
        script.onerror = reject;
        script.src = src;
    });

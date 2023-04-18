export const copyText = (text) => {
    if (!navigator.clipboard) {
        const input = document.createElement('input');

        input.style.position = 'absolute';
        input.style.opacity = '0';
        document.body.prepend(input);

        input.value = text;
        input.focus();
        input.select();
        document.execCommand('copy');
        input.remove();
    } else {
        navigator.clipboard.writeText(text);
    }
};

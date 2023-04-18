const getQuery = (feature, breakpoint) =>
    `@media screen and (${feature}: ${breakpoint}px)`;

// Media query
export const MQ = {
    maxWidth: {
        640: getQuery('max-width', 640),
        900: getQuery('max-width', 900),
        1100: getQuery('max-width', 1100),
        1300: getQuery('max-width', 1300),
        1600: getQuery('max-width', 1600),
        1750: getQuery('max-width', 1750),
    },
    minWidth: {
        640: getQuery('min-width', 640),
        900: getQuery('min-width', 900),
        1100: getQuery('min-width', 1100),
        1300: getQuery('min-width', 1300),
    },
    maxHeight: {
        500: getQuery('max-height', 500),
    },
};

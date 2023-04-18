import styled from '@emotion/styled';

export const White = styled.span`
    color: var(--white);

    a {
        display: inline;
    }
`;

export const QR = styled.div`
    width: 144px;
    margin: 10px auto;

    display: flex;
    overflow: hidden;

    svg {
        width: 100%;
    }
`;

export const PreloaderWrapper = styled.div`
    margin: 30px 0;
`;

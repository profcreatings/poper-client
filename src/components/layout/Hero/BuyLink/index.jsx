import { BarcodeIcon } from '../../../ui-kit/Icons/index.jsx';
import { ROUTES } from '../../../../constants/router.js';
import { useUserQuery } from '../../../../queries/user/useUserQuery.js';
import { LOCAL_STORAGE_KEYS } from '../../../../constants/storage.js';
import { SPECIAL_PRICE } from '../../../../constants/special.js';
import {
    Barcode,
    CodeNumber,
    Inner,
    Price,
    Text,
    StyledLink,
    BigWord,
    MidWord,
} from './styles.js';

export function BuyLink() {
    const { data: user, isFetching, isLoading, isError } = useUserQuery();
    const isUnauthorized = isLoading && !isFetching;

    const to =
        isUnauthorized || isError ? `${ROUTES.registration}?buy` : ROUTES.buy;

    const isSubscribed =
        localStorage.getItem(LOCAL_STORAGE_KEYS.subscribed) || user?.subscribed;

    return (
        <StyledLink
            to={isFetching ? '' : to}
            subscribed={String(user?.subscribed || '')}
        >
            <Inner>
                <Text>
                    {isSubscribed ? (
                        <>
                            <b>
                                <MidWord>ПРОСМОТР</MidWord>
                                <BigWord>КУПЛЕН</BigWord>
                            </b>
                        </>
                    ) : (
                        <>
                            <b>
                                <BigWord>КУПИТЬ</BigWord>
                                <MidWord>ПРОСМОТР</MidWord>
                            </b>
                            <Price>{SPECIAL_PRICE} ₽</Price>
                        </>
                    )}
                </Text>
                <Barcode>
                    <BarcodeIcon />
                    <CodeNumber>420 319</CodeNumber>
                </Barcode>
            </Inner>
        </StyledLink>
    );
}

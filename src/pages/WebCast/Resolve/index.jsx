import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { Html5Qrcode } from 'html5-qrcode';
import { useToggle } from 'react-use';
import toast from 'react-hot-toast';

import { Center } from '../../../components/layout/Center';
import { Input } from '../../../components/ui-kit/Input';
import { useWebcastResolveMutation } from '../../../queries/webcast/useWebcastResolveMutation.js';
import { Button } from '../../../components/ui-kit/Button/index.jsx';
import { Field } from '../../../components/form/Field';
import { FormError, useSetFormError } from '../../../components/form/FormError';
import { ERROR_MESSAGES } from '../../../constants/errors.js';
import { TextLink } from '../../../components/ui-kit/TextLink';
import { ROUTES } from '../../../constants/router.js';
import { SPECIAL_ID } from '../../../constants/special.js';
import { Scanner, ScannerBackButton, Text, White, Wrapper } from './styles.js';

export function WebCastResolvePage() {
    const form = useForm({ defaultValues: { code: '' } });
    const { control } = form;
    const setFormError = useSetFormError(form);
    const code = useWatch({ name: 'code', control });
    const [searchParams] = useSearchParams();
    const { mutate: resolve, isLoading } = useWebcastResolveMutation({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    function handleSuccess() {
        toast('устройство подключено');
    }

    function handleError(err) {
        setTimeout(() => setFormError(''), 2000);

        if (err.message.includes('not found')) {
            return setFormError('неверный код');
        }

        setFormError(ERROR_MESSAGES[500]);
    }

    useEffect(() => {
        if (code.length === 6) {
            resolve({
                code,
                time: searchParams.get('time'),
            });
        }
    }, [code, resolve, searchParams]);

    /* Scanner */
    const [isScannerOpen, toggleIsScannerOpen] = useToggle(false);

    useEffect(() => {
        if (isScannerOpen) {
            const scanner = new Html5Qrcode('scanner');

            scanner.start(
                { facingMode: 'environment' },
                {
                    fps: 25,
                    qrbox: { width: 250, height: 250 },
                },
                (url) => {
                    const searchParams = new URL(url).searchParams;

                    resolve({
                        code: searchParams.get('code'),
                        time: searchParams.get('time'),
                    });
                },
            );

            return async () => {
                await scanner.stop();
                scanner.clear();
            };
        }
    }, [isScannerOpen, resolve]);

    /* Back */
    const backLink = `${
        ROUTES.standup
    }/${SPECIAL_ID}?play=true&time=${searchParams.get('time')}`;

    return (
        <FormProvider {...form}>
            <Center>
                <Wrapper>
                    <h2>смотреть на другом&nbsp;устройстве</h2>
                    <Text>
                        открой ссылку
                        <White>danilapoperechnyi.com/qr</White> в браузере на
                        другом устройстве.
                    </Text>
                    <Text>введи код или отсканируй QR-код:</Text>
                    <Field as={Input} name="code" maxLength="6" />
                    <Button
                        view="red"
                        loading={isLoading}
                        onClick={toggleIsScannerOpen}
                    >
                        сканировать код
                    </Button>
                    <FormError />
                    <TextLink underline to={backLink}>
                        назад
                    </TextLink>
                </Wrapper>
            </Center>
            <Scanner opened={isScannerOpen}>
                <div id="scanner" />
                <ScannerBackButton view="red" onClick={toggleIsScannerOpen}>
                    назад
                </ScannerBackButton>
            </Scanner>
        </FormProvider>
    );
}

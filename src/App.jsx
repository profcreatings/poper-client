import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import 'shaka-player/dist/controls.css'; // dunno why but it should be imported before the player

import { useUserQuery } from './queries/user/useUserQuery.js';
import { ROUTES, ROUTES_PARAMS } from './constants/router.js';
import { Layout } from './components/layout/Layout/index.jsx';
import { UnauthorizedContent } from './components/auth/UnathorizedContent/index.jsx';
import { AuthorizedContent } from './components/auth/AuthorizedContent/index.jsx';
import { sendMetrika } from './utils/analytics.js';

import { AuthPage } from './pages/Auth/index.jsx';
import { MainPage } from './pages/Main/index.jsx';
import { UserPage } from './pages/User/index.jsx';
import { PaymentFailPage } from './pages/PaymentFail/index.jsx';
import { StandupPage } from './pages/Standup/index.jsx';
import { BuyPage } from './pages/Buy/index.jsx';
import { RegistrationPage } from './pages/Auth/Registration';
import { ConfirmationPage } from './pages/Auth/Confirmation/index.jsx';
import { LoginPage } from './pages/Auth/Login/index.jsx';
import { ForgotPasswordPage } from './pages/Auth/ForgotPassword/index.jsx';
import { ResetPasswordPage } from './pages/Auth/ResetPassword/index.jsx';
import { FAQPage } from './pages/FAQ';
import { ChangePasswordPage } from './pages/User/ChangePassword';
import { ProfilePage } from './pages/User/Profile/index.jsx';
import { PaymentSuccessPage } from './pages/PaymentSuccess/index.jsx';
import { useRouterScrollTop } from './hooks/useRouterScrollTop.js';
import { SupportPage } from './pages/Support';
import { useVHVariable } from './hooks/useVHVariable.js';
import { usePersistSubscription } from './hooks/usePersistSubscription.js';
import { useSupportedBrowsers } from './hooks/useSupportedBrowsers.js';
import { WebCastRequestPage } from './pages/WebCast/index.jsx';
import { WebCastResolvePage } from './pages/WebCast/Resolve/index.jsx';

export function App() {
    useUserQuery();
    usePersistSubscription();
    useSupportedBrowsers();
    useRouterScrollTop();
    useVHVariable();

    const location = useLocation();

    useEffect(() => {
        // https://yandex.ru/support/metrica/code/counter-spa-setup.html
        // TODO: check referer
        sendMetrika('hit', window.location.href);
    }, [location]);

    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path={`${ROUTES.standup}/:${ROUTES_PARAMS.id}`}
                        element={<StandupPage />}
                    />
                    <Route path={ROUTES.faq} element={<FAQPage />} />
                    <Route path={ROUTES.support} element={<SupportPage />} />
                    <Route
                        path={ROUTES.webCastRequest}
                        element={<WebCastRequestPage />}
                    />
                    <Route
                        path={ROUTES.webCastResolve}
                        element={<WebCastResolvePage />}
                    />

                    <Route element={<AuthorizedContent />}>
                        <Route path={ROUTES.buy} element={<BuyPage />} />
                        <Route
                            path={ROUTES.paymentSuccess}
                            element={<PaymentSuccessPage />}
                        />
                        <Route
                            path={ROUTES.paymentFail}
                            element={<PaymentFailPage />}
                        />

                        <Route element={<UserPage />}>
                            <Route
                                path={ROUTES.profile}
                                element={<ProfilePage />}
                            />
                            <Route
                                path={ROUTES.changePassword}
                                element={<ChangePasswordPage />}
                            />
                        </Route>
                    </Route>

                    <Route element={<UnauthorizedContent />}>
                        <Route element={<AuthPage />}>
                            <Route
                                path={ROUTES.registration}
                                element={<RegistrationPage />}
                            />
                            <Route
                                path={ROUTES.login}
                                element={<LoginPage />}
                            />
                            <Route
                                path={ROUTES.confirmation}
                                element={<ConfirmationPage />}
                            />
                            <Route
                                path={ROUTES.forgotPassword}
                                element={<ForgotPasswordPage />}
                            />
                            <Route
                                path={ROUTES.resetPassword}
                                element={<ResetPasswordPage />}
                            />
                        </Route>
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

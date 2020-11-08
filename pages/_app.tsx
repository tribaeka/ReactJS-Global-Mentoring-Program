import type { AppProps } from 'next/app'
import withReduxSaga from 'next-redux-saga';
import wrapper from "@store/index";
import React from "react";
import '../scss/colors.global.scss';
import '../scss/vars.global.scss';
import '../scss/mixins.global.scss';
import '../scss/styles.global.scss';
import Popups from "@components/popups/Popups";

const App: React.FC<AppProps> = (
    {
        Component,
        pageProps
    }) => {
    return (<Component {...pageProps}/>);
};

export default wrapper.withRedux(withReduxSaga(App));

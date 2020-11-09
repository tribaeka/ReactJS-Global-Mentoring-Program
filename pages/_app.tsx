import type { AppProps } from 'next/app'
import withReduxSaga from 'next-redux-saga';
import wrapper from "@store/index";
import React from "react";
import '../scss/index.scss';

const App: React.FC<AppProps> = (
    {
        Component,
        pageProps
    }) => {
    return (<Component {...pageProps}/>);
};

export default wrapper.withRedux(withReduxSaga(App));

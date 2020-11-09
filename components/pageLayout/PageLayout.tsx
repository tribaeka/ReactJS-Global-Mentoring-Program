import React from "react";
import Head from "next/head";

interface PageLayoutProps {
    title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next,javascript,nextjs,react" />
                <meta name="description" content="this is youtube tutorial for next" />
                <meta charSet="utf-8" />
            </Head>
            {children}
        </>
    );
}

export default PageLayout;

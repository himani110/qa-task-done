import React from 'react';
import { useEffect, useState } from "react";
import useFetch from 'use-http';
import { ErrorMessage } from './errorMessage';
import { Loading } from './loading';

interface ContentResponse {
    title: string
}

interface LayoutProps {
    pageId: string
}
export const Layout: React.FC<LayoutProps> = props => {
    const { pageId, children } = props;
    const { get, loading, error } = useFetch('/api/');
    const [content, setContent] = useState<ContentResponse | undefined>();

    useEffect(() => {
        async function loadContent(pageId: string) {
            const content: ContentResponse = await get(`content/${pageId}`);
            setContent(content)
        }

        loadContent(pageId);
    }, [pageId, get]);

    return (
        <div className="main">
            <div className="side-menu">
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="factorial">Factorial</a></li>
                    <li><a href="fibonacci">Fibonacci</a></li>
                    <li><a href="random-square">Random Square</a></li>
                </ul>
            </div>
            <div className="body">
                <div className="header">
                    <h1>
                        {loading
                            ? <Loading>Loading...</Loading>
                            : error
                                ? <ErrorMessage>Error: Failed to get page content</ErrorMessage>
                                : content?.title}
                    </h1>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
};
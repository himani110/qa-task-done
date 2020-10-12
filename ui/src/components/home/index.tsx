import React from 'react';
import { Layout } from '../shared/layout';

export const Home = () => {
    return (
        <Layout pageId="home">
            <h2>
                Welcome to the automated QA specialist code task!
            </h2>
            <p>
                Please read <i>readme.md</i> at the root folder
            </p>
        </Layout>
    );
};
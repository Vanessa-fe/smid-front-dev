// lib/apolloClient.js
import {ApolloClient, InMemoryCache, HttpLink} from '@apollo/client';
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";

export const {getClient} = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: process.env.WORDPRESS_API_URL, // Remplacez par votre endpoint GraphQL
        }),
    });
});
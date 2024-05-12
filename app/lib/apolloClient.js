import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: process.env.WORDPRESS_API_URL, // Assurez-vous que cette variable d'environnement est correctement définie
    }),
});
console.log("apolloClient.js l-21 => GraphQL API URL:", process.env.WORDPRESS_API_URL);
export function getClient() {
    return client;
}
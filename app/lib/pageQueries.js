export default async function getPages() {
    const query = `{
        pages {
            edges {
                node {
                    pageDAccueilBloc1 {
                        titre_bloc1
                        titre_h4_bloc1
                        repeteur_check_green_bloc1 {
                            check_green {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                    slug
                    uri
                    language {
                        code
                        locale
                    }
                }
            }
        }
    }`;

    const response = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        console.error("API Error:", response.status, response.statusText);
        throw new Error(`Failed to fetch API: ${response.status} ${response.statusText}`);
    }

    const jsonResponse = await response.json();
    console.log("Réponse de l'API:", jsonResponse);  // Debug la réponse

    if (!jsonResponse || !jsonResponse.data || !jsonResponse.data.pages) {
        console.error("Réponse invalide de l'API", jsonResponse);
        return [];  // Retourner un tableau vide si les données ne sont pas comme attendu
    }

    const pages = jsonResponse.data.pages.edges.map(edge => edge.node);
    console.log("Données chargées:", pages);  // Debug les données transformées
    return pages;
}

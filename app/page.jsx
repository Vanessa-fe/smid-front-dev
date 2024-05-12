import {Suspense} from "react";
import Loading from "./loading";
import getPages from "./lib/pageQueries";

// test récupération données
// ---------- GET_PAGE ----------
/*async function getPages() {
    console.log("getPages - Début de la fonction");
    const query = `{
    pages{
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
}`;*/
   /*try {
          console.log("URL appelée:", `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`);

        const res = await fetch(
            `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(
                query
            )}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // ... any other headers you need to include (like authentication tokens)
                },
                cache: "no-store",
            }
        );
        console.log("Content-Type:", res.headers.get("Content-Type"));
        const jsonResponse = await res.json();
        console.log("Réponse JSON complète:", jsonResponse);
        console.log("Réponse brute:", res);
        const {data} = jsonResponse;
        console.log("Données récupérées:", data);
        // Jusqu'ici tout va bien
        return data.pages.edges.node;
    } catch (error) {
          console.error("Erreur lors de la récupération des pages:", error);
    }
}*/

// ---------- GET_PAGE ----------
export default async function PageList() {
    console.log("PageList - Début de la fonction");
    const pages = await getPages();
    console.log("Pages récupérées:", pages);
    return (
        <Suspense fallback={<Loading/>}>
            <div>
                {pages.map((page) => (
                    //console.log("Traitement de la page:", page.uri);
                    <div className="pageDaccueil">
                        <section className="bloc1 bg-amber-200">
                            <h1>
                                {page.pageDAccueilBloc1.titre_bloc1}
                            </h1>
                            <div className="bg-blue-400">
                                {page.pageDAccueilBloc1.repeteur_check_green_bloc1.map((item) => {
                                        try {
                                            //console.log("Check Green Data:", item.check_green);
                                            //   console.log("Contenu de item.check_green:", item.check_green);
                                            return (

                                                <div className="repeteur_check_green_bloc1 bg-green-800 m-5 grid grid-cols-3 gap-2 items-center">
                                                    {/* {Array.isArray(item.check_green) ? item.check_green.map((checkItem) => {
                                                        console.log("URL de l'image:", checkItem.node.mediaItemUrl);
                                                        return (*/}
                                                    <div className="bg-pink-400 content-center" key={item.check_green.node.mediaItemUrl}>
                                                        <img className="" src={item.check_green.node.mediaItemUrl} alt=""/>
                                                    </div>
                                                    {/* );
                                                    }) : null}*/}
                                                    <div className="bg-emerald-500 col-start-2 col-end-4 place-items-center" key={item.titre_h4_bloc1} >
                                                        <h4 className="text-white">{item.titre_h4_bloc1}</h4>
                                                    </div>
                                                </div>
                                            );
                                        } catch (error) {
                                            //  console.error("Erreur lors de la récupération des images:", error);
                                            // console.log("Erreur détaillée:", error.message);
                                        }
                                    },
                                )}
                            </div>
                            <h4>
                                {page.pageDAccueilBloc1.titre_h4_bloc1}
                            </h4>
                        </section>

                        <section className="bloc2">

                        </section>
                    </div>
                ))}
            </div>
        </Suspense>
    )
}
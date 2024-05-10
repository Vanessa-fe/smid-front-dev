import { gql } from '@apollo/client';

export const GET_PAGE = gql`
  query GET_PAGE {
    pages {
      edges {
        node {
          pageDAccueilBloc1 {
            titre_bloc1
            titre_h4_bloc1
          }
        }
      }
    }
  }
`;

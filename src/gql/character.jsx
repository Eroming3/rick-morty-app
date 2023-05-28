import { gql } from "@apollo/client";

const Character__GetCharacters = gql `
  query getCharacters($name: String) {
    characters(filter: {name: $name}) {
      results {
        id
        name
        image
        gender
        status
      }
    }
  }
`
export {
  Character__GetCharacters
}

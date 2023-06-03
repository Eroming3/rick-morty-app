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

const Character__GetCharacterDetails = gql `
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        created
      }
      image
    }
  }
`

export {
  Character__GetCharacters,
  Character__GetCharacterDetails
}

export function FETCH_CREATED_GAME() {
  return `query {
        games(orderBy:id, orderDirection:desc, limit: 1) {
            id
            maxPlayers
            entryFee
            winner
        }
    }`;
}

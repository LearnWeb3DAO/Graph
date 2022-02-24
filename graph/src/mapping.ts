import { BigInt } from "@graphprotocol/graph-ts";
import {
  RandomWinnerGame,
  GameEnded,
  GameStarted,
  OwnershipTransferred,
} from "../generated/RandomWinnerGame/RandomWinnerGame";
// import { ExampleEntity } from "../generated/schema";
import { GameStartedEntity, GameEndedEntity } from "../generated/schema";

export function handleGameEnded(event: GameEnded): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = GameEndedEntity.load(event.transaction.from.toHex());
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new GameEndedEntity(event.transaction.from.toHex());
  }
  // Entity fields can be set based on event parameters
  entity.winner = event.params.winner;
  entity.requestId = event.params.requestId;
  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleGameStarted(event: GameStarted): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = GameStartedEntity.load(event.transaction.from.toHex());
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new GameStartedEntity(event.transaction.from.toHex());
  }
  // Entity fields can be set based on event parameters
  entity.maxPlayers = event.params.maxPlayers;
  entity.entryFee = event.params.entryFee;
  // Entities can be written to the store with `.save()`
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

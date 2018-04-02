interface GameEngineInterface<
    GameTypePlayer extends PlayerInterface,
    GameType extends GameInterface<GameTypePlayer>> {

    getGame():GameInterface<GameTypePlayer>
    evaluateTurn(player:GameTypePlayer);
    run();
}
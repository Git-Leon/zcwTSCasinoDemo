abstract class GameEngine<
    PlayerType extends PlayerInterface,
    GameType extends GameInterface<PlayerType>>
    implements GameEngineInterface<PlayerType, GameType> {

    private game: GameInterface<PlayerType>;
    constructor(game: GameInterface<PlayerType>) {
        this.game = game;
    }

    getGame(): GameInterface<PlayerType> {
        return this.game;
    }

    abstract evaluateTurn(player: PlayerType);

    abstract run();
}
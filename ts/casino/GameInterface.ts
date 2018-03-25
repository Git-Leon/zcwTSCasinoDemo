interface GameInterface<TypeOfPlayer extends PlayerInterface> {
    getPlayers():TypeOfPlayer[];
    getPlayer(playerId:number):TypeOfPlayer;
    addPlayer(player:TypeOfPlayer);
    removePlayer(player:TypeOfPlayer);
    contains(player:TypeOfPlayer):Boolean;
}
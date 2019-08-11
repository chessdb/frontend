export async function get(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify([
        {
            count: 22,
            fen: "rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            frequent_player: {
                firstname: "Magnus",
                lastname: "Carlsen",
                rating: {
                    standard: 2882,
                    rapid: 2895,
                    blitz: 2920,
                },
                image: "magnus_carlsen.jpeg",
            },
        },
        {
            count: 13,
            fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq - 0 1",
            frequent_player: {
                firstname: "Fabiano",
                lastname: "Caruana",
                rating: {
                    standard: 2818,
                    rapid: 2807,
                    blitz: 2772,
                },
                image: "fabiano_caruana.jpeg",
            },
        },
    ]));
}
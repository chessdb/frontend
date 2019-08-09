<script>
    import {
        WHITE_KING_UNICODE_HTML,
        WHITE_QUEEN_UNICODE_HTML,
        WHITE_ROOK_UNICODE_HTML,
        WHITE_BISHOP_UNICODE_HTML,
        WHITE_KNIGHT_UNICODE_HTML,
    } from "lib/chess.js";

    export let moves;

    moves = [
        {
            notation: "Kb1",
            count: 960943,
            frequency: 43,
            results: {
                white: 33,
                black: 25,
                draw: 42,
            },
        },
        {
            notation: "Kb1",
            count: 960943,
            frequency: 43,
            results: {
                white: 33,
                black: 25,
                draw: 42,
            },
        },
        {
            notation: "Bg4",
            count: 762446,
            frequency: 31,
            results: {
                white: 34,
                black: 23,
                draw: 43,
            },
        },
        {
            notation: "Nf3",
            frequency: 22,
            count: 214340,
            results: {
                white: 34,
                black: 23,
                draw: 43,
            },
        },
        {
            notation: "Nxb5",
            frequency: 11,
            count: 104912,
            results: {
                white: 30,
                black: 26,
                draw: 44,
            },
        },
    ];

    function format_move_notation(notation) {
        return notation
            .replace(/K/g, WHITE_KING_UNICODE_HTML)
            .replace(/Q/g, WHITE_KING_UNICODE_HTML)
            .replace(/R/g, WHITE_KING_UNICODE_HTML)
            .replace(/B/g, WHITE_BISHOP_UNICODE_HTML)
            .replace(/N/g, WHITE_KNIGHT_UNICODE_HTML);
    }
</script>

<div class="moves">
    {#each moves as move}
        <div class="move">
            <div class="notation">
                {@html format_move_notation(move.notation)}
            </div>
            <div class="results">
                <div class="black" style="height: {move.results.black}%"></div>
                <div class="draw" style="height: {move.results.draw}%"></div>
                <div class="white" style="height: {move.results.white}%"></div>
            </div>
        </div>
    {/each}
        <!-- {#each moves as move}
            <div class="move">
                <span class="notation">
                    {@html format_move_notation(move.notation)}
                </span>
                <span class="frequency">
                    {move.frequency}%
                </span>
                <div class="result">
                    <div class="white" style="width: {move.results.white}%;"></div>
                    <div class="black" style="width: {move.results.black}%;"></div>
                    <div class="draw" style="width: {move.results.draw}%;"></div>
                </div>
            </div>
        {/each} -->
</div>

<style lang="scss">
    @import "../../scss/vars.scss";

    .moves {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        border-right: 1px solid $viewport-border;

        .move {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 70px;
            height: 35px;
            font-size: 24px;
            background-color: $viewport-light;

            .notation {
                display: flex;
                width: 65px;
            }

            .results {
                display: flex;
                flex-direction: column;
                height: 100%;

                & > * {

                width: 5px;
                }

                .white {
                    background-color: $player-white;
                }

                .black {
                    background-color: $player-black;
                }

                .draw {
                    background-color: $player-none;
                }
            }
        }
    }
</style>
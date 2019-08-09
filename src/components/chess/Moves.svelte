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
        {/each}
</div>

<style lang="scss">
    @import "../../scss/vars.scss";

    .moves {
        font-size: 14px;
        overflow-x: hidden;
        overflow-y: auto;
        border: 1px solid $viewport-border;
        border-left: none;

        .move {
            display: grid;
            grid-template-columns: 1fr 1fr 5fr;
            padding: 5px;
            background-color: $viewport-light;

            &:nth-child(odd) {
                background-color: $viewport-lighter;
            }

            .notation {
                font-family: "Arial";
                font-weight: bold;
            }

            .result {
                display: flex;

                .white {
                    background-color: $player-white;
                }

                .black {
                    background-color: $player-white;
                }

                .draw {
                    background-color: $player-none;
                }
            }
        }
    }
</style>
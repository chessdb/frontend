<script>
    import { onMount } from "svelte";
    import { fen } from "../../lib/chess";
    import WhitePawn from "./pieces/white/Pawn.svelte";
    import WhiteRook from "./pieces/white/Rook.svelte";
    import WhiteKnight from "./pieces/white/Knight.svelte";
    import WhiteBishop from "./pieces/white/Bishop.svelte";
    import WhiteQueen from "./pieces/white/Queen.svelte";
    import WhiteKing from "./pieces/white/King.svelte";
    import BlackPawn from "./pieces/black/Pawn.svelte";
    import BlackRook from "./pieces/black/Rook.svelte";
    import BlackKnight from "./pieces/black/Knight.svelte";
    import BlackBishop from "./pieces/black/Bishop.svelte";
    import BlackQueen from "./pieces/black/Queen.svelte";
    import BlackKing from "./pieces/black/King.svelte";

    export let size = 800;
    export let start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

    const cell_size = 800 * 0.125; // Each cell has 12.5% height and width.
    const pieces = fen.parse(start_fen).reverse();
    const ranks = ["H", "G", "F", "E", "D", "C", "B", "A"].reverse();
    const files = [8, 7, 6, 5, 4, 3, 2, 1];

</script>

<div class="board" style="width: {size}px; height: {size}px;">
    {#each files as file}
        <div class="file" class:odd={file % 2 === 1}>
            {#each ranks as rank}
                <div class="cell">
                    <!-- File/rank notation -->
                    {#if file === 1}
                        <span class="rank-lbl">{rank}</span>
                    {/if}
                    {#if rank === "H"}
                        <span class="file-lbl">{file}</span>
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
</div>

<div class="overlay" style="width: {size}px; height: {size}px; top: -{size}px">
    {#each files as file}
        <div class="file" class:odd={file % 2 === 1}>
            {#each ranks as rank, rank_index}
                <div class="cell">
                    <!-- Show a piece SVG if this cell is not empty -->
                    {#if pieces[rank_index + (file - 1) * 8] !== ""}
                        <div class="piece">
                            <!-- <object
                                style="width: {cell_size}px; height: {cell_size}px"
                                data="/svg/pieces/{pieces[rank_index + (file - 1) * 8]}.svg"
                                type="image/svg+xml"
                                title="Chess piece ({pieces[rank_index + (file - 1) * 8]})"
                            > -->
                                <!-- TODO: Fallback png -->
                            <!-- </object> -->
                            {#if pieces[rank_index + (file - 1) * 8] === "P"}
                                <WhitePawn size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "R"}
                                <WhiteRook size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "B"}
                                <WhiteBishop size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "N"}
                                <WhiteKnight size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "Q"}
                                <WhiteQueen size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "K"}
                                <WhiteKing size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "p"}
                                <BlackPawn size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "r"}
                                <BlackRook size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "b"}
                                <BlackBishop size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "n"}
                                <BlackKnight size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "q"}
                                <BlackQueen size={cell_size}/>
                            {/if}
                            {#if pieces[rank_index + (file - 1) * 8] === "k"}
                                <BlackKing size={cell_size}/>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    @import "../../scss/vars";

    .board {
        display: grid;
        grid-template-rows: repeat(8, 12.5%);

        .file {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 12.5%);


            &.odd {
                .cell:nth-child(odd) {
                    background-color: $board_cell_black;
                    color: $board_cell_white;
                }

                .cell:nth-child(even) {
                    background-color: $board_cell_white;
                    color: $board_cell_black;
                }
            }

            &:not(.odd) {
                .cell:nth-child(odd) {
                    background-color: $board_cell_white;
                    color: $board_cell_black;
                }

                .cell:nth-child(even) {
                    background-color: $board_cell_black;
                    color: $board_cell_white;
                }
            }

            .cell {
                display: flex;
                font-size: 12px;
                font-weight: bold;

                .rank-lbl {
                    align-self: flex-end;
                    margin-left: 3px;
                    margin-bottom: 1px;
                }

                .file-lbl {
                    width: 100%;
                    text-align: right;
                    margin-right: 3px;
                    margin-top: 3px;
                }
            }
        }
    }

    .overlay {
        position: relative;
        display: grid;
        grid-template-rows: repeat(8, 12.5%);

        .file {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 12.5%);

            .piece, .piece object {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
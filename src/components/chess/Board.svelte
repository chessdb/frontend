<script>
    import { onMount } from "svelte";
    import { fen } from "lib/chess";
    import WhitePawn from "components/chess/pieces/white/Pawn.svelte";
    import WhiteRook from "components/chess/pieces/white/Rook.svelte";
    import WhiteKnight from "components/chess/pieces/white/Knight.svelte";
    import WhiteBishop from "components/chess/pieces/white/Bishop.svelte";
    import WhiteQueen from "components/chess/pieces/white/Queen.svelte";
    import WhiteKing from "components/chess/pieces/white/King.svelte";
    import BlackPawn from "components/chess/pieces/black/Pawn.svelte";
    import BlackRook from "components/chess/pieces/black/Rook.svelte";
    import BlackKnight from "components/chess/pieces/black/Knight.svelte";
    import BlackBishop from "components/chess/pieces/black/Bishop.svelte";
    import BlackQueen from "components/chess/pieces/black/Queen.svelte";
    import BlackKing from "components/chess/pieces/black/King.svelte";
    import { selected_piece } from "stores";

    export let size = 400;
    export let start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

    const cell_size = size * 0.125; // Each cell has 12.5% height and width.
    const pieces = fen.parse(start_fen).reverse();
    const ranks = ["H", "G", "F", "E", "D", "C", "B", "A"].reverse();
    const files = [8, 7, 6, 5, 4, 3, 2, 1];

    function cell_click(index) {
        if ($selected_piece.index === index) {
            // Unselect the piece.
            selected_piece.set({
                char: "",
                index: -1,
            });
        } else if ($selected_piece.char !== "" && $selected_piece.index !== -1) {
            // Move the selected piece to the selected cell.
            pieces[index] = $selected_piece.char;
            // Clear the previous position of the piece.
            pieces[$selected_piece.index] = "";
            // Unselect the piece.
            selected_piece.set({
                char: "",
                index: -1,
            });
        } else {
            // Mark the clicked piece as selected.
            selected_piece.set({
                char: pieces[index],
                index,
            });
        }
    }

    $: piece_is_selected = $selected_piece.index !== -1;
    $: get_piece_char = (rank, file) => pieces[rank + (file - 1) * 8];
    $: get_piece_index = (rank, file) => rank + (file - 1) * 8;

</script>

<div>
    <div class="board" style="width: {size}px; height: {size}px;">
        {#each files as file}
            <div class="file" class:odd={file % 2 === 1}>
                {#each ranks as rank, rank_index}
                    <div
                        class="cell"
                        class:selected={$selected_piece.index === get_piece_index(rank_index, file)}
                        class:attacked={get_piece_char(rank_index, file) !== "" && piece_is_selected}
                    >
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

    <div class="actions-overlay" style="width: {size}px; height: {size}px; top: -{size}px">
        {#each files as file}
            <div class="file" class:odd={file % 2 === 1}>
                {#each ranks as rank, rank_index}
                    <div class="cell">
                        <!-- Display a moveable indicator for a legal move avaliable on this cell. -->
                        {#if piece_is_selected && get_piece_char(rank_index, file) === ""}
                            <div
                                class="move-indicator"
                                style="width: {cell_size / 3}px; height: {cell_size / 3}px; border-radius: {cell_size / 6}px;"
                            ></div>
                        {/if}
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    <div class="pieces-overlay" style="width: {size}px; height: {size}px; top: -{size * 2}px">
        {#each files as file}
            <div class="file">
                {#each ranks as rank, rank_index}
                    <div class="cell">
                        <!-- Show a piece SVG if this cell is not empty -->
                        {#if pieces[rank_index + (file - 1) * 8] !== ""}
                            <div class="piece">
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

    <div class="clickable-overlay" style="width: {size}px; height: {size}px; top: -{size * 3}px">
            {#each files as file}
                <div class="file">
                    {#each ranks as rank, rank_index}
                        <div class="cell" on:click={() => cell_click(rank_index + (file - 1) * 8)}></div>
                    {/each}
                </div>
            {/each}
    </div>
</div>

<style lang="scss">
    @import "../../scss/vars";

    .board {
        display: grid;
        grid-template-rows: repeat(8, 12.5%);
        border: 1px solid $viewport-border;

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

                &.selected {
                    background-color: $move_color !important;
                }

                &.attacked {
                    border: 2px solid $attacked_color;
                }

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

    .actions-overlay {
        position: relative;
        display: grid;
        grid-template-rows: repeat(8, 12.5%);

        .file {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 12.5%);

            .cell {
                display: flex;
                justify-content: center;
                align-items: center;

                .move-indicator {
                    background-color: $move-color;
                    opacity: 0.4;
                }
            }
        }

    }

    .pieces-overlay {
        position: relative;
        display: grid;
        grid-template-rows: repeat(8, 12.5%);

        .file {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 12.5%);
        }
    }

    .clickable-overlay {
        position: relative;
        display: grid;
        grid-template-rows: repeat(8, 12.5%);
        border: 1px solid $viewport-border;

        .file {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 12.5%);
        }
    }
</style>
<script>
    import { onMount } from "svelte";
    import { fen } from "../lib/chess";

    export const size = "400px";
    export const start_fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

    fen.parse(start_fen);

    const ranks = ["H", "G", "F", "E", "D", "C", "B", "A"].reverse();
    const files = [8, 7, 6, 5, 4, 3, 2, 1];


</script>

<div id="board" class="board" style="width: {size}; height: {size};">
    {#each files as file}
        <div class="file" class:odd={file % 2 === 1}>
            {#each ranks as rank, rank_index}
                <div class="cell">
                    <!-- File/rank notation -->
                    {#if file === 1}
                        <span class="rank-lbl">{rank}</span>
                    {/if}
                    {#if rank === "H"}
                        <span class="file-lbl">{file}</span>
                    {/if}
                    <!-- Applicable piece -->
                    <!-- <object data="/svg/pieces/B.svg" type="image/svg+xml" title="White bishop"></object> -->
                </div>
            {/each}
        </div>
    {/each}
</div>

<div class="overlay" style="width: {size}; height: {size};">

</div>

<style lang="scss">
    @import "../scss/vars";

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
</style>
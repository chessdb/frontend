<script>
    export let moves;

    moves = [
        {
            notation: "e4",
            count: 960943,
            frequency: 43,
            results: {
                white: 33,
                black: 25,
                draw: 42,
            },
        },
        {
            notation: "d4",
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
        }
    ];
</script>

<div class="moves">
        {#each moves as move}
            <div class="move">
                <span class="notation">
                    {move.notation}
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
    .moves {
        font-size: 12px;
        overflow-x: hidden;
        overflow-y: auto;

        .move {
            display: grid;
            grid-template-columns: 1fr 1fr 5fr;
            grid-template-rows: repeat(auto);
            padding: 5px;
            color: white;
            background-color: #302e2c;

            &:nth-child(odd) {
                background-color: #272727;
            }

            .result {
                display: flex;

                .white {
                    background-color: white;
                }

                .black {
                    background-color: black;
                }

                .draw {
                    background-color: gray;
                }
            }
        }
    }
</style>
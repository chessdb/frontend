<script>
    import Board from "components/chess/Board";
    import Moves from "components/chess/Moves";
    import MoveInspector from "components/chess/MoveInspector";

    const size = 400;
</script>

<div class="analysis" style="grid-template-columns: {size}px 20px 300px 300px; grid-template-rows: {size}px;">
    <Board/>
    <div class="estimated-winner">
        <div class="black" style="height: 24%;"></div>
        <div class="draw" style="height: 33%;"></div>
        <div class="white" style="height: 44%;"></div>
        <div class="middle-line"></div>
    </div>
    <Moves/>
    <MoveInspector/>
</div>

<style lang="scss">
    @import "../../scss/vars";

    .analysis {
        display: grid;
        width: auto;

        .estimated-winner {
            display: flex;
            flex-direction: column;

            .white {
                background-color: $player-white;
            }

            .black {
                background-color: $player-black;
            }

            .draw {
                background-color: $player-none;
            }

            .middle-line {
                position: relative;
                top: -50%;
                margin-bottom: -1px;
                height: 2px;
                background-color: $attention;
            }
        }
    }
</style>
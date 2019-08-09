<script>
    import Board from "components/chess/Board";
    import Moves from "components/chess/Moves";

    const size = 400;
</script>

<div class="analysis" style="grid-template-columns: {size}px 300px; grid-template-rows: {size}px;">
    <Board/>
    <Moves/>
</div>

<style lang="scss">
    .analysis {
        display: grid;
        width: auto;
    }
</style>
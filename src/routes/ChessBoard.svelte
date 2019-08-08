<script>
    import { onMount } from "svelte";

    onMount(async () => {
        await import("../lib/ext/chessboard.js");
        Chess("board");
    });
</script>

<div id="board" class="board">

</div>

<style lang="scss">
    .board {
        width: 400px;
    }
</style>
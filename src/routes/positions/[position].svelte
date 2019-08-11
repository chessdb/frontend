<script context="module">
    export async function preload(page) {
        const { position } = page.params;

        return { position };
    }
</script>

<script>
    export let position;

    if (!position) {

    }
</script>

{#if position}
    {position}
{:else}
    no position
{/if}
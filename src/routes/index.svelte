<script context="module">
    import { current_page } from "stores";

    export async function preload(page) {
        current_page.set(page.path);
    }
</script>

<script>
    import AnalysisBoard from "components/chess/AnalysisBoard";
</script>

<AnalysisBoard/>

<style lang="scss">
</style>
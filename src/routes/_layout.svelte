<slot/>

<style lang="scss">
    @import "../scss/typography";
    @import "../scss/vars";

    :global(body) {
        background-color: $viewport-default;
    }

    :global(*){
        font-family: "Roboto", sans-serif;
    }
</style>
<script>
    import { current_page } from "stores";
</script>

<div class="content">
    <nav class="header">
        <a
            href="/"
            rel=prefetch
            class="navitem title"
            class:active={$current_page === "/"}
        >
            ChessDB
        </a>
        <a
            href="/positions"
            rel=prefetch
            class="navitem"
            class:active={$current_page.startsWith("/positions")}
        >
            Position analysis
        </a>
        <a
            href="/openings"
            rel=prefetch
            class="navitem"
            class:active={$current_page.startsWith("/openings")}
        >
            Opening explorer
        </a>
        <a
            href="/top"
            rel=prefetch
            class="navitem"
            class:active={$current_page.startsWith("/top")}
        >
            Top players
        </a>
        <a
            href="/api"
            rel=prefetch
            class="navitem"
            class:active={$current_page.startsWith("/api")}
        >
            API
        </a>
        <div class="filler"></div>
        <a
            href="/settings"
            rel=prefetch
            class="navitem"
            class:active={$current_page.startsWith("/settings")}
        >
            Settings
        </a>
    </nav>

    <div class="body">
        <slot/>
    </div>
</div>

<style lang="scss">
    @import "../scss/typography";
    @import "../scss/vars";

    :global(html, #sapper, body) {
        height: 100%;
    }

    :global(body) {
        background-color: $viewport-default;
        margin: 0;
    }

    :global(*){
        font-family: "Roboto", sans-serif;
    }

    :global(a) {
        color: inherit;
        text-decoration: inherit;
    }

    .content {
        display: flex;
        height: 100%;

        .header {
            display: flex;
            flex-direction: column;
            color: $text-default;
            border-right: 1px solid $viewport-border;

            .filler {
                flex: 1;
            }

            .navitem {
                font-size: 18px;
                cursor: pointer;
                padding: 10px 15px;
                text-transform: uppercase;
                margin-left: 2px;

                &:hover, &.active {
                    color: white;
                    border-left: 2px solid $attention;
                    margin-left: 0px;
                    background-color: $viewport-lighter;
                }

                &.title {
                    font-size: 36px;
                    padding: 20px;
                }

                &.end {
                    justify-self: flex-end;
                }
            }
        }

        .body {
            flex: 1;
            background-color: $viewport-dark;
        }
    }

</style>
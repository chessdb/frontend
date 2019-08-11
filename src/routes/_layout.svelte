<script>
    import { current_page } from "stores";
</script>

<div class="content">
    <nav class="header">
        <span class="title">
            ChessDB
        </span>
        <a
            href="/"
            rel=prefetch
            class="navitem"
            class:active={$current_page === "/"}
        >
            Position analysis
        </a>
        <a
            href="/openings"
            rel=prefetch
            class="navitem"
            class:active={$current_page === "/openings"}
        >
            Opening explorer
        </a>
        <a
            href="/top"
            rel=prefetch
            class="navitem"
            class:active={$current_page === "/top"}
        >
            Top players
        </a>
        <a
            href="/api"
            rel=prefetch
            class="navitem"
            class:active={$current_page === "/api"}
        >
            API
        </a>
    </nav>

    <div class="body">
        <slot/>
    </div>

    <nav class="footer">
        <div class="settings">
            S
        </div>
    </nav>
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
        flex-direction: column;
        height: 100%;

        .header {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 20px;
            color: $text-default;
            border-bottom: 1px solid $viewport-border;

            .title {
                font-size: 36px;
                margin-right: 20px;
            }

            .navitem {
                font-size: 18px;
                cursor: pointer;
                padding: 0 15px;
                text-transform: uppercase;
                margin-left: 2px;

                &:hover, &.active {
                    color: white;
                    border-left: 2px solid $attention;
                    margin-left: 0px;
                }
            }
        }

        .body {
            flex: 1;
        }

        .footer {
            border-top: 1px solid $viewport-border;
            color: $text-default;
            height: 20px;

            .settings {
                float: right;
            }
        }
    }

</style>
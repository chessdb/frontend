<script context="module">
    export async function preload(a, b) {
        console.log(a, b)
    }
</script>


<div class="content">
    <nav class="header">
        <span class="title">
            ChessDB
        </span>
        <div class="navitem">
            Position analysis
        </div>
        <div class="navitem">
            Opening explorer
        </div>
        <div class="navitem">
            Top players
        </div>
        <div class="navitem">
            API
        </div>
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
                font-size: 22px;
                cursor: pointer;
                padding: 0 15px;

                &:hover, &.active {
                    color: white;
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
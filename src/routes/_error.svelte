<div class="image-wrapper">
    <img src="/svg/thonk.svg" alt="thonk">
    <div class="error">
        <span class="code">404</span>
        <div class="message">File not found</div>
    </div>
</div>

<style lang="scss">
    @import "../scss/vars";

    .image-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: $viewport-lighter;

        img {
            width: 65%;
            height: 65%;
        }

        .error {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: $text-default;

            .code {
                font-size: 92px;
            }

            .message {
                font-size: 66px;
            }
        }
    }
</style>
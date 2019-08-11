<script context="module">
    import { current_page } from "stores";
    import Fa from "components/Fa";
    import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt"
    import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons/faTachometerAlt"
    import { faChessKnight } from "@fortawesome/free-solid-svg-icons/faChessKnight"

	export async function preload(page) {
        current_page.set(page.path);
		const res = await this.fetch("positions/all.json");
        const positions = await res.json();
		return { positions };
	}
</script>

<script>
    export let positions;
</script>

{#if positions && positions.length > 0}
    <div class="positions">
        <div class="positions-header">
            <span>times played</span>
            <span>fen string</span>
            <span>frequent player</span>
        </div>
        {#each positions.sort((a, b) => b.count - a.count) as position}
            <div class="position">
                <span class="count">{position.count}</span>
                <span class="fen">{position.fen}</span>
                <div class="frequent-player">
                    {#if position.frequent_player}
                        <img class="headshot" src="img/players/{position.frequent_player.image}" alt="{position.frequent_player.lastname}">
                        <div class="details">
                            <div class="name">{position.frequent_player.firstname} {position.frequent_player.lastname}</div>
                            <div class="ratings">
                                <div class="rating">
                                    <Fa icon={faBolt}/>
                                    <span class="value">{position.frequent_player.rating.blitz}</span>
                                </div>
                                <div class="rating">
                                    <Fa icon={faTachometerAlt}/>
                                    <span class="value">{position.frequent_player.rating.rapid}</span>
                                </div>
                                <div class="rating">
                                    <Fa icon={faChessKnight}/>
                                    <span class="value">{position.frequent_player.rating.standard}</span>
                                </div>
                            </div>
                        </div>
                    {:else}
                        <div class="no-player">
                            No frequent player found
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
{:else}
    No positions found.
{/if}

<style lang="scss">
    @import "../../scss/vars";

    .positions {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        padding: 30px 60px;
        color: $text-default;

        .positions-header {
            display: grid;
            grid-template-columns: 160px 1fr 1fr;
            text-transform: uppercase;
            font-size: 18px;
        }

        .position {
            display: grid;
            grid-template-columns: 160px 1fr 1fr;

            .fen {
                font-family: "Courier";
            }

            .frequent-player {
                display: flex;

                .headshot {
                    width: 35px;
                    height: 35px;
                    margin-right: 10px;
                }

                .details {
                    display: flex;
                    flex-direction: column;

                    .ratings {
                        display: flex;
                    }
                }
            }
        }
    }
</style>
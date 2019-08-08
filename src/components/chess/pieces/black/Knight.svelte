<script>
    export let size;

    const seed = Math.random();

    let unicorn = false;

    if (seed < 0.01) {
        unicorn = true;
    }
</script>

{#if unicorn}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} viewBox="0 0 45 45">
    <g>
  <title>Unicorn</title>
  <g id="Head" style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path id="Neck" d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:#000000; stroke:#000000;"/>
    <path id="Face" fill="#000000" d="m24,18c0.38,2.91 -5.55,7.37 -8,9c-3,2 -2.82,4.34 -5,4c-1.042,-0.94 1.41,-3.04 0,-3c-1,0 0.19,1.23 -1,2c-1,0 -4,1 -4,-4c0,-2 6,-12 6,-12c0,0 -7.5275,-6.475 -7.0413,-7.15c0.4863,-0.675 8.9863,4.45 9.0413,3.65c-0.73,-0.994 -0.5,-2 -0.5,-3c1,-1 3,2.5 3,2.5l2,0c0,0 0.78,-1.992 2.5,-3c1,0 1,3 1,3" style="fill:#000000; stroke:#000000;"/>
    <path id="Nose" d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:#ffffff; stroke:#ffffff;"/>
    <path id="Eye" d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="fill:#ffffff; stroke:#ffffff;"/>
    <path id="Mane" d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " style="fill:#ffffff; stroke:none;"/>
  </g>
 </g>
</svg>

{:else}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} viewbox="0 0 45 45">
    <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path
      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
      style="fill:#000000; stroke:#000000;" />
    <path
      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
      style="fill:#000000; stroke:#000000;" />
    <path
      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
      style="fill:#ffffff; stroke:#ffffff;" />
    <path
      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
      style="fill:#ffffff; stroke:#ffffff;" />
    <path
      d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
      style="fill:#ffffff; stroke:none;" />
  </g>
</svg>

{/if}

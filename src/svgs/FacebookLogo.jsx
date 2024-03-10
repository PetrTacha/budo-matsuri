import * as React from "react";
import styles from "@/svgs/svgStyles.module.scss";

const FacebookLogo = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      className={styles.icon}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 135 135"
      {...props}
    >
      <path
        style={{
          fill: color,
          fillRule: "nonzero",
        }}
        d="M135 67.498C134.999 30.469 104.529 0 67.5 0 30.471 0 0 30.47 0 67.5c0 33.082 24.321 61.532 57 66.678v-47.17H39.81v-19.51h17.14v-14.87c0-16.92 10.08-26.26 25.5-26.26 5.062.071 10.112.512 15.11 1.32v16.61h-8.51c-8.39 0-11 5.2-11 10.54v12.66h18.72l-3 19.51H78.05v47.17c32.658-5.172 56.95-33.615 56.95-66.68Z"
      />
    </svg>
  );
};
export default FacebookLogo;

{
  /* <script>
    import "./svgStyles.scss";
    export let color = "--color-bg-4";
</script>
<svg class="icon" width="100%" height="100%" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg"
     xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1,-532.5,-532.912)">
        <path d="M667.5,600.41C667.499,563.381 637.029,532.912 600,532.912C562.971,532.912 532.5,563.382 532.5,600.412C532.5,633.494 556.821,661.944 589.5,667.09L589.5,619.92L572.31,619.92L572.31,600.41L589.45,600.41L589.45,585.54C589.45,568.62 599.53,559.28 614.95,559.28C620.012,559.351 625.062,559.792 630.06,560.6L630.06,577.21L621.55,577.21C613.16,577.21 610.55,582.41 610.55,587.75L610.55,600.41L629.27,600.41L626.27,619.92L610.55,619.92L610.55,667.09C643.208,661.918 667.5,633.475 667.5,600.41Z"
              style={`fill:${color};fill-rule:nonzero;`}/>
    </g>
</svg>

<!--<style lang="scss">-->
<!--  .icon-fb {-->
<!--    fill: var(&#45;&#45;color-bg-1);-->
<!--    height: 5rem;-->
<!--    cursor: pointer;-->
<!--    transition: scale ease-in-out .5s;-->

<!--    &:hover {-->
<!--      scale: 1.1-->
<!--    }-->
<!--  }-->
<!--</style>--> */
}

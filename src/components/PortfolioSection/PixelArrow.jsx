function PixelArrow({ direction = "right", size = 4, color = "currentColor" }) {
   const pixels = [
      "1000000",
      "1100000",
      "1110000",
      "1111000",
      "1110000",
      "1100000",
      "1000000",
   ];

   return (
      <svg
         width={7 * size}
         height={7 * size}
         viewBox={`0 0 ${7 * size} ${7 * size}`}
         shapeRendering="crispEdges"
         style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
         aria-hidden="true"
      >
         {pixels.map((row, y) =>
            row
               .split("")
               .map((bit, x) =>
                  bit === "1" ?
                     <rect
                        key={`${x}-${y}`}
                        x={x * size}
                        y={y * size}
                        width={size}
                        height={size}
                        fill={color}
                     />
                  :  null,
               ),
         )}
      </svg>
   );
}

export default PixelArrow;

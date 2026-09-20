const STAR = [
   "...#...",
   "...#...",
   "#######",
   ".#####.",
   "..###..",
   ".##.##.",
   ".#...#.",
];

function PixelStar({ on }) {
   return (
      <svg
         className={`star ${on ? "star--on" : ""}`}
         viewBox="0 0 7 7"
         shapeRendering="crispEdges"
         aria-hidden="true"
      >
         {STAR.flatMap((row, y) =>
            [...row].map((cell, x) =>
               cell === "#" ?
                  <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
               :  null,
            ),
         )}
      </svg>
   );
}

export default PixelStar;

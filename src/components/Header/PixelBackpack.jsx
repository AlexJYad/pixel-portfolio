const BACKPACK = [
   "...DDDDD...",
   "..D.....D..",
   "..DDDDDDD..",
   ".DLLLLLLSD.",
   ".DLBBBBBSD.",
   ".DLDDDDDSD.",
   ".DLBBBBBSD.",
   ".DLBDDDBSD.",
   ".DLDPPPDSD.",
   ".DLDPPPDSD.",
   ".DSSDDDSSD.",
   "..DDDDDDD..",
];

const COLORS = {
   D: "#3c2116",
   B: "#aa7e51",
   L: "#cda06e",
   S: "#5f3713",
   P: "#cda06e",
};

function PixelBackpack({ size = 44 }) {
   return (
      <svg
         width={size}
         height={(size * 12) / 11}
         viewBox="0 0 11 12"
         shapeRendering="crispEdges"
         aria-hidden="true"
      >
         {BACKPACK.flatMap((row, y) =>
            [...row].map((c, x) =>
               COLORS[c] ?
                  <rect
                     key={`${x}-${y}`}
                     x={x}
                     y={y}
                     width="1"
                     height="1"
                     fill={COLORS[c]}
                  />
               :  null,
            ),
         )}
      </svg>
   );
}

export default PixelBackpack;

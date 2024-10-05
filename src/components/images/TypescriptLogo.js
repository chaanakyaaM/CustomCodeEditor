export default function TypescriptLogo({ width = 40, height = 40 }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0 0 256 256"
      >
        <g fill="none" stroke="none" strokeWidth="1">
          <rect width="256" height="256" fill="#007ACC"></rect>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="100"
            fill="white"
          >
            TS
          </text>
        </g>
      </svg>
    );
  }
  
import * as React from "react"

const LupaSvg = (props) => (
  <svg
    width={20}
    height={20}
    viewBox= '0 0 20 20'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15 15-3.306-3.311L15 15Zm-1.474-7.737A6.263 6.263 0 1 1 1 7.263a6.263 6.263 0 0 1 12.527 0v0Z"
      stroke={props.stroke}
      strokeWidth={1.615}
      strokeLinecap="round"
    />
  </svg>
)

export { LupaSvg }

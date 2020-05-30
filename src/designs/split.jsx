import React from "react";
import { url } from "inspector";

const Overlay = ({
  title = "",
  subtitle = "",
  backgroundColor = "#000",
  authorImage64,
}) => {
  const truncateAt = 50;
  if (title.length > truncateAt) {
    title = title.substr(0, truncateAt);
    title += "...";
  }

  const iwidth = 400;
  const iheight = 200;
  const xMargin = 20;
  const authorWidth = 150;

  let texty = 20;
  if (!subtitle) {
    texty = texty + 5;
  }

  return (
    <svg
      width="1200"
      height="600"
      viewBox={`0 0 ${iwidth} ${iheight}`}
      fill="#fff"
      style={{
        fontFamily: "helvetica",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="clip">
          <use xlinkHref="#rect" />
        </clipPath>
      </defs>

      {authorImage64 ? (
        <g stroke="2" clipPath="url(#clip)">
          <rect
            id="rect"
            width="200"
            height="200"
            x={iwidth - 200}
            y="0"
            fill="none"
            stroke="#2b6cb0"
            strokeWidth="1"
            //rx="50"
          />
          <image
            width={200}
            height="100%"
            x={iwidth - 200}
            y="0"
            xlinkHref={authorImage64}
          />
        </g>
      ) : null}

      <g style={{ fill: "#000", fontSize: 16 }}>
        <switch>
          <foreignObject x="20" y="20" width="200" height="200">
            <p xmlns="http://www.w3.org/1999/xhtml">Text goes here</p>
          </foreignObject>
          <text x="20" y="20">
            fail
          </text>
        </switch>
        <text x={xMargin} y={texty} stroke="1">
          {title}
        </text>
        <text
          x={xMargin}
          y={iheight - 20}
          style={{ fontSize: 10, fill: "#a3a3a3" }}
        >
          {subtitle}
        </text>
      </g>
    </svg>
  );
};

export default Overlay;

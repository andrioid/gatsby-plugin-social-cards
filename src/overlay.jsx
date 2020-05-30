import React from 'react'

const Overlay = ({
	title = '',
	subtitle = '',
	backgroundColor = '#000',
	authorImage64
}) => {
	const truncateAt = 50
	if (title.length > truncateAt) {
		title = title.substr(0, truncateAt)
		title += '...'
	}

	const iwidth = 400
	const iheight = 200
	const xMargin = 20
	const authorWidth = 32

	let texty = 170
	if (!subtitle) {
		texty = texty + 5
	}

	return (
		<svg
			width="1200"
			height="600"
			viewBox={`0 0 ${iwidth} ${iheight}`}
			style={{
				fontFamily: 'helvetica'
			}}
		>
			<defs>
				<clipPath id="clip">
					<use xlinkHref="#rect" />
				</clipPath>
				<filter id="shadow">
					<feDropShadow
						dx="0.2"
						dy="1.2"
						stdDeviation="0.2"
						floodOpacity="0.5"
					/>
				</filter>
			</defs>

			<g filter="#shadow">
				<rect
					width="400"
					height="60"
					x="0"
					y="140"
					opacity="0.6"
					style={{ fill: backgroundColor }}
				/>
			</g>
			{authorImage64 ? (
				<g filter="#shadow">
					<g stroke="2" clipPath="url(#clip)">
						<rect
							id="rect"
							width={authorWidth}
							height={authorWidth}
							x={iwidth - authorWidth - xMargin}
							y="156"
							fill="none"
							stroke="#2b6cb0"
							strokeWidth="1"
							rx="50"
						/>
						<image
							width={authorWidth}
							height={authorWidth}
							x={iwidth - authorWidth - xMargin}
							y="156"
							xlinkHref={authorImage64}
						/>
					</g>
				</g>
			) : null}

			<g style={{ fill: '#fff', fontSize: 14 }}>
				<text x={xMargin} y={texty}>
					{title}
				</text>
				<text
					x={xMargin}
					y={texty + 15}
					style={{ fontSize: 10, fill: '#a3a3a3' }}
				>
					{subtitle}
				</text>
			</g>
		</svg>
	)
}

export default Overlay

import React from 'react'
import { url } from 'inspector'

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
	const xMargin = 40
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
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<clipPath id="clip">
					<use xlinkHref="#rect" />
				</clipPath>
				<filter id="shadow" asx="0" asy="0" swidth="200%" hseight="200%">
					<feGaussianBlur in="SourceAlpha" stdDeviation="3" />
					<feOffset dx="0.5" dy="-0.5" />
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			<g filter="url(#shadow)">
				<rect
					width="360"
					height="120"
					x="20"
					y="140"
					rx="10"
					style={{ fill: '#fff', strokeWidth: 0 }}
				/>
			</g>
			{authorImage64 ? (
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
			) : null}

			<g style={{ fill: '#000', fontSize: 12 }}>
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

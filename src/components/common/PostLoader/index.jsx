import React from 'react'
import ContentLoader from 'react-content-loader'
import { Wrapper, Item } from './styles'

export default () => (
	<Wrapper>
		{[0, 1].map(item => (
			<Item key={item}>
				<ContentLoader
					height={268}
					width={400}
					speed={2}
					primaryColor="#f3f3f3"
					secondaryColor="#ecebeb"
				>
					<circle cx="30" cy="30" r="30" />
					<rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
					<rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
					<rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
					<rect x="15" y="85" rx="5" ry="5" width="400" height="400" />
				</ContentLoader>
			</Item>
		))}
	</Wrapper>
)

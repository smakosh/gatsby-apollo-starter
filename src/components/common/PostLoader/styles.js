import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;

	&:after {
		content: '';
		width: 100%;
		max-width: 32%;

		@media (max-width: 960px) {
			max-width: 100%;
		}
	}
`

export const Item = styled.div`
	width: 100%;
	max-width: 32%;

	@media (max-width: 960px) {
		max-width: 100%;
	}
`

import styled from "styled-components";

const Flex = styled.div`
	display: flex;
	align-items: ${({ align }) => align || "center"};
	justify-content: space-between;
	flex-wrap: wrap;

	&:after {
		content: "";
		max-width: ${({ col }) => `${100 / col - 2}%` || "100%"};
		width: 100%;

		@media (max-width: 960px) {
			max-width: 100%;
		}
	}
`;

export default Flex;

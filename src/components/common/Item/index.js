import styled from "styled-components";

const Item = styled.div`
	width: 100%;
	max-width: ${({ col }) =>
		col && col > 1 ? `${100 / col - 2}%` || "100%" : "100%"};

	${({ marginBottom }) =>
		marginBottom &&
		`
		margin-bottom: ${marginBottom};
	`}

	@media (max-width: 960px) {
		max-width: ${({ colTablet }) =>
			colTablet && colTablet > 1
				? `${100 / colTablet - 2}%` || "100%"
				: "100%"};
		margin-bottom: ${({ marginBottom }) => marginBottom || "3rem"};

		&:last-child {
			margin-bottom: unset;
		}
	}

	@media (max-width: 680px) {
		max-width: ${({ colMobile }) =>
			colMobile && colMobile > 1
				? `${100 / colMobile - 2}%` || "100%"
				: "100%"};
	}

	${({ stretch }) =>
		stretch &&
		`
    display: flex;
    align-self: stretch;
  `}
`;

export default Item;

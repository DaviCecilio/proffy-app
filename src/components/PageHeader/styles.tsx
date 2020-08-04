import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  .top-bar-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: vat(--color-text-in-primary);
    padding: 1.6rem 0;

    > img {
      height: 1.6rem;
    }

    a {
      height: 3.2rem;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.6;
      }
    }
  }

  .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;

    strong {
      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
      color: var(--color-title-in-primary);
    }
  }
`;

export default HeaderContainer;

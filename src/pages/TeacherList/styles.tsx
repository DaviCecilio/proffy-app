import styled from "styled-components";

const PageTeacherContainer = styled.section`
  width: 100vw;
  height: 100vh;

  #page-teacher-list {
    width: 100%;
  }

  form#search-teachers {
    margin-top: 3.2rem;

    label {
      color: var(--color-text-in-primary);
    }

    .input-block {
      position: relative;

      label {
        font-size: 1.4rem;
      }

      input {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
      }

      &:focus-within::after {
        width: calc(100% - 3.2rem);
        height: 2px;
        content: "";
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
      }
    }
  }
`;

export default PageTeacherContainer;

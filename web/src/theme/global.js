import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryText};
    background: ${({ theme }) => theme.background};
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  // Hide overflow and simulate an application view
  body {
    min-height: 100vh;
    overflow: hidden;

    > #root {
      overflow: scroll;
    }
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme.secondaryText};
  }

  a {
    color: ${({ theme }) => theme.primary};
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    :active {
      outline: none;
    }
    :disabled {
      opacity: 0.5;
      cursor: default;
    }
  }

  :focus {
    outline: ${({ theme }) => theme.primary} auto 5px;
    box-shadow: 0 0 0 0.2rem rgba(${({ theme }) => theme.primary}, .25);
  }

  ::selection {
    background: ${({ theme }) => theme.primary}25;
  }
`

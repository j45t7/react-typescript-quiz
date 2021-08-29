import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/horses.jpeg'

export const GlobalStyle = createGlobalStyle`
  body, html {
    min-height:100%;
    height:100%;
    overflow-x:hidden;
    display:block;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    display: flex;
    padding: 0 20px;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0 0 1rem;
  }

  h1 {
    font-family: 'Lato' sans-serif;
    background-size: 100%;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 5rem 2rem;

  }

  .start, .next {
    cursor: pointer;
    border: 2px solid #630A10;
    background-color: #911F27;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 300ms ease;
    border-radius: 20px;
  }

  .start:hover, .next:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .start {
    max-width:  200px;
  }
`
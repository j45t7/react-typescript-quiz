import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 300px;
  background: #FCF0C8;
  border-radius: 10px;
  border: 1px solid #F7F6F2;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 3rem;

p {
  font-size: 1.5rem;
}
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    height: 40px;
    margin: 5px 0;
    width: 100%;
    background: ${({ correct, userClicked }) =>
      correct ?
        'linear-gradient(90deg, #50CB93, #59bc86)'
        : !correct && userClicked ? 'linear-gradient(90deg, #ff5656, #c16868)'
        : 'linear-gradient(90deg, #ED8E7C, #F5C6AA)'
      };
    border: 1px solid #fff;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
  }
`
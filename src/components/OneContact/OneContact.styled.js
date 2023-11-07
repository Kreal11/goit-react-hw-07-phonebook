import styled from 'styled-components';

export const StyledOneContactLi = styled.li`
  padding: 10px;
  background: linear-gradient(
    to bottom,
    rgb(227, 213, 255),
    rgb(255, 231, 231)
  );
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: scale 1s;

  &:hover {
    scale: 1.15;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  p {
    max-width: 120px;
    font-size: 17px;
    text-align: center;
    word-wrap: break-word;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #cea2fd;
    }

    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`;

export const OneContactDeleteButton = styled.button`
  max-width: 150px;
  padding: 5px 10px;
  margin: auto auto 0 auto;
  background: linear-gradient(to bottom, #9400d3, #f08080);
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:active {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;

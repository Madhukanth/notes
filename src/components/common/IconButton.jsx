import styled from "styled-components";

const StyledButton = styled.button`
  background-image: ${(props) => props.url};
`;

const IconButton = (props) => {
  return (
    <StyledButton
      {...props}
      className="border-2 m-5 border-green-200 hover:border-green-500 rounded-full h-12 w-12 bg-no-repeat bg-center bg-30px focus:outline-none"
    />
  );
};

export default IconButton;

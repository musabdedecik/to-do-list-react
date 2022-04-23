import Button from "@mui/material/Button";

const DefaultButton = ({ children, ...attr }) => {
  return (
    <Button {...attr} >
      {children}
    </Button>
  );
};

export default DefaultButton;
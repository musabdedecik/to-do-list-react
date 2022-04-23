const Form = ({ children, ...attr }) => {
    return <form {...attr}>{children}</form>;
  };
  
  export default Form;
export const validateSignup = (values) => {
    let errors = {};
    // const validPhone = new RegExp("^([0-9]{10,12})$");
    const validEmail = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const validPass = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/);
      
    // name
    // if (!values.name) {
    //   errors.name = "Name is required";
    // } else if (!validPhone.test(values.name)) {
    //   errors.name = "Name is Required";
    // }
  
    // email
    if (!values.email) {
      errors.email = "Email required";
    } else if (!validEmail.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    // password
    if (!values.password) {
      errors.password = "Password required";
    } else if (!validPass.test(values.password)) {
      errors.password =
        "Password must be at least 6 characters, including uppercase, lowercase and numbers";
    }
  
    return errors;
  };
  
  export const validateLogin = (values) => {
    let errors = {};
    const validEmail = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    const validPass = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/);
  
    // email
    if (!values.email) {
      errors.email = "Email required";
    } else if (!validEmail.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  
    // password
    if (!values.password) {
      errors.password = "Password required";
    } else if (!validPass.test(values.password)) {
      errors.password =
        "Password must be at least 6 characters, including uppercase, lowercase and numbers";
    }
  
    return errors;
  };

export const getToken = () => {
  try {
    if (sessionStorage.getItem("token")) {
      return sessionStorage.getItem("token");
    } else {
      return null;
    }
  } catch (error) {
    console.error("Auth error!", error);
    return false;
  }
};

export const getUserName = () => {
  try {
    if (sessionStorage.getItem("name")) {
      return sessionStorage.getItem("name");
    } else {
      return null;
    }
  } catch (error) {
    console.error("Auth error!", error);
    return false;
  }
};

export const setToken = (token,name) => {
  try {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("name", name);
    return true;
  } catch (error) {
    console.error("Set Token Error", error)
    return false;
  }
};

export const removeToken = () => {
  try {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
    return true
  } catch (error) {
    console.error("Auth error!", error);
    return false;
  }
};
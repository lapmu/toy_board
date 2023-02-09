import { v4 as uuidv4 } from "uuid";

export const ADDGUEST_WRITE = "ADDGUEST_WRITE";
export const ADDGUEST_DRAW = "ADDGUEST_DRAW";
export const ADDPOST = "ADDPOST";
export const DELETEGUEST = "DELETEGUEST";
export const DELETEPOST = "DELETEPOST";

export const addGuest_Write = (author, text) => {
  return {
    type: ADDGUEST_WRITE,
    payload: {
      id: uuidv4(),
      author,
      text,
      img: "none",
    },
  };
};

export const addGuest_Draw = (author, img) => {
  return {
    type: ADDGUEST_DRAW,
    payload: {
      id: uuidv4(),
      author,
      text: "none",
      img,
    },
  };
};

export const addPost = (body, title) => {
  return {
    type: ADDPOST,
    payload: {
      id: uuidv4(),
      title,
      body,
      createAt: new Date().toLocaleDateString(),
    },
  };
};

export const deleteGuest = (idx) => {
  return {
    type: DELETEGUEST,
    payload: idx,
  };
};

export const deletePost = (idx) => {
  return {
    type: DELETEPOST,
    payload: idx,
  };
};

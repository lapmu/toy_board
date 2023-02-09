import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../action/action";

import classes from "./PostItem.module.css";

import BackSpace from "../components/UI/BackSpace";
import Button from "../components/UI/Button";

const PostItem = ({ idx }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.post[idx]);

  const deletePostHandle = () => {
    dispatch(deletePost(idx));
    navigate("/work");
  };

  const noEdit = (e) => {
    alert("미완성. (--;)(__;)");
  };

  return (
    <div className={classes.main}>
      <div className={classes.backspace}>
        <BackSpace to="/work" />
      </div>
      <div className={classes.title}>{state.title}</div>
      <div className={classes.content}>
        <div>
          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: state.body }}
          />

          <div className={classes.createAt}>{state.createAt}</div>
        </div>

        <div className={classes.backsubmit}>
          <Button type="submit" onClick={noEdit}>
            edit
          </Button>
          <Button type="submit" onClick={deletePostHandle}>
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  CardActionArea,
} from "@material-ui/core/";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const userId = user ? user.result.sub || user.result._id : null;

  const [likes, setLikes] = useState(post ? post.likes : []);
  const hasLiked = post.likes.find((like) => like === userId);
  const handleLike = () => {
    dispatch(likePost(post._id));

    if (hasLiked) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => user && like === userId) ? (
        <React.Fragment>
          <ThumbUpAltIcon fontSize="small" /> &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ThumbUpAltIcon fontSize="small" /> &nbsp;{likes.length}{" "}
          {likes.length === 1 ? "Like" : "Likes"}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </React.Fragment>
    );
  };

  const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardActionArea onClick={openPost}>
        {/*<Card  elevation={0}>*/}
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography varient="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          {user &&
            (user.result.sub === post.creator ||
              user.result._id === post.creator) && (
              <Button
                style={{ color: "white" }}
                size="small"
                onMouseDown={(event) => event.stopPropagation()}
                onClick={(event) => {
                  setCurrentId(post._id);
                  event.stopPropagation();
                  event.preventDefault();
                }}
              >
                <MoreHorizIcon fontSize="medium" />
              </Button>
            )}
        </div>
        <div className={classes.details}>
          <Typography varient="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography className={classes.title} varient="h5" gutterBottom>
          {post.title}
        </Typography>

        <CardContent>
          <Typography fontSize="small"  varient="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        {/*</Card>*/}
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {user &&
          (user.result.sub === post.creator ||
            user.result._id === post.creator) && (
            <Button
              size="small"
              color="secondary"
              onClick={() => {
                dispatch(deletePost(post._id));
              }}
            >
              <DeleteIcon fontSize="small" color="red" />
              Delete
            </Button>
          )}
      </CardActions>
    </Card>
  );
};

export default Post;

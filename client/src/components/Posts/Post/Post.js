import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
       if(likes.length > 0) {
        return likes.find((like) => like === userId)
          ? (
            <><ThumbUpAltIcon fontSize='small'/>&nbsp;{likes.length > 2 ? `You and ${likes.length - 1}others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
          ) : (
            <><ThumbUpAltIcon fontSize='small'/>&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
          );        
       }

       return <><ThumbUpAltIcon fontSize='small' />&nbsp;Like</>
    };

    const openPost = (e) => {
        history.push(`/posts/${post._id}`);
    };

    return (
        <Card>
            
        </Card>
    )
}
import React from 'react'
import { useParams, useLocations } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Posts/Post/Post'
import { getPostByCreator, getPostsBySearch } from '../../actions/posts';

function CreatorOrTag() {
  return (
    <div>CreatorOrTag</div>
  )
}

export default CreatorOrTag

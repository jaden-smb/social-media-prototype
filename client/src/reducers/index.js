import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth'

export const redurcers = combineReducers({ posts, auth });
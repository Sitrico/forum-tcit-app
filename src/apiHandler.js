import axios from 'axios';
import { actionLoadPosts, actionAddPost, actionDeletePost } from './actions';
import store from './store';

export async function getPosts() {
	try {
		const response = await axios.get('http://localhost:4000/post');
		console.log(response);
		store.dispatch(actionLoadPosts(response.data.posts));
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function addPost(name, description) {
	try {
		const response = await axios.post('http://localhost:4000/post', {name, description});
		console.log(response);
		store.dispatch(actionAddPost(response.data.post));
	} catch (error) {
		console.error(error);
	}
}

export async function deletePost(id) {
	try {
		console.log(id)
		const response = await axios.delete('http://localhost:4000/post/'+id);
		console.log(response);
		store.dispatch(actionDeletePost(id));
	} catch (error) {
		console.error(error);
	}
}
import { createStore } from 'redux';

const initialState = {
	posts: [],
	filter: '',
	filteredPosts: []
}

const reducerPosts = (state = initialState, action) => {
	let allPosts = []; let filteredPosts = [];
	switch (action.type) {
		case 'DATA_LOADED':
			allPosts = [...action.posts]
			return {posts: allPosts, filter: '', filteredPosts: allPosts};
		case 'ADD':
			allPosts = [...state.posts, action.newPost];
			filteredPosts = allPosts.filter(post => post.name.includes(state.filter));
			return {posts: allPosts, filter: state.filter, filteredPosts: filteredPosts};
		case 'DELETE':
			allPosts = state.posts.filter(post => post.id !== action.id);
			filteredPosts = state.filteredPosts.filter(post => post.id !== action.id);
			return {posts: allPosts, filter: state.filter, filteredPosts: filteredPosts};
		case 'FILTER':
			filteredPosts = state.posts.filter(post => post.name.includes(action.filter));
			return {posts: [...state.posts], filter: action.filter, filteredPosts: filteredPosts}
		default:
			return state;
	}	
}

export default createStore(reducerPosts);
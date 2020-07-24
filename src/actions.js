export function actionLoadPosts(posts) {
	return {
		type: 'DATA_LOADED',
		posts
	}	
}

export function actionFilterPosts(filter) {
	return {
		type: 'FILTER',
		filter
	}
}

export function actionAddPost(newPost) {
	return {
		type: 'ADD',
		newPost
	}
}

export function actionDeletePost(id) {
	return {
		type: 'DELETE',
		id
	}
}
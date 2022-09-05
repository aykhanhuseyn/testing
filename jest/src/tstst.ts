declare module namespace {
	type Category = 'ux' | 'ui' | 'enhancement' | 'bug' | 'feature';

	type Status = 'suggestion' | 'planned' | 'in-progress' | 'live';

	export interface CurrentUser {
		image: string;
		name: string;
		username: string;
	}

	export interface User {
		image: string;
		name: string;
		username: string;
	}

	export interface Reply {
		id: string;
		content: string;
		replyingTo: Comment; // commentID
		user: User;
	}

	export interface Comment {
		id: number;
		content: string;
		user: User; // userID
		// replies: Reply[];
		product: ProductRequest; // productRequestID
	}

	export interface ProductRequest {
		id: number;
		title: string;
		upvotes: number;
		description: string;
		category: Category;
		status: Status;
		// comments: Comment[];
	}

	export interface RootObject {
		currentUser: CurrentUser;
		productRequests: ProductRequest[];
	}
}

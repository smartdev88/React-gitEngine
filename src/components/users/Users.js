import React, { Component } from 'react';
import User from './User';
import SearchUsers from './SearchUsers';
import axios from 'axios';

export class Users extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{
					login: 'mojombo',
					id: 1,
					avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
					url: 'https://api.github.com/users/mojombo',
					html_url: 'https://github.com/mojombo'
				},
				{
					login: 'defunkt',
					id: 2,
					avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
					url: 'https://api.github.com/users/defunkt',
					html_url: 'https://github.com/defunkt'
				},
				{
					login: 'pjhyett',
					id: 3,
					avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
					url: 'https://api.github.com/users/pjhyett',
					html_url: 'https://github.com/pjhyett'
				}
			]
		};
	}

	getUsers = () => {
		axios.get('https://api.github.com/users').then((response) => {
			this.setState({
				users: response.data
			});
		});
	};

	componentDidMount() {
		this.getUsers();
	}

	searchUsersFromGit = (data) => {
		if(data != ''){
			axios.get(`https://api.github.com/search/users?q=${data}`)
				.then(response => {
					// console.log(response);
					this.setState({
						users: response.data.items
					})		
				})
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-12">
                        <SearchUsers getUserSearch={this.searchUsersFromGit}/>
                    </div>
				</div>
				<div className="row">
					{this.state.users.map((user) => (
						<div className="col-md-4" key={user.id}>
							<User user={user} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Users;

var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},
	render: function() {
		return (
			React.createElement('li', {className: 'contact'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://image.flaticon.com/icons/png/128/1239/1239267.png'
				}),
				React.createElement('p', {className: 'firstName'}, this.props.item.firstName),
				React.createElement('p', {className: 'lastName'}, this.props.item.lastName),
				React.createElement('a', {
					className: 'email',
					href: this.props.item.email
				}, this.props.item.email)
			)
		)
	}
});
var contacts = [
	{
		id: 1,
		firstName: 'Jon',
		lastName: 'Snow',
		email: 'jon.snow@example.com',
	},
	{
		id: 2,
		firstName: 'Tyrion',
		lastName: 'Lannister',
		email: 'tyrion.lannister@example.com',
	},
	{
		id: 3,
		firstName: 'Robb',
		lastName: 'Stark',
		email: 'robb.stark@example.com',
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};


var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		)
	}
});
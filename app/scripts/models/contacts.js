contactsApp.factory('Contacts', function($http) {
	
	var contacts = {}; 

	contacts.getAll = function(){
		return $http.get('sample_contacts.json')
	}

	return contacts;
});
contactsApp.factory('Contacts', function($http) {
	
	var contacts = {}; 

	contacts.add = function() {
			//..
		}

	contacts.makeItFavorite = function() {
			//..
	}

	contacts.getAll = function(){
		return $http.get('sample_contacts.json')
	}

	contacts.getFavorites = function(){
		$http.get('sample_contacts.json').then(function(response){
			return response.data.filter(function(contact) { contact.is_favorite == 'true' } );
		})
	}

	return contacts;
});
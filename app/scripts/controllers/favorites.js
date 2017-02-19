'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:favoritesController
 * @description
 * # favoritesController
 * Controller of the contactsApp
 */
contactsApp.controller('favoritesController', [
	'$scope',
	'PubSub',
	'Contacts',
	function($scope, PubSub, Contacts){
		var additionSub = PubSub.subscribe('favorite-added', addFavorites);
		var removalSub = PubSub.subscribe('favorite-removed', removeFavorites);

		$scope.initialize = function(){
			$scope.favorites = []

			var promise = Contacts.getAll()

			promise.then(function(response){
				console.log(response)
				$scope.favorites = response.data.filter(function (contact) {
					return contact.is_favorite == true
				});
			})
		};

		function addFavorites(data){
			$scope.favorites.push(data.contact);
		}

		function  removeFavorites(data) {
			var indexOfContact = $scope.favorites.map(function(x) {return x.id; }).indexOf(data.contact.id);
			$scope.favorites.splice(indexOfContact, 1)
		}
	}
]);
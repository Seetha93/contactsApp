'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
contactsApp.controller('mainContactsController', [
	'$scope',
	'PubSub',
	'Contacts',
	function($scope, PubSub, Contacts){

		$scope.init = function(){
			$scope.selected = []
		 
			$scope.contacts = []

			var promise = Contacts.getAll()

			promise.then(function(response){
				console.log(response)
				$scope.contacts = response.data;
			})
		}
		
		$scope.addContact = function(){
			
		}

		$scope.addToFavorites = function(contact){
			contact.is_favorite = true
			PubSub.publish('favorite-added', {contact: contact});
		}

		$scope.removeFromFavorites = function(contact){
			contact.is_favorite = false
		}
	}
]);


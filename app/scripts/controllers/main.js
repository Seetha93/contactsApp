'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:mainContactsController
 * @description
 * # mainContactsController
 * Controller of the contactsApp
 */
contactsApp.controller('mainContactsController', [
	'$scope',
	'$mdDialog',
	'PubSub',
	'Contacts',
	function($scope, $mdDialog, PubSub, Contacts){

		$scope.init = function(){
			$scope.selected = []
		 
			$scope.contacts = []

			var promise = Contacts.getAll()

			promise.then(function(response){
				console.log(response)
				$scope.contacts = response.data;
			})
		}
		
		$scope.openAddContactDialog = function(){
			$mdDialog.show({
				controller: 'mainContactsController',
		      	templateUrl: '/views/templates/add_contacts.html',
		      	parent: angular.element(document.body),
		      	clickOutsideToClose:true,
		      	fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
		    })
		    .then(function(answer) {
		      	$scope.contacts.push(answer)
		    }, function() {
		      	$scope.status = 'You cancelled the dialog.';
		    });
		}

		$scope.addContact = function(user) {
			user.is_favorite = false;
	      	$mdDialog.hide(user);
	    };
		
		$scope.addToFavorites = function(contact){
			contact.is_favorite = true
			PubSub.publish('favorite-added', {contact: contact});
		}

		$scope.removeFromFavorites = function(contact){
			contact.is_favorite = false
			PubSub.publish('favorite-removed', {contact: contact});
		}
	}
]);


innuendoApp.controller("workflowsCtrl", function($scope, $http) {

	$scope.added_protocols = {};

	var protocols = new Protocol_List($http);
	var workflows = new Workflows($http);

	$scope.launch_sortable = function(){
		sortable('.sortable');
		$scope.getProtocolTypes();
	}

	$scope.getProtocolTypes = function(){

		protocols.get_protocol_types(function(results){
			$scope.protocol_types = results.protocol_types;
			workflows.set_protocol_types_object(results.protocolTypeObject);
		});

	}

	$scope.loadProtocolType = function(selectedType){

		protocols.get_protocols_of_type(selectedType, function(results){
			workflows.set_protocols_of_type(results.protocols);
			$scope.property_fields = results.property_fields;
	    	$scope.protocols_of_type = results.protocols_of_type;
		});
	}


	$scope.addToPipeline = function(){

		workflows.add_protocol_to_workflow($scope.selectedProtocolLoad, function(results){
			$scope.added_protocols = results.added_protocols;
		});
	}

	$scope.removeFromPipeline = function(selectedType){


	}


	$scope.add_New_Workflow = function(){

		workflows.save_workflow();

	}


});
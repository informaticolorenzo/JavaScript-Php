function getApi() {
	$('#tblUsuarios').DataTable({
		 responsive: true,
			"destroy": "true",
				"ajax": {
				"data": "",
				"url": "php/getApi.php",
				"type": "POST",
				"dataSrc": "",
			},
			
			"columns": [
				{"data": "id"},
				{"data": "name"},
				{"data": "username"},
				{"data": "email"},
			],
		});
		
}
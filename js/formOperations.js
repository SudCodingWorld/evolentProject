/* Javascript crud opertations */

var inputFirstname   = document.getElementsByName("fname");
var inputLastname    =document.getElementsByName("lname");
var inputEmail    = document.getElementsByName("email");
var inputPhone    = document.getElementsByName("phone");
var activeStatus = document.getElementsByName("status").checked;

var dataArray = [];

function contactPerson(id,firstname,lastname,email,phone,activeStatus){
	this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
	this.email = email;
	this.phone = phone;
	this.activeStatus = activeStatus;
}

function contactPersonController(){
	this.id = 1;
}

		contactPersonController.prototype = {
			create : function(firstname,lastname,email,phone,activeStatus){
				var person = new contactPerson(this.id,firstname,lastname,email,phone,activeStatus);
				this.id += 1;
				return person;
			},
			
			show : function(){		
				$("#contactTable tbody tr").remove();
				for(var i=0; i < dataArray.length; i++){
				var tr="<tr>";
				var td1="<td>"+ (i + 1) +"</td>";
				var td2="<td>"+dataArray[i]["firstname"]+"</td>";
				var td3="<td>"+dataArray[i]["lastname"]+"</td>";
				var td4="<td>"+dataArray[i]["email"]+"</td>";
				var td5="<td>"+dataArray[i]["phone"]+"</td>";
				var td6="<td>"+dataArray[i]["activeStatus"]+"</td>";
				var td7="<td><a data-id="+dataArray[i]["id"]+" class='edit-btn' href='#'> Edit</a> <a href='#' data-id="+dataArray[i]["id"]+" class='delete-btn'> Delete</a></td></tr>";
				$("#contactTable").append(tr+td1+td2+td3+td4+td5+td6+td7); 
				}
				
			} 
		}
	
	
var contactPersonController = new contactPersonController();

$('document').ready(function(){
	// function for add data.
$(document).on('click','.save-btn', function(){	
		event.preventDefault();
		var validatePage = validate();
		if(validatePage === true) {
		var newperson = contactPersonController.create(inputFirstname[0].value,inputLastname[0].value,inputEmail[0].value,inputPhone[0].value,"Active");
		dataArray.push(newperson);
		contactPersonController.show();
		inputFirstname[0].value = "";
		inputLastname[0].value = "";
		inputEmail[0].value = ""
		inputPhone[0].value = ""
		}
});


// Click event on edit button
$(document).on('click','.edit-btn', function(){	
	event.preventDefault();
	var dataId = $(this).attr('data-id');
	for(i=0; i<dataArray.length;i++){
		if(dataArray[i].id == dataId){
			var index = $(this).index()
			 inputFirstname[0].value = dataArray[i].firstname;
			inputLastname[0].value = dataArray[i].lastname;
			inputEmail[0].value = dataArray[i].email;
			inputPhone[0].value = dataArray[i].phone;
		}
	}
	$('.saveBtn-group').hide()
	$('.updateBtn-group').show()
	$('.update-btn').attr('data-id',dataId)
	
})
 //empty feilds on cancel button
$(document).on('click','.cancel-btn', function(){
	event.preventDefault();
	inputFirstname[0].value = "";
		inputLastname[0].value = "";
		inputEmail[0].value = ""
		inputPhone[0].value = ""
})

//Code to update existing record
$(document).on('click','.update-btn', function(){
	event.preventDefault();
	var validateupdatePage = false;
	validateupdatePage = validate();
		if(validateupdatePage === true) {
		var dataId = $(this).attr('data-id');
		var updateperson = contactPersonController.create(inputFirstname[0].value,inputLastname[0].value,inputEmail[0].value,inputPhone[0].value,"Active");	
		for(i=0; i<dataArray.length;i++){
			if(dataArray[i].id == dataId){
				dataArray.splice(i,1,updateperson);
			}
		}

	contactPersonController.show();
	inputFirstname[0].value = "";
		inputLastname[0].value = "";
		inputEmail[0].value = ""
		inputPhone[0].value = ""
	$('.saveBtn-group').show()
	$('.updateBtn-group').hide()
		}
})

//Code for delete record
$(document).on('click','.delete-btn', function(){	
	event.preventDefault();
	var dataId = $(this).attr('data-id');
	for(i=0; i<dataArray.length;i++){
		if(dataArray[i].id == dataId){
			  dataArray.splice(i, 1);
		}
	}
	contactPersonController.show();
})
})
// JavaScript Document

$(document).ready(function(e) {
document.addEventListener ("deviceready", onDeviceReady, false);

});

function onDeviceReady(){
	
	$('#posicion').on('click',function(){
		getPosition();
	});
	
	$('#watch').on('click',function(){
		watchPosition();
	});	

}

function getPosition(){
var options = {
		enableHighAccuracy :true,
		maximumAge:3600000
	}
	
	var watchID = navigator.geolocation.getCurrentPosition(onSuccess,onError,options);
	function onSuccess(position){
		
		alert('Latitud:'          +position.coords.latitud      +'\n'+
		'Longitud:'               +position.coords.longitud     +'\n'+
		'Altitud:'                +position.coords.altitud       +'\n'+
		'Accuracy:'                +position.coords.accuracy       +'\n'+
		'Alt.Accuracy:'       +position.coords.aaccuracy      +'\n'+
		'Heading:'                 +position.coords.headingg       +'\n'+
		'Speed:'                   +position.coords.speed          +'\n'+
		'Timestamp:'               +position.timestamp             +'\n');
	};

	function onError(error){
		alert('code:'   +error.code   +'\n'+'message:'+ error.message+'\n');
	}
	}

function watchPosition(){
var options = {
	maximumAge : 3600000,
	timeout : 3000,
	enableHighAccuracy : true,
}

var watchID = navigator.geolocation.watchPosition(onSuccess,onError,options);
function onSuccess(position){

	$('#latitud').html(position.coords.latitud);
	$('#longitud').html(position.coords.longitud);
	$('#altitud').html(position.coords.altitud);
	$('#accuracy').html(position.coords.accuracy);
	$('#aaccuracy').html(position.coords.aaccuracy );
	$('#headingg').html(position.coords.headingg);
	$('#speed').html(position.coords.speed);
	$('#timestamp').html(position.Timestamp);
};

function onError(error){
	alert('code:'  +error.code  +'\n'+'message:'+error.message+'\n');
}
}

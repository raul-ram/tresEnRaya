
function hide_message(){
	panel_message = document.getElementById("message");
	panel_message.style.display = "none";
}
function ShowMessage(winner){
	panel_message = document.getElementById("message");
	panel_message.style.display = "block";

	if (winner == 1) string_notification = "Ganó la Máquina";
	else string_notification = "Felicidades !!";

	MessageNotification = document.getElementById("notification");
	MessageNotification.innerHTML = string_notification;

	if (winner == 1) string_button = "Intentar de Nuevo!";
	else string_button = "Jugar de Nuevo";

	MessageButton = document.getElementById("button");
	MessageButton.innerHTML = string_button;
}
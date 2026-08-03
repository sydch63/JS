const userName = prompt("Введите ваше имя")
console.log(userName);
if (userName && userName.trim().length > 2) {
    alert(`Привет ${userName.trim()}!`);
} else {
    alert("Введено неверное имя.")
}





const rotate1 = () => {
    const date = new Date();
    const second = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    console.log(second)


    const sec1 = document.querySelector(".sec");
    const min = document.querySelector(".min");
    const hour = document.querySelector(".hour");
    sec1.style.transform = `rotate(${second * 6 +90}deg)`;
    min.style.transform = `rotate(${minutes * 6 +90}deg)`;
    hour.style.transform = `rotate(${hours * 30 +90}deg)`;





}

setInterval(rotate1, 1000);
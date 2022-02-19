backgroundCol = document.querySelector(".div-container")


let colors = ["yellow", "blue", "purple", "violet", "grey", "lightgreen", "lightblue", "gold", "black"]

const changeColor = () => {
    //Using the Math.random to to get index of colors
    const randomIndex = Math.floor(Math.random() * colors.length);
    const result = colors[randomIndex];
    //change background color
    backgroundCol.style.backgroundColor = result
    console.log(result)
}
much
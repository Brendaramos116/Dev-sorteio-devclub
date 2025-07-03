function generateNumber(){
    const  min = Math.ceil(document.querySelector(".input-right").value)
    const  max = Math.floor(document.querySelector(".input-left").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    alert("Seu núemro sorteado é: " + result)

    document.querySelector(".input-right").value = ""
    document.querySelector(".input-left").value = ""
}


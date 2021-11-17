const myImages = ["MG1.jpeg","MG2.jpeg","MG3.jpeg","MG1.jpeg","MG2.jpeg","MG3.jpeg"]
const imgContainer = document.getElementById("flex-container")
const resultEl = document.getElementById("score")
const failedAttemptsEl = document.getElementById("failed-attempts")
const newBtnEl = document.getElementById("new-btn")
let checkImgArr = []
let clickCount = 0
let score = 0
let failedAttempts = 0

window.addEventListener("load", function() {
    let imgs = ''
    let arr = []
    for (let i = 0; i < 6; i++) {
        let imgNo = Math.floor(Math.random() * myImages.length)
        if (arr.includes(imgNo)) {
            i--;
        }
        else {
            arr.push(imgNo)
            imgs += `
            <div class="flex-box" id="flex-box">   
                <img src="${myImages[imgNo]}" class="img-thumbnail" alt="..." id= "img-${imgNo}" onclick="getImage(${imgNo},${i})">
            </div>
            `
        }
    }
    imgContainer.innerHTML = imgs

    let elemntConst
    let array=[]
    let imgId= []
    setTimeout(function() {
        /* console.log(document.querySelectorAll("img")) */
        array = document.querySelectorAll("img")
        
        for(let i = 0; i < array.length; i++) {
            imgId[i] = array[i].id
            /* console.log(array[i].id) */
            elemntConst= document.getElementById(imgId[i])
            elemntConst.setAttribute("src","MG5.jpeg")
        }
    }, 1*1000);
})

newBtnEl.addEventListener("click",function() {
    location.reload()
})

function getImage(thisImgNo,atposition) {
    let array=[]
    array = document.querySelectorAll("img")
    let thisImage
    for (let i = 0; i < array.length; i++) {
        if(atposition == i)
        {
            thisImage = document.getElementById(array[i].id)
            thisImage.setAttribute("src",myImages[thisImgNo])
            thisImage.onclick = null
            console.log(myImages[thisImgNo])
            checkImg(myImages[thisImgNo])
        }
    }
}

function checkImg(imgSrc) {
    checkImgArr.push(imgSrc)
    clickCount++
    if(clickCount == 2) {
        if(checkImgArr[0] == checkImgArr[1]) {
            showResult(true)
        }
        else {
            showResult(false)
            clickCount = 0
            stopClick()
        }
    } else if(clickCount == 4) {
        if(checkImgArr[2] == checkImgArr[3]) {
            showResult(true)
        }
        else {
            showResult(false)
            stopClick()
            clickCount = 0
        }
    } else if(clickCount == 6) {
        showResult(true)
        clickCount = 0
        imgContainer.textContent = "You Win !!!"
    }
}

function stopClick() {
    let array=[]
    array = document.querySelectorAll("img")
    let imgId
    for (let i = 0; i < array.length; i++) {
        imgId = document.getElementById(array[i].id)
        imgId.onclick = null
    }
}

function showResult(res) {
    if(res) {
        resultEl.textContent = `Score: ${++score}`
        failedAttemptsEl.textContent = `Failed Attempts: ${failedAttempts}`
    } else if(!res){
        resultEl.textContent = `Score: ${score}`
        failedAttemptsEl.textContent = `Failed Attempts: ${++failedAttempts}`
    } else {
        resultEl.textContent = `Score: ${score}`
        failedAttemptsEl.textContent = `Failed Attempts: ${failedAttempts}`
    }
}


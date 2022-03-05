const checkWord = document.querySelector('.word')
const btn = document.querySelector('.btn-check')
const result = document.querySelector('.result-correct')
const resultUnCorrect = document.querySelector('.result-unCorrect')
const formLabel = document.querySelector('.form__label')
const rightInner = document.querySelector('.right-answer')
const words = {
    'automatically': 'автоматически',
    'event': 'событие',
    'publish': 'публиковать',
    'last': 'длиться',
    'forever': 'вечно',
    'last for about two hours': 'длиться около двух часов',
    'inform your assistant': 'информировать вашего ассистента',
    'available tomorrow morning': 'доступен завтра утром',
    'get dark': 'темнеть',
    'sign': 'подписать',
}
let array_of_mean = []

for (key in words) {
    array_of_mean.push(key)
}

let itr = 0
let unCoorect = 0;
function showWord(){
    if(array_of_mean[itr]){
        checkWord.innerHTML = `Слово: ${array_of_mean[itr]}`
        formLabel.innerHTML = array_of_mean[itr]
    }else{
        checkWord.innerHTML = unCoorect > 0 ? `У вас ${unCoorect} ошибок,попробуйте еще раз` : `Ви на все слова ответили правильно! Поздравляю!`
        return 1
    }
}
function checkTranslation(){
    const mean = document.querySelector('.translate').value
    if(mean.length > 0){
        if(mean.trim() == words[array_of_mean[itr]]){
            result.innerHTML = `Ви ответили правильно: ${itr + 1} раз`
            document.querySelector('.translate').value = ''
            if(words[array_of_mean[itr + 1]]){

            }else{
                clearResult()
            }
            itr++
        }else{
            document.querySelector('.translate').value = ''
            resultUnCorrect.innerHTML = `Ви ответили не правильно: ${unCoorect + 1} раз`
            rightInner.innerHTML = `Правильний ответ: ${words[array_of_mean[itr]]}!`
            unCoorect++
        }
    }
}
function clearResult(){
    result.innerHTML = ''
    resultUnCorrect.innerHTML = ''
    formLabel.innerHTML = ''
    rightInner.innerHTML = ''
}

btn.addEventListener('click',()=>{
    checkTranslation()
    showWord()
})
showWord()
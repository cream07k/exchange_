const current_1 = document.getElementById('currencyOne')
const current_2 = document.getElementById('currencyTwo')
const inP1 = document.getElementById('amount-one')
const inP2 = document.getElementById('amount-two')
const rateText = document.getElementById('rate_C_two')
const btn = document.getElementById('btn')

let currentRate = 1

current_1.addEventListener('change', calculateMoney)
current_2.addEventListener('change', calculateMoney)
inP1.addEventListener('input', calculateMoney)
inP2.addEventListener('input', calculateMoney)

btn.addEventListener('click', () => {
    const tmpCurrency = current_1.value
    current_1.value = current_2.value
    current_2.value = tmpCurrency

    const tmpAmount = inP1.value
    inP1.value = inP2.value
    inP2.value = tmpAmount

    calculateMoney()
})

function calculateMoney() {
    const one = current_1.value
    const two = current_2.value
    const amount = parseFloat(inP1.value) || 1

    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
        .then(res => res.json())
        .then(data => {
            currentRate = data.rates[two]
            const result = (amount * currentRate).toFixed(2)
            inP2.value = inP1.value ? result : ''
            rateText.innerText = `1 ${one} = ${currentRate.toFixed(2)} ${two}`
        })
        .catch(() => {
            rateText.innerText = 'ไม่สามารถโหลดข้อมูลได้'
        })
}

calculateMoney()

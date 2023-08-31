const toggleButton = btn => {
  if (btn.classList.contains('open')) {
    btn.classList.remove('open')
    btn.textContent = '+'
  } else {
    const buttons = document.querySelectorAll('.btn.open')
    buttons.forEach(openButton => {
      openButton.classList.remove('open')
      openButton.textContent = '+'
    })
    btn.classList.add('open')

    switch (true) {
      case btn.classList.contains('btn1') :
        btn.textContent = '— Автостоянка'
        break
      case btn.classList.contains('btn2'):
        btn.textContent = '— Жилой комплекс'
        break
      case btn.classList.contains('btn3') :
        btn.textContent = '— Стадион'
        break
      case btn.classList.contains('btn4') :
        btn.textContent = '— Железнодорожный вокзал'
        break
      case btn.classList.contains('btn5') :
        btn.textContent = '— Административное здание'
        break
      case btn.classList.contains('btn6') :
        btn.textContent = '— Набережная'
        break
      case btn.classList.contains('btn7') :
        btn.textContent = '— Аэротруба'
        break
      case btn.classList.contains('btn8') :
        btn.textContent = '— Бассейн'
        break
      case btn.classList.contains('btn9') :
        btn.textContent = '— Тренажерный клуб'
        break
      case btn.classList.contains('btn10') :
        btn.textContent = '— Отель'
        break

    }
  }
}

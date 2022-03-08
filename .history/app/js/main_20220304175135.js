$(function () {

  {/* getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */ }


  const d = new Date(2022, 2, 4)
  const year = d.getFullYear()
  const date = d.getDate()

  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const dayName = days[d.getDay()]

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const monthName = months[d.getMonth()]

  const week = (date) => {
    if (date < 8) {
      return week = 1
    } if else (date < 15) {
      return week = 1
      week = 2
    }
  }

  



  const formatted = `${dayName}, ${date} ${monthName} ${year}`
  console.log(formatted)

})
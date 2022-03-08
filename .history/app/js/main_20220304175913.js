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
      return ' неделя'
    } else if (date < 15) {
      return 2
    } else if (date < 22) {
      return 3
    } else if (date < 29) {
      return 4
    } else {
      return 5
    }
  }

  const weekName = week(date)
  



  const formatted = `${dayName}, ${date} ${weekName} ${monthName} ${year}`
  console.log(formatted)

})
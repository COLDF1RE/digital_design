$(function () {

  {/* getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */ }

  

  



  const d = new Date(2022, 2, 1)
  const year = d.getFullYear()
  const date = d.getDate()

  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  const dayIndex = d.getDay()
  const dayName = days[dayIndex]

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  const monthIndex = d.getMonth()
  const monthName = months[monthIndex]





  const formatted = `${dayName}, ${date} ${monthName} ${year}`
  console.log(formatted)

})
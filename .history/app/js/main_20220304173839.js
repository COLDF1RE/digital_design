$(function () {

  {/* getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */ }

  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  const months = ['января', 'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]



  const d = new Date(2022, 0, 1)
  const year = d.getFullYear()
  const date = d.getDate()

  const dayIndex = d.getDay()
  const dayName = days[dayIndex]

  const monthIndex = d.getMonth()
  const monthName = months[monthIndex]


  console.log(date)
  console.log(monthName)


  const formatted = `${dayName}, ${date} ${monthName} ${year}`
  console.log(formatted)

})
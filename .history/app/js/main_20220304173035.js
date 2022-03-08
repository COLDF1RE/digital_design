$(function () {

{/* getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */}
  
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]




  const d = new Date(2022,0,1)
  const year = d.getFullYear()
  const date = d.getDate()

  

  const monthIndex = d.getMonth()
  const monthName = months[monthIndex]
  

  console.log(date)
  console.log(monthName)

})
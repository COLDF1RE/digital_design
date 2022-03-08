$(function () {

  {/* getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года */ }
  function getDayInfo(dates) {

    const [DD, MM, YYYY] = dates.split('.')
  
    const d = new Date(YYYY, MM-1, DD)
    const year = d.getFullYear()
    const date = d.getDate()


    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const dayName = days[d.getDay()]

    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    const monthName = months[d.getMonth()]

    const week = (date) => {
      if (date < 8) {
        return 1
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

    // const week = (DD) => {
    //   if (DD < 8) {
    //     return 1
    //   } else if (DD < 15) {
    //     return 2
    //   } else if (DD < 22) {
    //     return 3
    //   } else if (DD < 29) {
    //     return 4
    //   } else {
    //     return 5
    //   }
    // }
    // const weekName = week(DD)




    const formatted = `${dayName}, ${date} число ${weekName} неделя ${monthName} ${year} года`
    // const formatted = `${dayName}, ${DD} число ${weekName} неделя ${monthName} ${YYYY} года`



    console.log(formatted)
  }

  getDayInfo('01.01.2022')
  getDayInfo('15.12.2021')
  getDayInfo('04.03.2022')
  getDayInfo('30.03.2022')


})
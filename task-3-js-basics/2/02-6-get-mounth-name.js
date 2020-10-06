const monthName = date => new Date(date).toLocaleString('en-US', { month: 'long' })

console.log(monthName('10/11/2009'))
console.log(monthName('11/13/2014'))

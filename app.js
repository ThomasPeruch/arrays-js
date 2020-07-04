const users = [
    {name: 'Connor Kenway', premium : true},
    {name: 'Ezio Auditore', premium : true},
    {name: 'Arno Dorian', premium : false},
    {name: 'Jacob Frye', premium : false},
    {name: 'Bayef of Siwa', premium : true},
]

const premiumUser = users.filter(user => user.premium)

console.log(premiumUser)
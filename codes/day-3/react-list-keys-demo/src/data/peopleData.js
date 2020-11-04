let people = [
    {
        name: 'anil',
        id: 1,
        age: 20
    },
    {
        name: 'sunil',
        id: 2,
        age: 30
    },
    {
        name: 'joydip',
        id: 3,
        age: 40
    }
]

export const updatePeople = (newPeople) => {
    people = newPeople;
}

export const getPeople = () => {
    return people;
}
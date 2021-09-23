const exercise = () => {
  // Replace unknown with the correct type and fix the errors

  // Exercise 1:
  type User = unknown;

  const users: unknown[] = []

  users.push(1, 2, 3, 4)

  // Exercise 2:
  const person = (user: unknown) => {
    return user.name, user.age
  }
  person({name: "Gustavo", age: 28})

  // Exercise 3:
  interface Car {
    model: string;
    year: number;
  }

  const cars: Car[] = [
    {
      model: "Fiat",
      year: 2000
    },
    {
      model: "Renault",
      year: 2017,
      color: "black"
    }
  ]

  // Exercise 4:
  interface Buyer<T> {
    name: string,
    age: T,
    height: T,
    gender: unknown // we should only accept male, female, other
    phone?: T,
    firstTimeUser: boolean
  }

  type BuyerInfo = Buyer

  const user: BuyerInfo = {
    age: 18,
    height: 120,
    gender: "fish",
    name: "Sad face",
    firstTimeUser: true
  }
}
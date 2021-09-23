let foo = 23 // Infered as number type

foo = "Hello"

/* ---- */

let bar: any = 23 // Try to avoid this

bar = "Hello"

/* ---- */

let age: unknown 

let a: unknown
let b: unknown
let c = a * b // unkown is a type safe (a * b) doesn't work

/* ---- */

let foobar; // Infered to as any type

foobar = 23
foobar = "23"

/* ---- */

let barfoo: number

barfoo = 23
barfoo = "23"

/* ---- */

type Style = 'bold' | 'italic'; // Union type using |

let fontSize: Style = "bold"

fontSize = "Someting"
fontSize = 23
fontSize = "bold"
fontSize = "italic"

type StyleWidth = 768 | 1080

let windowSize: StyleWidth = 768
windowSize= 1080
windowSize = 2400

/* ---- */

interface Person {
    first: string,
    last: string,
    /**/
    [key: string]: any
}

const person: Person = {
    first: 'Gustavo',
    last: 'Monteiro'
}

const person2: Person = {
    first: 'Jose',
    last: 'Quinas',
    fast: true
}

/* ---- */

// Functions

const multiply = (x, y) => {
    return x * y
}

multiply("23", "aa") // Fail

const multiply2 = (x: number, y: number) => {
    return x * y
}
multiply2("23", "aa")
multiply2(2, 2)

/* ---- */

const multiply3 = (x: number, y: number): string => { // Declare string as returned value, update function return value
    return (x * y).toString()
} 
multiply3(2, 2)

const multiply4 = (x: number, y: number): void => { // void, no return value
    (x * y).toString()
} 

/* ---- */

// Arrays
const arr: number[] = []

arr.push(1)
arr.push("abc")

/* ---- */

interface Person2 {
    first: string,
    last: string,
}

const human: Person2[] = []

human.push({
   first: "lala",
   last: "lele",
   something: "abc"
})

/* ---- */

interface Person {
    first: string,
    last: string
}
  
interface Person2 { // Extending Person2 declared above
    age: number
}
  
const user: Person[] = []
const user2: Person[] | Person2[] = []

user.push({
    first: "Gustavo",
    last: "Monteiro",
})

user2.push({
    first: "Gustavo",
    last: "Monteiro"
})

user2.push({
    first: "Gustavo",
    last: "Monteiro",
    age:23
})

/* ---- */

interface Person3 {
    first: string,
    last?: string,
}

const user3: Person3[] = []

user3.push({
    first: "Robert"
})

/* ---- */

type MyList = number[]

const list: MyList = []

list.push(1233)

/* ---- */

// Generics



const func = <T>(arr: T[]) => { 
    return arr[0]
}

func([2,"3"])
func<string>([2,"3"])

const fooFunc = <T>(arr: Array<T>): T => {return arr[0]} // Different way to declar parameter generic type

interface Car<T> {
    tires: T,
    headlights: T,
    damaged?: boolean,
    model: string
}

type CarParts = Car<number>

const car: CarParts = {
    tires: 4,
    headlights: 2,
    model: "Renault"
}

 // Interface vs type

/*
    Interface is always object
    You can merge interfaces but not types
*/
interface One {
    name: string
}

interface One {
    last:string
}

const merge: One = {
    name: "asdsa",
    last: "last"
}

type Two = {
    name: string
}
type Two = {
    last: string
}

/*
    The in keyword can be used to iterate over all of the items in an union of keys
*/

type Keys = "firstname" | "surnam"

type LaLa = {
    [key in Keys]: string
}

const test: LaLa = {
    firstname: "ASDsadsa",
    surnam: "asdasdsadsa"
}

/*
    We cannot use this with interfaces
*/
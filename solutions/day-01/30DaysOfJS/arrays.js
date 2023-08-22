//Can use var or let to declare a variable
//const for constants
//Avoid var - has function scope
//const and let have block scope

//CREATION
    //Can crete with constructor or square brackets
    const arr1 = Array() 
    //number in () will be size of empty array
    //can fill all elements with a single static value with .fill()
        //e.g. const eight = Array(5).fill(8)

    const arr2 = []

    //Creating from string
    let js = 'JavaScript'
    const charsInJavaScript = js.split('')  // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    const companies = companiesString.split(',') // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]


//DATA TYPES
    //Arrays can store different data types
    const nums = [1, 5, 6, 8, 10]
    const sts = ['hey', 'babe', 'boom', 'bam']
    //array containing a string, integer, boolean and dictionary
    const mixed = ['Asabaneth', 250, true, {country: 'Finland', city: 'Helsinki'}]


//MODIFICATION
    //Can change array elements even when using const
    const numbers = [1, 2, 3, 4, 5]
    numbers[0] = 10 // changing 1 at index 0 to 10
    numbers[1] = 20 // changing  2 at index 1 to 20


//CONCATENATION
    const firstList = [1, 2, 3]
    const secondList = [4, 5, 6]
    const thirdList = firstList.concat(secondList)

    console.log("Concatenation: ", thirdList)

//LENGTH
    console.log(nums.length)

//INDEX
    //Getting index of an item in an array 
    //indexOf() - returns index or -1 if it doesn't exist
    //this function can also be used soley to check existence of element in array
    const nummies = [1, 2, 3, 4, 5]
    console.log(nummies.indexOf(1)) // 0
    console.log(nummies.indexOf(7)) // -1

//CONVERSION
    // toString : converts arrays to strings
    const test = [1, 5, 7, 8, 3, 64]
    test1 = test.toString()
    console.log("Conversion: ", test1)

//JOINING
    //Essentially array to string - specify how each element is put together, what goes in beteen them
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

    console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
    console.log(names.join('')) //AsabenehMathiasEliasBrook
    console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
    console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
    console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook


//SLICING
    //Takes out subsection of array based on two parameters: start and end index
    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.slice()) // -> it copies all  item
    console.log(numbers.slice(0)) // -> it copies all  item
    console.log(numbers.slice(0, numbers.length)) // it copies all  item
    console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

//SPLICE ELEMENTS
    //Really weird - removes item and replaces other items if desired
    //i.1 - starting index. i.2 - no. of items to remove. i.3-...elements to insert in that place
    const numbers = [1, 2, 3, 4, 5, 6]
    console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//ADDING ITEMS
    //Uses Push() function - adds item to *end*
    const arr = ['item1', 'item2', 'item3']
    arr.push('new item')
    // ['item1', 'item2','item3','new item']

    //Unshift() - add item to beginning
    const numbers = [1, 2, 3, 4, 5]
    numbers.unshift(0) // -> add one item from the beginning
    // -> [0,1,2,3,4,5]

//REMOVING
    //Pop() function - removes item from *end*
    const numbers = [1, 2, 3, 4, 5]
    numbers.pop() // -> remove one item from the end
    // -> [1,2,3,4]

    //Shift() - remove element from beginning 
    const numbers = [1, 2, 3, 4, 5]
    numbers.shift() // -> remove one item from the beginning
    // -> [2,3,4,5]


//REVERSE
    const numbers = [1, 2, 3, 4, 5]
    numbers.reverse() // -> reverse array order

    console.log(numbers) // [5, 4, 3, 2, 1]


//SORT
    //Sorts array elements in ascending order
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
    ]
    
    webTechs.sort()
    console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

//Looping
    //For Of
        //The for of loop is very handy to use it with array. If we are not interested in the index of the array a for of loop is preferable to regular for loop or forEach loop.
        const numbies =  [1, 2, 3, 4, 5]
        for (let numby of numbies) {
            console.log(numby)
        }

        //or
        const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
        for(const country of countries) {
            console.log(country)
        }

    //forEach
    //v different - this is a method of the array itself
    //Used when we want to use index (can also just use basic for loop)
    numbies.forEach((number, i) => {
        console.log(number)
    })
    //not used to this sort of convention, esp =>


//Last Loop
//for in
//Used for object literals - using keys
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }
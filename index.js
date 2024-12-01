// Задача 1
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i =0;
while(i<numbers.length){
  sum+=numbers[i];
  i++;
}
console.log(`Сумма чисел: ${sum}`);

// Задача 2
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

for(let i=0;i<books.length;i++){ 
    const book = books[i];
    console.log(`Название: ${book.title}`);
    console.log(`Автор: ${book.author}`);
    console.log(`Количество страниц: ${book.numberOfPages}`);
    console.log(`Жанр: ${book.genre}`);
    console.log(`Награды:`);
    for(let j=0;j<book.awards.length;j++){
        console.log(`  - ${book.awards[j]}`);
    }
    console.log("------------");

}

// Задача 3
function calculateAveragePages(){
    let sumu =0;
    let k;
    for(let i=0;i<books.length;i++){
        const one = books[i];
        sumu+=one.numberOfPages;
        k = sumu/books.length;
    }
    console.log(k);
    
}
// Задача 4
function repeatString(){
    let str = "hello";
    let n = 3;
    let r = ""
    for(let i=0;i<n;i++){
        r+= str.trim();
    }
    console.log(r);
}

// Задача 5
function calculateAverage(){
    const arr = [10, 20, 30, 40, 50, 60];
    let sum1 = 0;
    let r =0;
    for(let i=0;i<arr.length;i++){
        sum1+=arr[i];
        r = sum1/arr.length;
    }
    console.log(`Сумма чисел: ${r}`);
}

// Задача 6
function countEvenNumbers(){
let ff = [1,2,3,4,5,6]
for(let i=0;i<ff.length;i++){ 
    if( ff[i]%2==0){
        console.log(ff[i]);
    }      
}
console.log(ff[i]);
}

calculateAveragePages()
repeatString();
calculateAverage();
countEvenNumbers()

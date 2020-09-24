/*let student = () => 
{
    let studentName = ""
    let parameName = ""

    while(studentName.toUpperCase() != parameName)
    {
        studentName = prompt ("Enter Student Name")

        alert(`Your Name Is ${studentName} registered!!!`)
    }
}
student() */

/* let people = () => 
{
    let age = 0, paramAge = 0
    let count = -1
    let totalAge = 0, averangeAge = 0

    do
    {
        age = parseInt(prompt('Enter Age'))

        if(age <= 18)
        {
            alert('I Am Sorry!!')
        }
        else
        {
            alert('Welcome!!')
        }

        totalAge = totalAge + age

        totalAge += age

        count++
    }
    while (age != paramAge);

    console.log(`Cant: ${count} & Total: ${totalAge}`)

} 
people()  */

// ForEach

//Example One

/* let ranks = ['A','B','C']

ranks.forEach(function (e)
{
    console.log(e)
    document.write(e)
}) */

//Example Two

function Counter() {
    this.count = 0;
    let self = this;
    return {
        increase: function () {
            self.count++;
        },
        current: function () {
            return self.count;
        },
        reset: function () {
            self.count = 0;
        }
    }
}
let counter = new Counter();
let numbers = [1, 2, 3];
let sum = 0;
numbers.forEach(function (e) {
    sum += e;
    this.increase()
}, counter)
console.log(sum);
document.write(counter.current());
//Imprimir en el documento

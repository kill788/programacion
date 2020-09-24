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

let people = () => 
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
people()   
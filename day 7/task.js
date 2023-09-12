
let a= new XMLHttpRequest;
a.open("get", "https://restcountries.com/v3.1/all")
a.send()
a.onload = function (){
    let data = JSON.parse(a.response);
   

    console.log(" all the countries from Asia continent /region using Filter function")
    const countriesinAsia = data.filter(country =>country.region === "Asia")
    console.log(countriesinAsia)

    for (i=0;i<countriesinAsia.length;i++)
    {console.log(`${i}:${countriesinAsia[i].name.common}`)}

    console.log(" ")
    console.log(  `the countries with a population of less than 2 lakhs using the filter function `)
    const twoLpop = data.filter(country =>country.population<200000)
    console.log(twoLpop)

    for (i=0;i<twoLpop.length;i++)
    {console.log(`
    ${i} Name;${twoLpop[i].name.common}
      Populaion:${twoLpop[i].population}`)}
 

      console.log(" ")
      console.log("Print the name, capital, and flag of each country using the forEach function")

      data.forEach(country => {
        console.log(` 
        Name    : ${country.name.common}
        Capital : ${country.capital}
        Flag    :${country.flags.png}`)
        
      });

    
      console.log(" ")
      console.log("Print the total population of countries using the reduce function")
      
      const Total = data.reduce((total,country) => total+country.population,0)
      console.log(Total)

      console.log(" ")
      console.log("Print the country which uses US Dollars as currency")

      const Usdollars= data.filter(country =>
        country.currencies.code === 'USD')
  
      console.log(Usdollars)

       


   
}






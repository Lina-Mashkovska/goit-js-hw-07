const ulELem = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${ulELem.length}`);

ulELem.forEach((category) =>{
    const title = category.querySelector("h2").textContent;
    const elementsCount = category.querySelectorAll("feSpecularLighting".length);
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});
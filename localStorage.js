const setToLocalStorage = () =>{
    const inputField = document.getElementById('input-id');
    const id = inputField.value;
    const valueField = document.getElementById('value-id');
    const value = valueField.value;

    //set to Local Storage
    if (id && value){
        localStorage.setItem(id,value);
    }
    //clear input & value field
    inputField.value ="";
    valueField.value ="";
}

// set item local storage as a array
localStorage.setItem('Friends',JSON.stringify(["John","Sussan","Don"]));

//set item to lS as a object
const pen = {price :120, color :"Red"};
localStorage.setItem('product',JSON.stringify(pen));

// get  item from local storage
const storedProduct = localStorage.getItem("product");
const productStr= JSON.parse(storedProduct);
console.log(productStr);

// after getting the key value if you change anything you need to set it again to save local storage
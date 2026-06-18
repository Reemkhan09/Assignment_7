const createBtn = document.querySelector(".create");
const formDiv = document.querySelector(".form");
const closeBtn = document.querySelector(".close");
const form = document.querySelector("form");
const productDiv = document.querySelector(".products");

const themeBtn = document.querySelector(".theme-btn");

document.body.setAttribute("data-theme", "light");
document.body.classList.add("light");

themeBtn.addEventListener("click", () => {
    if(document.body.dataset.theme === "light"){
      document.body.setAttribute("data-theme", "dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️ Light Mode"
    } else {
         document.body.setAttribute("data-theme","light");
         document.body.classList.remove("dark");
         document.body.classList.add("light");
         themeBtn.textContent = "🌙 Dark Mode";
    }
})

const productArr = [];

let updateIndex = null;



let ui = () => {

    productDiv.innerHTML = "";
    productArr.forEach((elem,index) => {
      const card = document.createElement("div");
      card.className = "products-card";
     // practice of attributes
      card.setAttribute("data-id", index + 1);
      console.log(card.getAttribute("data-id"))
      card.setAttribute("data-status", "available");
      console.log(card.getAttribute("data-status"))
      card.setAttribute("data-category", elem.category);
      console.log(card.getAttribute("data-category"));
      console.log(card.hasAttribute("data-category"))


      const imageDiv = document.createElement("div");
      imageDiv.className = "img";

      const img = document.createElement("img");
      img.src = elem.image;

      imageDiv.appendChild(img);

      const textDiv = document.createElement("div");
      textDiv.className = "text";
      const h2 = document.createElement("h2");
      const title = document.createTextNode(elem.productName);
      h2.appendChild(title);
      const p1 = document.createElement("p");
      p1.appendChild(document.createTextNode(elem.description));

      const p2 = document.createElement("p");
      p2.appendChild(document.createTextNode(elem.price));

      textDiv.append(h2,p1,p2);
     

      const btns = document.createElement("div");
      btns.className = "btns"

      const updateBtn = document.createElement("button");
      updateBtn.className = "update";
      updateBtn.appendChild(document.createTextNode("Update"));

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete";
      deleteBtn.appendChild(document.createTextNode("Delete"));

      updateBtn.addEventListener("click", () =>{
        updateProduct(index);
      });

      deleteBtn.addEventListener("click", () => {
        deleteProduct(index);
      } );

      btns.append(updateBtn, deleteBtn);

       card.append(imageDiv,textDiv, btns);
      productDiv.appendChild(card);
    })
}


createBtn.addEventListener("click", () => {
   formDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none"
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let category = event.target[0].value
    let productName = event.target[1].value;
    let description = event.target[2].value;
    let price = event.target[3].value;
    let image = event.target[4].value;

   if(category.trim() === "" || productName.trim() === "" || description.trim()  === "" || price.trim()  === "" || image.trim()  === ""){
    alert("All inputs are required")
     return
   } 
   
    let obj = {
        category,
        productName,
        description,
        price,
        image,
    }

    if(updateIndex !== null){
        productArr[updateIndex] = obj;
        updateIndex = null;
    }else{
        productArr.push(obj)
    }

    
    ui();
     formDiv.style.display = "none"
     console.log(productArr);

     form.reset();
})

const updateProduct = (index) => {
 
    formDiv.style.display = "flex";
   let prod = productArr[index];
     updateIndex = index;

  form[0].value = prod.category
 form[1].value = prod.productName
 form[2].value = prod.description
 form[3].value = prod.price
 form[4].value = prod.image
}
 
const deleteProduct = (index) => {
    productArr.splice(index, 1);
    ui()
}



    //     productDiv.innerHTML += ` <div class="products-card">
    //     <div class="img">
    //       <img src="${elem.image}" alt="">
    //     </div>
    //     <div class="text">
    //         <h2>${elem.productName}</h2>
    //         <p>${elem.description}</p>
    //         <p>${elem.price}</p>
    //     </div>
    //     <div class="btns">
    //         <button onclick="updateProduct('${elem.productName}')" class="update">Update</button>
    //         <button onclick="deleteProduct(${index})"
    //          class="delete">Delete</button>

    //     </div>
    //    </div>`
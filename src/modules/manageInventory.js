//Modules
import { getDatabase, ref, remove, get, onValue, update } from "firebase/database";

//config
import firebase from "../firebase";

const database = getDatabase(firebase);
const inventoryRef = ref(database,"story-inventory");
//TODO:correct spelling error - story-inventory


export function isInStock(itemID) {
    let inStock = false;
    const itemRef = ref(database,`story-inventory/${itemID}`);
    onValue(itemRef,response =>{
        const numberInStock = response.val().number;
        numberInStock > 0 ? inStock = true : inStock = false;
    })
    return inStock;
};

export function removeOneItem(itemID) {
    //if sold out, return error message?
}

export function addOneItem(itemID) {

}

export function initialInventoryItemIDs(){
    get(inventoryRef).then(snapshot => {
        const inventoryItems = snapshot.val();
        inventoryItems.forEach((item,index) => {
            const itemRef = ref(database, `story-inventory/${index}`);
            update(itemRef, {"id":index});
        })
    })
}


// export function updateItemID(itemID){
//     const itemRef = ref(database,`story-inventory/${itemID}`);

//     get(itemRef).then(snapshot=>{
//         if (snapshot.exists()){
//             update(itemRef, {"id": itemID})
//         }
//     })
// }

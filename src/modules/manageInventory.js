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

export function removeItemFromInventory(itemID) {
    const itemRef = ref(database,`story-inventory/${itemID}`);
    get(itemRef).then(snapshot=>{
        if (snapshot.exists()){
            const itemCount = snapshot.val().number;
            if (itemCount>0){
                update(itemRef, {"number": itemCount-1});
            }
        }
    })
}

export function addItemsToInventory(itemID, numberToAdd) {
    const itemRef = ref(database, `story-inventory/${itemID}`);
    get(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
            let itemCount = snapshot.val().number;
            update(itemRef, {"number": itemCount + numberToAdd });
        }
    });
    
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

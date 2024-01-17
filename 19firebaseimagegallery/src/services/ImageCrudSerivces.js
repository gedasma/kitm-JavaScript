import firebase from "../firebase";

export const addImage = (data)=>{
    firebase
    .firestore()
    .collection('images')
    .add(data)
}

export const getAllImages = (onImageChanged, user)=>{
    firebase
    .firestore()
    .collection('images')
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshot)=>{
        const newImage = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onImageChanged(newImage)
    })
    console.log("read works")
}

export const deleteImage = (id) =>{
    firebase
    .firestore()
    .collection('images')
    .doc(id)
    .delete()
}

export const showById = (item, id) =>{
    firebase
    .firestore()
    .collection('images')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})
}

export const updateWork = (id, data)=>{
    firebase
    .firestore()
    .collection('images')
    .doc(id)
    .set(data)
}
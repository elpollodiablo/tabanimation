function make_id(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function deep_copy(obj) {
  if (obj === null) {
    return obj;
  } else if (typeof obj !== "object") {
    return obj;
  } else {
    let newObj =
      typeof obj === "object" && obj.length !== undefined ? [] : {};
    for (let key in obj) {
      if (key) {
        newObj[key] = deep_copy(obj[key]);
      }
    }
    return newObj;
  }
}
export { deep_copy as deep_copy, make_id as make_id }



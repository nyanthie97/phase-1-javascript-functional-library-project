function myEach(collection, callback){
    let arr = []
    if (Array.isArray(collection)) {
          arr = collection;
    } else if (typeof collection === 'object' && collection !== null) {
              arr = Object.values(collection);
            }
    for (let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
    return collection
}

function myMap (collection, callback){
    let arr = []
    if (Array.isArray(collection)) {
          arr = collection;
        } else if (typeof collection === 'object' && collection !== null) {
              arr = Object.values(collection);
            }
            let newArray = []
            for (let i = 0; i < arr.length; i++){
              newArray.push(callback(arr[i]))
            }

            return newArray  
}
function myReduce(collection, callback, acc){
    let arr = []
    if (Array.isArray(collection)) {
          arr = collection;
        } else if (typeof collection === 'object' && collection !== null) {
              arr = Object.values(collection);
            }
            let currValue = acc;
            if (!acc) {
              currValue = arr[0];
              for (let i = 1; i < arr.length; i++) {
                currValue = callback(currValue, arr[i], arr);
              }
            } else {
              for (let i in arr) {
                currValue = callback(currValue, arr[i], arr)
              }
            }

            return currValue;
          }

          function myFind(collection, predicate) {
            let obj = [...collection]
              if (collection instanceof Array === false) {
                  obj = Object.values(collection)
              }
              for (let i = 0; i < obj.length; i++) {
                  if (predicate(obj[i])) {
                      return obj[i]
                  }
              }
              return undefined
          }

          function myFilter(collection, predicate) {
            let obj = [...collection]
              if (collection instanceof Array === false) {
                  obj = Object.values(collection)
              }
              const newCollection = []
              for (let i = 0; i < obj.length; i++) {
                  if (predicate(obj[i])) {
                      newCollection.push(obj[i])
                  }
              }
              return newCollection
          }

          function mySize(collection) {
            let obj = [...collection]
            if (collection instanceof Array === false) {
                obj = Object.values(collection)
            }
            return obj.length
          }

          function myFirst(array, n) {
            if (typeof n !== 'number') {
              return array[0]
            }
            else {
              let newArray = []
              for (let i = 0; i < n; i++) {
                  newArray.push(array[i])
              }
              return newArray
            }
          }

          function myLast(array, n) {
            if (typeof n !== 'number') {
              return array[array.length - 1]
            }
            else {
              let newArray = []
              for (let i = 1; i <= n; i++) {
                  newArray.unshift(array[array.length-i])
              }
              return newArray
            }
          }

          function myKeys (object) {
            const arrOfKeys = []
            for (let key in object) {
                arrOfKeys.push(key)
            }
            return arrOfKeys
          }

          function myValues (object) {
            const arrOfValues = []
            for (let key in object) {
                arrOfValues.push(object[key])
            }
            return arrOfValues
          }
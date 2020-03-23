

export const getTodoList = () => {
  return new Promise((resolve, reject) => {


    setTimeout( () => {
      resolve(['item 1 api', 'item 2 api', 'item 3 api'])
    }, 2000)
    

  })
}

export const secondApiCall = () => {
  return new Promise((resolve, reject) => {


    setTimeout( () => {
      resolve(['item 1 api', 'item 2 api', 'item 3 api'])
    }, 2000)
    

  })
}
let user = {
  firstName : "Ankit",
  lastName : "Sinha",
  img: `https://pbs.twimg.com/profile_images/1019277956286304256/DBOt4zgP_400x400.jpg`
}

export function handleLogin(username, password){
console.log(username, password)

  return new Promise((resolve,reject) => {
    if(username === "nnnkit" && password === "script"){
      resolve(user)
    } else {
      reject("User doesnot Exist!");
    }
  })
}
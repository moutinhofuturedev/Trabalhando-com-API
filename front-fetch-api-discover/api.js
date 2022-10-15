const url = "http://localhost:5500/api"

// get => buscando dados da api da aplicação node-api-discover
function getUsers() {
    const initialize = fetch(url)
    const response = initialize.then(res => res.json()) // até aqui, sempre teremos uma promessa pendente
    const data = response.then(result => renderApi.textContent = JSON.stringify(result))

    return data 
}

// Get com params
// consumindo dados dos parâmetros da api da aplicação node-api-discover
function getUserParameter() {
    const parameter = fetch(`${url}/2`)
    const response = parameter.then(res => res.json()) //uma promise pendente
    const data = response.then(result => {
        userId.textContent = result.id
        userName.textContent = result.name
        userCity.textContent = result.city
        userAvatar.src = result.avatar
    })

    return data
}

//POST
// fazendo um post com fetch para cadastrar um novo user fora do objeto original com dados iniciados
function addUser(newUsers) {
    const postUser = fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUsers),
        headers: { 'Content-Type': 'application/json; charset=utf-8'}
    })

    const response = postUser.then(res => res.json()) //uma promise pendente
    const data = response.then(result => alertApi.textContent = result)

    return data
}

// novo usuário cadastrado na api de node-api-discover
const newUsers = {
  name: "Nikolov Lazar",
  city: "San Francisco",
  avatar: "https://avatars.githubusercontent.com/u/5396211?v=4",
}

// PUT
// Vamos fazer um update com PUT no usuário já cadastrado
function updateUser(updatedUser) {
    const getUpdate = fetch(`${url}/2`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: { 'Content-Type': 'application/json; charset=utf-8'},
    })
    const response = getUpdate.then(res => res.json())
    const data = response.then(result => alertApi.textContent = result)

    return data
}

const updatedUser = {
    name: 'Jakeliny',
    avatar: 'https://avatars.githubusercontent.com/u/17316392?v=4',
    city: 'Berlin',
}

//DELETE
function deleteUser(id) {
    const getUserForDelete = fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=utf-8'}
    })
    const response = getUserForDelete.then(res => res.json())
    const data = response.then(result => alertApi.textContent = result)

    return data
}

// chamando as functions
getUsers().catch(err => renderApi.textContent = err.message)
getUserParameter().catch(error => console.log(error.message))
addUser(newUsers).catch(err => console.log(err.message))
updateUser(updatedUser).catch(err => console.log(err.message))
// deleteUser(5)
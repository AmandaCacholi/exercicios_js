let friendsList = ["Ryan", "Kieran", "Mark", "Noel", "Amanda", "Marcus", "Mark"]

function friend(friends){
    
    let names = []
    for (let i = 0; i<friends.length; i++)
    {
        if (friends[i].length == 4)
        {
            names.push(friends[i])
        }
    }
    return names
}

console.log(friend(friendsList))

//GET https://artpromotion.azurewebsites.net/api/Artists/3fa85f64-5717-4562-b3fc-2c963f66afa6

import React from 'react'

const USER= {
  "id": "da051d59-d6f5-4707-258b-08da5219c2b6",
  "name": "john",
  "email": "john@gmail.com",
  "phoneNumber": "+254734120",
  "description": "Arts with passion, beauty in craft",
  "brand": "JonnieArts",
  "location": "Nairobi",
  "address": "EXPRESS KENYA. LIMITED. P.O.BOX 67577",
  "artistImageUrl": "https://image.shutterstock.com/image-vector/young-man-avatar-character-600w-661669825.jpg"
}
function Account({user}) {
  console.log('user',user)
  return (
    <div>
      
      <h1>{user.brand}</h1>
    </div>
  )
}

export default Account
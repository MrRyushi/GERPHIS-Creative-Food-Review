import React from 'react'
import Nav from '../Components/Nav'
import Image from 'next/image'

const reviews = [
  {
    username: 'Sully Sullivan',
    date: '2021-10-01',
    content: 'I love the food here! The adobo is so good!',
    image: '/adobo.png',
    stars: 5
  },
  {
    username: 'Mike Wazowski',
    date: '2021-10-02',
    content: 'The lumpia is so crispy and delicious!',
    image: '/lumpia.png',
    stars: 4
  },
  {
    username: 'Sarah Connor',
    date: '2021-10-03',
    content: 'The bicol express is so spicy and flavorful!',
    image: '/bicol_express.png',
    stars: 5
  }
]

const Country = () => {
  return (
    <div className="bg-gradient-to-t from-gradient2 to-gradient1 overflow-hidden xl:h-screen">
      {/* Header */}
      <Nav />
      
      {/* Main */}
      <div>
        <h1>Spice Quest</h1>
        <h2>Filipino Foods Food Review</h2>
      </div>

      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <div>
              <h3>{review.username}</h3>
              <h4>{review.date}</h4>
            </div>
            <div>
              <p>{review.content}</p>
              <Image src={review.image} alt={review.username} width={150} height={150}/>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Country
import React from 'react';
import Category from './Category';
import soprano from '../../assets/soprano.jpg'
import concert from '../../assets/concert.jpg'
import tenor from '../../assets/tenor.jpg'

const Categories = () => {

    const cardData = [
        {
            id: 1,
            name: 'Soprano',
            image: { soprano },
            location: "Dhaka",
            resalePrice: "2000",
            originalPrice: "4000",
            yearOfUse: "2",
            postedTime: "2am ,23rd Jan, 2022",
            sellerName: "Charlie Puth",
            description: 'The most common and standard type of ukulele is the soprano ukulele. It’s the smallest ukulele and is known for its thin, jangly sound so commonly associated with ukuleles. Because it’s so small, it’s perfect for traveling.Sometimes people with larger fingers or hands have trouble playing the soprano ukulele because the frets are closer together. Because the strings have less tension on a soprano uke, you might find it easy to accidentally bend a string out of tune. Despite these relatively minor downsides, the soprano ukulele is probably the best bang for the buck. In comparison to other types of ukuleles, it can usually be had for the cheapest price.',


        },
        {
            id: 2,
            name: 'Concert',
            image: { concert },
            location: "Chittagong",
            resalePrice: "1990",
            originalPrice: "5000",
            yearOfUse: "1.5",
            postedTime: "10am ,2nd June, 2022",
            sellerName: "Justin Biber",
            description: 'The concert ukulele, sometimes referred to as the alto, is just a little bit bigger than the soprano and some would consider it to have a fuller sound. It’s commonly tuned in standard tuning like the soprano uke although some people will opt to tune their g-string down an octave to low G tuning, also known as linear tuning. Because a concert uke is longer than a soprano, there will be more tension on the strings. This can be beneficial if you find yourself bending strings out of tune as you press your fingers down on the strings against the frets. Additionally, the frets are slightly more spaced on a concert ukulele versus a soprano, so folks with larger fingers might find it easier to play. There can be up to 20 frets on a concert ukulele, which allows players to navigate to higher notes on the fretboard which is beneficial for playing in styles like fingerstyle.',


        },
        {
            id: 3,
            name: 'Tenor',
            image: { tenor },
            location: "Cox's Bazar",
            resalePrice: "2000",
            originalPrice: "4000",
            yearOfUse: "2",
            postedTime: "2am ,23rd Jan, 2022",
            sellerName: "Prateek Kuhad",
            description: 'The tenor ukulele is just a little bit bigger than the concert uke. The overall sound and tone is even fuller than its smaller brothers. For performers, the tenor ukulele is ideal because you get a rich full sound, and since you have more frets, you’re able to reach higher notes on the fretboard.Tenor ukuleles are commonly tuned in standard re-entrant or linear tuning, but some will choose to tune it lower like a baritone ukulele to D-G-B-E.',


        },
    ]


    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
            {
                cardData.map(card => <Category
                    key={card.id}
                    card={card}
                ></Category>)
            }
        </div>
    );
};

export default Categories;
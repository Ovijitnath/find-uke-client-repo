import { useQuery } from '@tanstack/react-query';

import Category from './Category';


const Categories = () => {

    const { data: catagories = [] } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch('https://find-uke-server.vercel.app/catagories');
            const data = await res.json();
            return data
        }
    });




    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
            {
                catagories.map(card => <Category
                    key={card._id}
                    card={card}
                ></Category>)
            }
        </div>
    );
};

export default Categories;
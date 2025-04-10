import React from 'react'
import { useEffect, useState } from "react"
import Cards from './assets/Cards'
import Navbar from './Navbar'


const Products = () => {

    const [apiData, setApiData] = useState([])
    const [currentPage, setCurrentPage] = useState(1); // Current page number 1   
    const itemsPerPage = 6; // Number of items to display per page



    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('https://dummyjson.com/products')
            const json = await response.json()
            setApiData(json.products);
            // const data=json.products;

        }
        fetchData()


    }, [])

    const indexOfLastItem = currentPage * itemsPerPage; // Index of the last item on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Index of the first item on the current page             
    const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem); // Get the items for the current page


    const nextpage = () => {
        setCurrentPage(currentPage + 1);
    }
    const prevpage = () => {
        setCurrentPage(currentPage - 1);
    }   

    return (
        <>
        <Navbar/>
            <div className="grid grid-cols-3 gap-4 p-4" >
                {apiData.length > 0 && currentItems.map((e) => {
                    return (
                        <div>
                            <Cards key={e.id} title={e.title} price={e.price}  images={e.images[0]} rating={e.rating} />
                        </div>
                    )
                })}

                <div className="col-span-3 flex justify-between mt-4">
                    <button 
                    onClick={prevpage}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg">Previous</button>
                    <span className='px-4 py-2 bg-blue-500 text-white rounded-lg'>{currentPage}</span>
                    <button
                    onClick={nextpage} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
                </div>


            </div>
        </>
    )
}

export default Products

// title={apiData[0].title}
// title={apiData[0].title} img={elem.images[0]}
{/* <h1>{apiData.length>0 && apiData[0].title}</h1> */ }
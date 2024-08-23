import React,{ useEffect , useState } from 'react'

function Cocktail() {
    const url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function cocktail2() {
            const res = await fetch(url)
            const data1 = await res.json()
            console.log(data1)
            setData(data1.drinks)
        }
        cocktail2()
    }, []);
    const handleclick = async () => {
        const url2 =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        const res1 = await fetch (url2)
        const data2 = await res1.json();
        setData(data2.drinks)
        console.log
    }
  return (
    <>
    <div className='full'>
    <div className='la'>
    <input className='input' type="text" onChange={(e) => {
        setSearch(e.target.value)
    }}/>
    <button className='btn' onClick={handleclick}>Click Me</button>
    </div>
      {data.map((pack) => {
        const {strDrink, strDrinkThumb, strCategory, idDrink} = pack
        return (
            <>
                <div className='full2'>
                <div key={idDrink}>
                  <br />
                    <div className='sc'>{strDrink}</div>
                    <br />
                    <br />
                    <div className='sc'>{strCategory}</div>
                    <br />
                    <br />
                    <img  className='img' src={strDrinkThumb} alt="" />
                </div> 
                </div>
            </>
        )
      })}
    </div>
    </>
  )
}

export default Cocktail

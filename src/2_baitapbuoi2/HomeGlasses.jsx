import React, {useState} from 'react'

import Header from './Header'
import data from './dataGlasses.json'
import './home.css'
import Glasses from './Glasses'
import GlassesDetails from './GlassesDetails'
import GlassesList from './GlassesList'


function HomeGlasses() {
  const [product, setProduct] = useState(null)

  const selectGlass = (product) => {
    setProduct(product)
  }

  console.log("product",product);
  return (
    <div className='BG-Glasses'>
                <Header />
                <div className='container'>
                    <div className='row mt-5'>
                        <Glasses />
                        <GlassesDetails product={product}/>
                    </div>
                </div>
                <GlassesList products={data} onSelect={selectGlass} />
      </div>
  )
}

export default HomeGlasses
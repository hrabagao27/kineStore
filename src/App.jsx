import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import Card from './components/Card'
import products from './db/data'


const App = () => {
  const [selectedCategory,setSelectedCategory] = useState(null)

  //Input filter
  const [query,setQuery] = useState("")

  const handleInputChange = (event) => {
    setQuery(event.target.value); 
    //esta funcion se ejecuta cada que un cambio suceda en el input principal
    //así se cambia el valor y se realizan busquedas sin necesidad de un submit
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 
    /*
    compara que lo introducido en el input coincida 
    con el nombre de algún articulo, si no la funcion
    devuelve -1 caso contrario devuelve un array con los
    indices donde hay coincidencias
    */
  );

  



  //radio filters

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };



  //filter

  function filteredData(products,selected,query){
    let filteredProducts = products;
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );

  }


  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
    )
}

export default App
function CategoryFilter(){
    return (
      <form>
        <label htmlFor="category-filter">Filter</label>
        <select name="category-filter" id="category-filter" onChange={(e)=>{
            console.log(e.target.value)
        }}>
          <option value="all clothing">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
        </select>
      </form>
    );
}

export default CategoryFilter;
import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}) {

    return (
        <div className='lmj-categories'>
            <div className='lmj-categories-title'><b>Catégories</b></div>
            <div className='lmj-categories-buttons'>
                {categories.map((category) =>
                    <button className='lmj-categories-buttons-item'
                            onClick={() => setActiveCategory(category)}
                            value={activeCategory}
                            onChange={(e) => setActiveCategory(e.target.value)}>
                        <b>{category}</b>
                    </button>
                )}
            </div>

        </div>
    )
}

export default Categories
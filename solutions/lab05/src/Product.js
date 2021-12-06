function Product(){
    return(
        <div>
            <img src="/images/default.jpg" />
            <div>
                <h2>Title</h2>
                <p>
                    by: Author<br />
                    published: year, country<br />
                    language: lang<br />
                    pages: num-pages<br />
                    price: $x<br />
                </p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default Product;
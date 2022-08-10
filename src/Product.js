const Product = ({ product }) => {
    return (
        <article>
            <h2>{product.title}</h2>
            <p>{product.body}</p>
            <p>Post ID: {product.id}</p>
        </article>
    )
}
export default Product
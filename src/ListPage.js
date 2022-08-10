import Product from "./Product.js"

const ListPage = ({ searchResults }) => {
    const results = searchResults.map(post => <Product key={post.id} post={post} />)
    const content = results?.length ? results : <article><p>No Matching Pets</p></article>

    return (
        <div>{content}</div>
    )
}
export default ListPage
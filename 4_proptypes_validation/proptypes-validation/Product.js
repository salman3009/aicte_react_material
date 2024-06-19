import PropTypes from 'prop-types'

function Product({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

Product.propTypes = {
  name: PropTypes.string,
//   name: PropTypes.bool,
// name: PropTypes.number
}

export default Product
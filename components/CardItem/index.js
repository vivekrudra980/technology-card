import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, className, imgUrl} = cardDetails
  return (
    <li className={`${className} card`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

const GifItem = ({title, url}) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img src={url} alt={title} />
    </div>
  )
}

export default GifItem

function ItemGallery(props) {
  return (
    <>
      <img
        className="w-96 mb-4"
        src={props.img}
        onClick={() => {
          props.change(props.img);
        }}
      ></img>
    </>
  );
}

export default ItemGallery;

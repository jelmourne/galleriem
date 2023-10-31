function ListProduct() {
  return (
    <div className="flex justify-between border-b-[1px] m-2 border-separate p-3">
      <p>T-Shirt</p>
      <div className="flex">
        <img src="./Modify.svg" className="mx-2"></img>
        <img src="./Delete.svg" className="mx-2"></img>
      </div>
    </div>
  );
}

export default ListProduct;

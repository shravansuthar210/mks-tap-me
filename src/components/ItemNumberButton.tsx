const ItemNumberButton = ({ icon, onClick }: any) => {
  return (
    <div
      className="rounded-sm border-2 h-8 w-8 text-lg text-center inline-block align-bottom "
      style={{
        fontSize: 35,
      }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default ItemNumberButton;

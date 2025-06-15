

const List = ({list}) => {
    const {logo,category_name, availability,} = list;
    return (
        <div className=" w-auto py-8 px-8  rounded-lg bg-slate-100 gap-5">
            <img src={logo} alt="" />
            <p className="text-xl text-black mt-5 font-semibold">{category_name}</p>
            <p>{availability}</p>
        </div>
    );
};

export default List;
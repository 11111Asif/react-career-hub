

const List = ({list}) => {
    const {logo,category_name, availability,} = list;
    return (
        <div className=" w-auto py-5 px-5 h-[260px] rounded-sm bg-slate-100 gap-5">
            <img src={logo} alt="" />
            <p className="text-2xl text-black font-semibold">{category_name}</p>
            <p>{availability}</p>
        </div>
    );
};

export default List;
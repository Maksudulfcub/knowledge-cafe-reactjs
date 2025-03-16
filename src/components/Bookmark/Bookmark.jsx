
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <p className="text-sm font-semibold bg-white p-3 rounded-md mt-3">{title}</p>
        </div>
    );
};

export default Bookmark;
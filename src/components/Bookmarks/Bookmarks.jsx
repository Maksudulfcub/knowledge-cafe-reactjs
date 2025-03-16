import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="lg:w-1/3 mt-10">
            <h1 className="text-blue-700 bg-sky-100 border border-blue-400 p-4 text-center rounded-md font-semibold">Spent time on read : {readingTime}min</h1>
            <div className="p-4 bg-gray-100 rounded-lg mt-3">
                <h2 className="font-semibold">Bookmarked Blogs : {bookmarks.length}</h2>
                <div>
                    {
                        bookmarks.map((bookmark,idx) => <Bookmark
                            key={idx}
                            bookmark={bookmark}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;
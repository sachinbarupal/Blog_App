import { AppBar } from "../../containers/AppBar";
import { usePublish } from "./usePublish";

export const Publish = () => {
  const { formData, handleChange, publishBlog } = usePublish();

  return (
    <>
      <AppBar />
      <div className="flex justify-center pt-8">
        <div className="w-full max-w-screen-lg">
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              handleChange(e, "title");
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold  rounded-lg block w-full p-2.5"
            placeholder="Title"
          />

          <div className="w-full my-4 ">
            <div className="flex items-center justify-between border">
              <div className=" bg-white rounded-b-lg w-full">
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => {
                    handleChange(e, "content");
                  }}
                  rows={8}
                  className="focus:outline-none block w-full text-base text-gray-800 bg-white border-0 pl-2"
                  placeholder="Write an article..."
                />
              </div>
            </div>

            <button
              onClick={publishBlog}
              className="mt-4 inline-flex items-center px-5 py-2.5 text-sm
                  font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

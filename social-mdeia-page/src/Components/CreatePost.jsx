import { useContext, useEffect } from "react";
import { ContextAPI } from "../Store/Context";
import { Form, useActionData, useNavigate } from "react-router-dom";

const PostForm = () => {
  const { addPost } = useContext(ContextAPI);
  const newPost = useActionData();
  const navigate = useNavigate();

  // When action returns new post → update context + redirect
  useEffect(() => {
    if (newPost) {
      addPost(newPost);          // 👈 Correct place
      navigate("/home");         // 👈 Redirect
    }
  }, [newPost]);

  return (
    <div className="container-fluid py-4 d-flex justify-content-center">
      <Form method="POST" action="/create" className="FormEdit w-100">
        <h5 className="formHeading">
          <b>CREATE POST</b>
        </h5>
        {/* Input Fields Section */}
        <div className="inputContainer mx-auto">
          <input
            type="text"
            name="userId"
            className="form-control mb-3"
            placeholder="User id"
          />
          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Title"
          />
          <textarea
            rows="4"
            name="body"
            type="text"
            className="form-control mb-3"
            placeholder="Body"
          />
          <input
            type="text"
            name="tags"
            className="form-control mb-4"
            placeholder="Tags"
          />
          <input
            type="text"
            name="reactions"
            className="form-control mb-3"
            placeholder="Reactions"
          />

          {/* Button (50% width and centered) */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
              Add Post
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const FormSubmitAction = async (data) => {
  const FormData = await data.request.formData();
  const FormDataResponse = Object.fromEntries(FormData);
  FormDataResponse.tags = FormDataResponse.tags
    ? FormDataResponse.tags.split(" ")
    : [];
  console.log(FormDataResponse);
  const response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(FormDataResponse),
  });
  const result = await response.json();
  console.log("RESULT => ", result);

  // 🔥 FIX: DummyJSON always returns same id (252)
  // So assign your own unique id
  result.id = crypto.randomUUID();

  return result;
};

export default PostForm;

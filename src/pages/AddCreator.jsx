import { useState } from "react";
import { supabase } from "../client.jsx";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .insert([
        {
          name,
          url,
          description,
          imageUrl: imageUrl || null,
        },
      ])
      .select();

    if (error) {
      console.error("Error adding creator:", error);
    } else {
      console.log("Creator added successfully:", data);
      navigate("/");
    }
  };

  return (
    <div className="add-creator">
      <h2>Add New Creator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

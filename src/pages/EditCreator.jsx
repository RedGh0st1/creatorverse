import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageUrl(data.imageUrl || "");
        setYoutube(data.youtube || "");
        setTwitter(data.twitter || "");
        setInstagram(data.instagram || "");
      }
    };
    fetchCreator();
  }, [id]);

  return (
    <div className="edit-creator">
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit_creator_name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="edit_creator_url">
          <label>URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="edit_creator_description">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="edit_creator_image">
          <label>Image</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="edit_creator_socials">
          <h3>Social Media Links </h3>
          <p>Provide at least one of the creator's social media handles</p>
        </div>
        <button type="submit">Submit</button>
        <button type="delete" onClick={handleDelete}>
          Delete
        </button>
      </form>
    </div>
  );
}

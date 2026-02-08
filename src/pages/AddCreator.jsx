import { useState } from "react";
import { supabase } from "../client.jsx";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const creatorData = {
      name,
      url,
      description,
      imageUrl: imageUrl || null,
      youtube: youtube || null,
      twitter: twitter || null,
      instagram: instagram || null,
    };

    const { data, error } = await supabase
      .from("creators")
      .insert([creatorData])
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
      <form onSubmit={handleSubmit}>
        <div className="add_creator_name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="add_creator_url">
          <label>URL</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        <div className="add_creator_description">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="add_creator_image">
          <label>Image</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="Social_media_links">
          <h3>Social Media Links </h3>
          <p>Provide at least one of the creator's social media handles</p>
        </div>
        <div className="add_creator_youtube">
          <label>YouTube</label>
          <input
            type="url"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>
        <div className="add_creator_twitter">
          <label>Twitter</label>
          <input
            type="url"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className="add_creator_instagram">
          <label>Instagram</label>
          <input
            type="url"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

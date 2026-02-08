import { supabase } from "../client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
      }
    };
    fetchCreator();
  }, [id]);

  return <div className="edit-creator">EditCreator</div>;
}

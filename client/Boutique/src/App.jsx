import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { UidContext } from "./component/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.action";
import { getPosts } from "./actions/post.action";

function App() {
  const [uid, SetUid] = useState(null);
  const dispatch = useDispatch();

  const fetchToken = async () => {
    try {
      const res = await axios.get("http://localhost:5000/jwtid", {
        withCredentials: true,
      });
      SetUid(res.data);
    } catch (err) {
      SetUid(null);
    }
  };

  // Utilise un useEffect avec une dépendance vide pour ne récupérer le token qu'une seule fois lors du montage initial
  useEffect(() => {
    fetchToken();
  }, []);

  // Utilise un autre useEffect pour appeler getUser(uid) lorsque uid est mis à jour
  useEffect(() => {
    if (uid !== null) {
      dispatch(getUser(uid));
    }
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UidContext.Provider>
  );
}

export default App;

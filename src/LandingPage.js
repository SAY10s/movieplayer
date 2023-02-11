import "./App.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landingpage">
      <div
        className="title"
        onClick={() => {
          navigate("/odbierzprezent");
        }}
      >
        Odbierz prezent!
      </div>
    </div>
  );
};

export default LandingPage;

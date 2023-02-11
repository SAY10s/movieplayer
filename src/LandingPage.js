import "./App.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landingpage">
      <div>Witaj w "Tytuł gry"!</div>
      <div
        onClick={() => {
          navigate("/odbierzprezent");
        }}
      >
        Odbierz prezent
      </div>
      <div
        onClick={() => {
          navigate("/graj");
        }}
      >
        Graj
      </div>
      <div
        onClick={() => {
          navigate("/osiagniecia");
        }}
      >
        Osiągnięcia
      </div>
    </div>
  );
};

export default LandingPage;

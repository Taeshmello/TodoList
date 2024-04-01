import "./Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <h3 style={{color:"white"}}>오늘은 📅</h3>
      <h1 style={{color:"white"}}>{new Date().toDateString()}</h1>
    </div>
  );
};

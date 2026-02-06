import "./Header.css";

export default function Header(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
      </nav>
    </div>
  );
}

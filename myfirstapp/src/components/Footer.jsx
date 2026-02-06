
import "./Footer.css";
export default function Footer(props) {
  
  return (
    <footer>
      <nav classname="foot">
      <p>{props.year[1]} {props.name.location}</p>
      </nav>
    </footer>
  );
}


export default function Footer(props)
{
   
    return(
        <>
        <footer className="footer">
            <p>{props.year[2]}  {props.company.location}</p>
        </footer>
        
        </>
    )
}
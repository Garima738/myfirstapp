export default function Product({data}){
    return(
        <div>
            <h4>
                Name:{data.name}
            </h4>
            <p>
                Desc:{data.Desc}
            </p>
            <p>
                Country:{data.country}
            </p>

        </div>
    );
}
const[items,setitems]= useState([]);
const[input,setinput]=useState("");
const[error,seterror]=useState("");
const additem=()=>{
    const itemname=input.trim();
    if(itemname===""){
        seterror("Item name cannot be empty");
        return;
    }
    const exists = items.some((item)=>item.name.toLowerCase()===itemname.toLowerCase());
    if(exists){
        seterror("Item already in the list");
      return;
    }

    setitems([...items,{name:itemname,purchased:false}]);
    setinput("");
    seterror("");
};
const deleteitem = (index)=>{
    const newitems = items.filter((_,i)=>i!==index);
     setitems(newitems);
};
const togglepurchased=(index)=>{
    const updateditems = [...items];
    updateditems[index].purchased = !updateditems[index].purchased;
    setitems(updateditems);
}
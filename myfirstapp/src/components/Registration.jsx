import"./Registration.css";
export default function Registration()


{
    return(
        <div >
            <nav class="reg"> 
            <form >

                <label>
                    Name:
                    <input 
                        type="text" 
                        placeholder="Provide your name" 
                    />
                </label>

                <br /><br />

                <label>
                    Email:
                    <input 
                        type="email" 
                        placeholder="Provide your email" 
                    />
                </label>

                <br /><br />

                <label>
                    Password:
                    <input 
                        type="password" 
                        placeholder="Provide your password" 
                    />
                </label>

                <br /><br />

                <button type="submit">Register</button>

            </form>
            </nav>
            </div>
            )
}
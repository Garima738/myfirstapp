import "./Registration.css"

export default function Registration() {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form className="form">
        <label>
          Name
          <input type="text" placeholder="Enter your name" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>

        <label>
          Number
          <input type="number" placeholder="Enter your number" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}
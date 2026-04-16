export default function Form() {
  return (
    <div>
      <h2>Query Form</h2>

      <form>
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input type="email" />
        </div>

        <br />

        <div>
          <label>Query: </label>
          <br />
          <textarea placeholder="Enter your query here"></textarea>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
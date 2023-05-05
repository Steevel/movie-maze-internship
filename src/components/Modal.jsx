import { useState } from "react";

const Modal = ({ movieData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(null);

  function submitForm(e) {
    e.preventDefault();

    if (name && email && seatNumber && date) {
      const userData = { name, email, seatNumber, date };
      localStorage.setItem("userData", JSON.stringify(userData));
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }

  function clearForm() {
    setSuccess(null);
    setName("");
    setEmail("");
    setDate("");
    setSeatNumber("");
  }

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Book Movie
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h3>{movieData.name}</h3>
              <p className="badge rounded-pill text-bg-success fs-6 pb-2">
                {movieData.status}
              </p>
              <p>
                <strong>Language:</strong> <em>{movieData.language}</em>
              </p>
              <p>
                <strong>Runtime:</strong>
                <em> {movieData.runtime || movieData.averageRuntime} min</em>
              </p>
              <p>
                <strong>Premiered:</strong>
                <em> {movieData.premiered?.split("-").reverse().join("-")}</em>
              </p>
              <p>
                <strong>Rating:</strong>
                <em> {movieData.rating?.average * 10}%</em>
              </p>
            </div>

            <form>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Seat Number
              </label>
              <input
                type="number"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </form>
            {success && (
              <div className="alert alert-success mt-2" role="alert">
                You successfully booked your seat!
              </div>
            )}
            {success === false && (
              <div className="alert alert-danger mt-2" role="alert">
                Please fill all the details!
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={clearForm}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={submitForm}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

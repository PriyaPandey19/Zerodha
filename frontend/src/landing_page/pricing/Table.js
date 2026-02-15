import React from "react";

function Table() {
  return (
    <div className="container my-5">
      {/* ACCOUNT OPENING */}
      <h2 className="fw-normal mb-5">Charges for account opening</h2>

      <div className="table-responsive border rounded mb-5">
        <table className="table table-borderless align-middle mb-0 table-xxl">
          <thead className="table-light">
            <tr>
              <th className="fw-normal">Type of account</th>
              <th className="fw-normal">Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success px-3 py-2">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success px-3 py-2">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DEMAT AMC */}
      <h2 className="fw-normal mb-4 mt-5">
        Demat AMC (Annual Maintenance Charge)
      </h2>

      <div className="table-responsive border rounded">
        <table className="table  table-borderless align-middle mb-0 table-xxl">
          <thead className="table-light">
            <tr>
              <th className="fw-normal">Value of holdings</th>
              <th className="fw-normal">AMC</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="badge bg-success px-3 py-2">FREE*</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh – ₹10 lakh</td>
              <td>₹100 per year, charged quarterly*</td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-muted small mt-3">
        * Lower AMC is applicable only if the account qualifies as a Basic
        Services Demat Account (BSDA). BSDA account holders cannot hold more
        than one demat account. To learn more about BSDA,
        <br></br>
        <a href="#" className="text-decoration-none">
             click here
        </a>
        .
      </p>
    </div>
  );
}

export default Table;
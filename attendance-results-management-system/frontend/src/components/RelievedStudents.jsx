import React, { useState } from 'react';

const RelievedStudents = () => {
  const [formData, setFormData] = useState({ branch: '', year: '', semester: '' });
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSemesterChange = (e) => {
    setFormData({ ...formData, semester: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Fetch relieved students data
  };

  const handleSubmit2 = (e, name, semester, percentage) => {
    e.preventDefault();
    // Handle email sending
  };

  const handlereport = (name, semester, percentage) => {
    // Handle print letter
  };

  const calculatePercentage = (item) => {
    // Calculate attendance percentage
    return null;
  };

  const getPercentageBySemester = (item) => {
    // Get percentage by semester
    return null;
  };

  return (
    <div className='flex'>
      <div>
        <div className="i-box">
          <select id="branch" name="branch" className='att2-input-row'
            value={formData.branch} onChange={handleFormChange}>
            <option value="" disabled>Select Department</option>
            <option value="cm">DCME</option>
            <option value="ec">DECE</option>
            <option value="ee">DEEE</option>
            <option value="mech">DMEC</option>
            <option value="c">DCE</option>
            <option value="ae">DAE</option>
            <option value="arch">DARCH</option>
          </select>
          <br />
          <select id="year" name="year" className='att2-input-row'
            value={formData.year} onChange={handleFormChange}>
            <option value="" disabled>Year of joining (of batch)</option>
            <option value="21">2021</option>
            <option value="22">2022</option>
            <option value="23">2023</option>
          </select>
          <select id="semester" name="semester" className='att2-input-row'
            value={formData.semester} onChange={handleSemesterChange}>
            <option value="" disabled>Select Semester</option>
            <option value="1">Year1</option>
            <option value="3">Sem3</option>
            <option value="4">Sem4</option>
            <option value="5">Sem5</option>
            <option value="6">Sem6</option>
          </select>
          <br />
          <center>
            <button type="submit" className="submit-button" onClick={handleSubmit}>Submit</button>
          </center>
        </div>
      </div>

      <div>
        {submitted && (
          <form>
            <div className='name1'>
              <table className='custom-table1' cellPadding={1}>
                <tbody className='table-text'>
                  <tr>
                    <th>Student Pin Number</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;{formData.semester !== '' ? `Semester ${formData.semester}` : ''}</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;Send Post</th>
                    <th>&nbsp;&nbsp;Send Email&nbsp;&nbsp;</th>
                  </tr>
                  {data.map((item) => {
                    const percentage = calculatePercentage(item);
                    if (item.name !== "SELECT STUDENT" && percentage !== null) {
                      if (percentage > 75) return null;
                      return (
                        <tr key={item.id}>
                          <td className='thimp'>&nbsp;&nbsp;&nbsp;{item.name}</td>
                          <td className='thimpx'>{getPercentageBySemester(item)}</td>
                          <td>
                            <input type="button" className='invalid-buttonx'
                              onClick={() => handlereport(item.name, formData.semester, percentage.toFixed(2))}
                              value='Print Letter' />
                          </td>
                          <td>
                            <input type="button" className='blue-button' value='Next'
                              onClick={(e) => handleSubmit2(e, item.name, formData.semester, percentage.toFixed(2))} />
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RelievedStudents;

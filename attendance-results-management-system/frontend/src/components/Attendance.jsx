import React, { useState } from 'react';

const Attendance = () => {
  const [formData, setFormData] = useState({ branch: '', year: '' });
  const [data, setData] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Fetch student list and show table
    setIsTableVisible(true);
    setIsSubmitted(true);
  };

  const handleCheckboxChange = (id) => {
    setData(data.map(item =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    ));
  };

  const handleDropdownChange = (id, value) => {
    setData(data.map(item =>
      item.id === id ? { ...item, selectedValue: value } : item
    ));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle attendance upload logic
  };

  return (
    <div>
      <div className='table1'>
        <div className='entire'>
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
              <button type="submit" className="submit-button p-lft" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>

          {isTableVisible && (
            <div className={`dashb-table name1 ${isEditable ? '' : 'not-editable'}`}>
              Date: {selectedDate}
              <form>
                <tbody className='table-text'>
                  <tr>
                    <th>&nbsp;Student Pin Number&nbsp;</th>
                    <th>&nbsp;Tick if absent&nbsp;</th>
                    <th>&nbsp;Select number of periods Attended&nbsp;</th>
                  </tr>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <th>{item.name}</th>
                      <td>
                        <input
                          type="checkbox"
                          checked={item.isChecked}
                          onChange={() => isEditable && handleCheckboxChange(item.id)}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <select
                          id={`branch_${item.id}`}
                          name={`branch_${item.id}`}
                          className="att-input-row"
                          value={item.selectedValue}
                          disabled={!isEditable || item.isChecked}
                          onChange={(e) => isEditable && handleDropdownChange(item.id, e.target.value)}
                        >
                          {Array.from({ length: 7 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <br />
                {isSubmitted && (
                  <button type="submit" className="submit-button p-lft" onClick={handleUpload}>
                    Upload
                  </button>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;

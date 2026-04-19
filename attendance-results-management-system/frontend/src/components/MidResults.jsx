import React, { useState } from 'react';

const subjectsBySemester = {
  '1': ['S1', 'S2', 'S3', 'S4', 'S5'],
  '3': ['S1', 'S2', 'S3', 'S4'],
  '4': ['S1', 'S2', 'S3', 'S4'],
  '5': ['S1', 'S2', 'S3', 'S4'],
  '6': ['S1', 'S2', 'S3', 'S4'],
};

const MidResults = () => {
  const [formData, setFormData] = useState({ branch: '', year: '' });
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [data, setData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
    setSelectedSubject('');
  };

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleDropdownChange = (id, value) => {
    setData(data.map(item =>
      item.id === id ? { ...item, selectedValue: value } : item
    ));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Fetch students for selected branch/year/semester/subject
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Upload mid exam results
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
                <option value="DCME-shift1-">DCME -SHIFT 1-</option>
                <option value="DCME-shift2-">DCME -SHIFT 2-</option>
                <option value="DECE-shift1-">DECE -SHIFT 1-</option>
                <option value="DECE-shift2-">DECE -SHIFT 2-</option>
                <option value="DEEE-shift1-">DEEE -SHIFT 1-</option>
                <option value="DEEE-shift2-">DEEE -SHIFT 2-</option>
                <option value="DMEC">DMEC -SHIFT 1-</option>
                <option value="DCE">DCE -SHIFT 1-</option>
                <option value="DAE">DAE -SHIFT 1-</option>
                <option value="DARCH">DARCH -SHIFT 1-</option>
              </select>
              <br />
              <select id="year" name="year" className='att2-input-row'
                value={formData.year} onChange={handleFormChange}>
                <option value="" disabled>Year of joining (of batch)</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
              </select>
              <select className='att3-input-row' id="semester"
                value={selectedSemester} onChange={handleSemesterChange} required>
                <option value="" disabled>Select Semester</option>
                <option value='1'>Year 1</option>
                <option value='3'>Semester 3</option>
                <option value='4'>Semester 4</option>
                <option value='5'>Semester 5</option>
                <option value='6'>Semester 6</option>
              </select>
              {selectedSemester && (
                <select className='att3-input-row' id="subject"
                  value={selectedSubject} onChange={handleSubjectChange} required>
                  <option value="" disabled>Select Subject Code</option>
                  {subjectsBySemester[selectedSemester].map((subjectCode) => (
                    <option key={subjectCode} value={subjectCode}>{subjectCode}</option>
                  ))}
                </select>
              )}
              <button type="submit" className="submit-button p-lft" onClick={handleSubmit}>Submit</button>
            </div>
          </div>

          <div className='dashb-table name1'>
            <form>
              <tbody className='table-text'>
                <tr>
                  <th>&nbsp;Student Pin Number&nbsp;</th>
                  <th>&nbsp;Enter Marks&nbsp;</th>
                </tr>
                {data.map((item) => (
                  <tr key={item.id}>
                    <th>{item.name}</th>
                    <td>
                      <input
                        type='number'
                        id={`branch_${item.id}`}
                        name={`branch_${item.id}`}
                        className="att-input-row"
                        value={item.selectedValue}
                        onChange={(e) => {
                          const newValue = Math.min(e.target.value);
                          handleDropdownChange(item.id, newValue);
                        }}
                      />
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
        </div>
      </div>
    </div>
  );
};

export default MidResults;

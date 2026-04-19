import React, { useState } from 'react';

const subjectsByYear = {
  '1': ['S1', 'S2', 'S3', 'S4', 'S5'],
  '3': ['S1', 'S2', 'S3', 'S4'],
  '4': ['S1', 'S2', 'S3', 'S4'],
  '5': ['S1', 'S2', 'S3', 'S4'],
  '6': ['S1', 'S2', 'S3', 'S4'],
};

const years = ['1', '3', '4', '5', '6'];

const StudentResults = ({ results1, results2 }) => {
  const [selectedSemester, setSelectedSemester] = useState('1');

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <div className='table1'>
      <div className='tab'>
        <div className='dashboard1'>
          <br />
          <h3>Results</h3>
          <div className='dashboard-text'>
            <div>
              <label htmlFor='semesterSelect'>Select Semester:</label>
              <select id='semesterSelect' className='att4-input-row'
                value={selectedSemester} onChange={handleSemesterChange}>
                {years.map((year) => (
                  <option key={year} value={year}>Semester {year}</option>
                ))}
              </select>
              <br />
              <table className='custom-table box-text ATT-table' id='table1'>
                <thead className='RES-WID'>
                  <tr>
                    <th>Subjects</th>
                    <th>Marks</th>
                    <th>During</th>
                  </tr>
                </thead>
                <tbody>
                  {subjectsByYear[selectedSemester] &&
                    subjectsByYear[selectedSemester].map((subject, index) => (
                      <tr key={index}>
                        <td>{subject}</td>
                        <td style={{
                          color: Number(results1?.[`s${subject}`]) < 35
                            ? 'red'
                            : Number(results2?.[`s${subject}`]) < 50
                              ? 'red' : 'black',
                        }}>
                          {results2?.[`s${subject}`] || results1?.[`s${subject}`]}
                        </td>
                        <td style={{
                          color: Number(results1?.[`s${subject}`]) < 35
                            ? 'red'
                            : Number(results2?.[`s${subject}`]) < 50
                              ? 'red' : 'black',
                        }}>
                          {results1?.[`t${subject}`] || results2?.[`t${subject}`]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
      <center>
        <button className='submit-button' onClick={() => window.print()}>
          Print Report Card
        </button>
      </center>
    </div>
  );
};

export default StudentResults;

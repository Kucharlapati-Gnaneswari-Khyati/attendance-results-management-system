import React, { useState } from 'react';

const ResultsTable = ({ subjects, results1Data, results2Data, results1Data2, results2Data2,
  results1Data3, results2Data3, results1Data4, results2Data4,
  results1Data5, results2Data5, results1Data6, results2Data6 }) => {

  const [year, setYear] = useState('1');
  const [midExam, setMidExam] = useState('1');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="results-container">
      <div className="filters">
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          {['1','2','3','4','5','6'].map(y => (
            <option key={y} value={y}>Year {y}</option>
          ))}
        </select>
        <select value={midExam} onChange={(e) => setMidExam(e.target.value)}>
          <option value="1">Mid Exam 1</option>
          <option value="2">Mid Exam 2</option>
        </select>
      </div>

      <div className="results-table-wrapper">
        <table className="results-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects && subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject}</td>
                <td>
                  {year === '1' && midExam === '1' && results1Data[`s${subject}`]}
                  {year === '1' && midExam === '2' && results2Data[`s${subject}`]}
                  {year === '2' && midExam === '1' && results1Data2[`s${subject}`]}
                  {year === '2' && midExam === '2' && results2Data2[`s${subject}`]}
                  {year === '3' && midExam === '1' && results1Data3[`s${subject}`]}
                  {year === '3' && midExam === '2' && results2Data3[`s${subject}`]}
                  {year === '4' && midExam === '1' && results1Data4[`s${subject}`]}
                  {year === '4' && midExam === '2' && results2Data4[`s${subject}`]}
                  {year === '5' && midExam === '1' && results1Data5[`s${subject}`]}
                  {year === '5' && midExam === '2' && results2Data5[`s${subject}`]}
                  {year === '6' && midExam === '1' && results1Data6[`s${subject}`]}
                  {year === '6' && midExam === '2' && results2Data6[`s${subject}`]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <center>
        <button className="submit-button" onClick={handlePrint}>
          Print Mid Exam Report Card
        </button>
      </center>
    </div>
  );
};

export default ResultsTable;

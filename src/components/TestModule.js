import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestModule = () => {
  const [data, setData] = useState([]);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    // Call your API here
    axios.get('/api/modulemaster')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }, []);

  // Convert flat data to hierarchical
  const buildHierarchy = (flatData) => {
    const map = {};
    const roots = [];

    flatData.forEach(item => {
      map[item.Code] = { ...item, children: [] };
    });

    flatData.forEach(item => {
      if (item.ModuleMasterCode && map[item.ModuleMasterCode]) {
        map[item.ModuleMasterCode].children.push(map[item.Code]);
      } else {
        roots.push(map[item.Code]);
      }
    });

    return roots;
  };

  // Render rows recursively
  const renderMLMRows = (rows, level = 0) => {
    return rows.map(row => (
      <React.Fragment key={row.Code}>
        <tr
          onMouseEnter={() => setHoveredRow(row.Code)}
          onMouseLeave={() => setHoveredRow(null)}
          style={{
            backgroundColor: hoveredRow === row.Code ? '#f0f0f0' : 'transparent',
            cursor: 'pointer'
          }}
        >
          <td style={{ paddingLeft: `${level * 20}px` }}>{row.Description}</td>
          <td>
            {row.MenuName || 'N/A'}
            &nbsp;
            <input type="checkbox" />
          </td>
        </tr>
        {row.children && row.children.length > 0 && renderMLMRows(row.children, level + 1)}
      </React.Fragment>
    ));
  };

  const hierarchicalData = buildHierarchy(data);

  return (
    <table
      id="SubRightsList"
      style={{ width: '480px', fontSize: '16px', textAlign: 'left' }}
      className="table table-bordered"
    >
      <thead style={{ background: '#1078e0' }} className="text-white">
        <tr>
          <th>Sub Description</th>
          <th>Menu</th>
        </tr>
      </thead>
      <tbody>
        {hierarchicalData.length > 0
          ? renderMLMRows(hierarchicalData)
          : <tr><td colSpan="2">No Data Found</td></tr>
        }
      </tbody>
    </table>
  );
};

export default TestModule;

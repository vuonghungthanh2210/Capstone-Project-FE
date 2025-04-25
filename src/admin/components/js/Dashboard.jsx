import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-main-content">
      <div className="admin-container-fluid">
        <h4>Dashboard / Tổng quan</h4>

        {/* Thống kê */}
        <div className="row mt-3">
          {[
            { color: 'warning', text: 'Phim mới', count: 0 },
            { color: 'danger', text: 'Top phim có người xem nhiều', count: 0 },
            { color: 'primary', text: 'User mới/Tổng số user', count: '0/27' },
            { color: 'success', text: 'Số phiên truy cập', count: '0' },
          ].map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className={`card bg-${item.color} text-white p-3`}>
                <h5>{item.count}</h5>
                <p>{item.text}</p>
                <button className="btn btn-light btn-sm">
                  Xem thêm <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Danh sách đơn hàng & User */}
        <div className="row mt-4">
          {[
            {
              title: 'Phim mới',
              headers: ['Order ID', 'Tên phim', 'Thể loại', 'Năm phát hành'],
              data: [['#001', 'Black Mirror (Season 4)', 'Action', '2020']],
            },
            {
              title: 'User mới',
              headers: ['Họ tên', 'Email', 'Số điện thoại'],
              data: [['Nguyễn Văn A', 'nguyenvana@gmail.com', '0123456789']],
            },
          ].map((table, index) => (
            <div className="col-md-6" key={index}>
              <div className="card p-3">
                <h5>{table.title}</h5>
                <table className="table table-dark table-bordered">
                  <thead>
                    <tr>
                      {table.headers.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.data.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, i) => (
                          <td key={i}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-primary btn-sm">Xem tất cả</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

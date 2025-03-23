import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function Dashboard() {

  return (
    <>
      <div className="container mt-4">
            <h2 className="text-center mb-4">Auction Platform Dashboard</h2>

            {/* Dashboard Cards */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h5>Total Auctions</h5>
                            <h2>120</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h5>Active Bids</h5>
                            <h2>45</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-white">
                        <div className="card-body">
                            <h5>Revenue</h5>
                            <h2>$15,300</h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-danger text-white">
                        <div className="card-body">
                            <h5>Pending Approvals</h5>
                            <h2>7</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Auction List Table */}
            <div className="card">
                <div className="card-header bg-dark text-white">
                    Recent Auctions
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Highest Bid</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Vintage Watch</td>
                                <td>$500</td>
                                <td>Ongoing</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Antique Vase</td>
                                <td>$1,200</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Painting</td>
                                <td>$3,400</td>
                                <td>Ongoing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard

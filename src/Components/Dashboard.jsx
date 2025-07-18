import React from "react";
import {
  BarChart2,
  ShoppingCart,
  Users,
  Briefcase,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <div className="text-xl font-bold mb-10">Base</div>
        <nav className="flex flex-col gap-6 text-gray-600">
          <a href="#" className="flex items-center gap-3 text-blue-600 font-semibold">
            <BarChart2 size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <ShoppingCart size={18} /> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <Briefcase size={18} /> Invoice
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <Calendar size={18} /> Schedule
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <MessageSquare size={18} /> Messages
            <span className="text-xs bg-red-500 text-white rounded-full px-2 ml-auto">24</span>
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <Bell size={18} /> Notification
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-blue-600">
            <Settings size={18} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex gap-3">
            <input
              type="date"
              className="border rounded px-3 py-1 text-sm text-gray-600"
            />
            <input
              type="date"
              className="border rounded px-3 py-1 text-sm text-gray-600"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <StatCard icon={<HeartIcon />} label="Save Products" value="178+" color="text-blue-600" />
          <StatCard icon={<BoxIcon />} label="Stock Products" value="20+" color="text-yellow-500" />
          <StatCard icon={<ShoppingBagIcon />} label="Sales Products" value="190+" color="text-purple-600" />
          <StatCard icon={<UsersIcon />} label="Job Application" value="12+" color="text-pink-600" />
        </div>

        {/* Chart & Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Reports</h2>
            {/* Replace with chart component (e.g., Recharts or Chart.js) */}
            <div className="h-48 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <span className="text-sm text-gray-500">[Sales Chart Placeholder]</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Analytics</h2>
            {/* Replace with donut chart */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                80%
              </div>
              <p className="mt-2 text-sm text-gray-600">Transactions</p>
              <div className="flex gap-4 mt-4 text-sm">
                <span className="text-blue-600">● Sale</span>
                <span className="text-orange-500">● Distribute</span>
                <span className="text-yellow-400">● Return</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders & Top Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Tracking no</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Total Order</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td>#876364</td>
                  <td>Camera Lens</td>
                  <td>$178</td>
                  <td className="text-blue-600">325</td>
                  <td>$1,466.60</td>
                </tr>
                <tr>
                  <td>#876368</td>
                  <td>Black Sleep Dress</td>
                  <td>$134</td>
                  <td className="text-blue-600">53</td>
                  <td>$466.60</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="product"
                className="rounded-lg"
              />
              <div>
                <h3 className="font-medium">NIKE Shoes Black Pattern</h3>
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="text-blue-600 font-bold">$87</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
      <div className={`text-2xl ${color}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function HeartIcon() {
  return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>;
}

function BoxIcon() {
  return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.5 6.5L10 10l7.5-3.5-7.5-3.5L2.5 6.5zM2.5 9.5L10 13l7.5-3.5M2.5 12.5L10 16l7.5-3.5" /></svg>;
}

function ShoppingBagIcon() {
  return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16 6V4a2 2 0 00-2-2h-2a2 2 0 00-4 0H6a2 2 0 00-2 2v2H2v2h1l1 10a2 2 0 002 2h8a2 2 0 002-2l1-10h1V6h-2zm-4 0H8V4h4v2z" /></svg>;
}

function UsersIcon() {
  return <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7a3 3 0 11-6 0 3 3 0 016 0zM5 12a4 4 0 018 0v1H5v-1z" /></svg>;
}

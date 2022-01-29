import React from 'react';
import { Outlet } from 'react-router';
import Footer from './footer';
import Header from './header';
import './layout.css';

export default function Layout() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

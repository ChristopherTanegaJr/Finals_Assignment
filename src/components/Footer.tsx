import React from 'react'

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <small>© {new Date().getFullYear()} My Personal Website</small>
    </div>
  </footer>
)

export default Footer

import React from 'react'
import './ContentLayout.styles.scss';

function ContentLayout({children}) {
  return (
    <div className="content-layout">
      {children}
    </div>
  )
}

export default ContentLayout
